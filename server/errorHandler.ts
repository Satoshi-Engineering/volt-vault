import type { H3Event } from 'h3'
import { ZodError } from 'zod'
import type { ServiceError } from '@grpc/grpc-js'
import { status } from '@grpc/grpc-js'
import { isGrpcServiceError } from './domain/lnd/lib/isGrpcServiceError'

const ERROR_PREFIX = '[NitroErrorHandler]'

export default defineNitroErrorHandler((error, event) => {
  const isSensitive = error.unhandled || error.fatal
  const statusCode = error.statusCode || 500
  const statusMessage = error.statusMessage || 'internal server error'

  // From the original event handler https://github.com/nitrojs/nitro/blob/v2.11.1/src/runtime/internal/error/prod.ts
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true })
  if (statusCode === 404) {
    const baseURL = (import.meta as { baseURL?: string }).baseURL || '/'
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return sendRedirect(
        event,
        `${baseURL}${url.pathname.slice(1)}${url.search}`,
      )
    }
  }

  setResponseHeader(event, 'Content-Type', 'application/json')
  setResponseStatus(event, statusCode, statusMessage)

  // From the original event handler https://github.com/nitrojs/nitro/blob/v2.11.1/src/runtime/internal/error/prod.ts
  if (statusCode === 404 || !getResponseHeader(event, 'cache-control')) {
    setResponseHeader(event, 'cache-control', 'no-cache')
  }

  // Handle H3Error without a cause
  if (error.cause == undefined) {
    return sendErrorResponse({
      event,
      data: error,
    })
  }

  // Handle validation Errors (getValidatedQuery and readValidatedBody via Zod.parse)
  if (error.data instanceof ZodError) {
    return sendErrorResponse({
      event,
      data: error,
    })
  }

  // Handle Errors
  const causingError = error.cause

  // Handle thrown Errors that are instances of ZodError
  if (causingError instanceof ZodError) {
    logError('ZodError', error)
    return sendGenericErrorResponse(event)
  }

  if (isGrpcServiceError(causingError)) {
    const h3Error = transformGRPCErrorCodes(causingError)
    setResponseStatus(event, h3Error.statusCode, h3Error.statusMessage)
    return sendErrorResponse({
      event,
      data: h3Error,
    })
  }

  if (!isSensitive) {
    return sendErrorResponse({
      event,
      data: {
        ...error.toJSON(),
        statusMessage: statusCode === 404 ? statusMessage : '',
      },
    })
  }

  // Error was not handled. Send generic 500 response via API and log error in console.
  // Console Hooks & TelegramSender will pick it up.
  logError('Unhandled Exception', error)
  logError('H3Error.cause', error.cause)
  return sendGenericErrorResponse(event)
})

const sendGenericErrorResponse = (event: H3Event) => {
  return sendErrorResponse({
    event,
    data: {
      statusCode: 500,
      message: 'internal server error',
      statusMessage: '',
    },
  })
}

const sendErrorResponse = ({ event, data }: { event: H3Event, data: object }) => {
  return send(event, JSON.stringify(data))
}

const transformGRPCErrorCodes = (error: ServiceError) => {
  if (error.code === status.UNAVAILABLE) {
    const message = 'GRPCClient: Connection unavailable. Is the lnd node running?'
    console.error(`${message}\n${error}`)
    return createError({
      statusCode: 503,
      message,
    })
  }

  // Note: No console.error here on purpose, because most of the errors will be GRPC errors (by lnd)
  return createError({
    statusCode: 502,
    message: `${error}`,
  })
}

const logError = (context: string, error: unknown) => {
  console.error(`${ERROR_PREFIX} ${context}`, error)
}
