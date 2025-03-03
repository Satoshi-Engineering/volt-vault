import { type H3Event, H3Error } from 'h3'
import type { ServiceError } from '@grpc/grpc-js'
import { status } from '@grpc/grpc-js'
import { ZodError } from 'zod'
import { isGrpcServiceError } from './domain/lnd/lib/isGrpcServiceError'
import EmptyGprcResponseError from './domain/lnd/types/EmptyGprcResponseError'

const ERROR_PREFIX = '[NitroErrorHandler]'

export default defineNitroErrorHandler((error, event) => {
  setResponseHeader(event, 'Content-Type', 'application/json')

  //  It should always be a H3Error, but if not send a error and generic 500 response
  if (!(error instanceof H3Error)) {
    logError('Unexpected Error', error)
    return sendGenericErrorResponse(event)
  }

  // Handle H3Error without a cause (createError)
  if (error.cause == undefined) {
    return sendErrorResponse({
      event,
      statusCode: error.statusCode,
      data: error,
    })
  }

  // Handle validation Errors (getValidatedQuery and readValidatedBody via Zod.parse)
  if (error.data instanceof ZodError) {
    return sendErrorResponse({
      event,
      statusCode: error.statusCode,
      data: error,
    })
  }

  // Handle Errors
  const causingError = error.cause

  // Handle thrown Errors that are instances of ZodError
  if (causingError instanceof ZodError) {
    return sendErrorResponse({
      event,
      statusCode: 500,
      data: causingError,
    })
  }

  if (isGrpcServiceError(causingError)) {
    const h3Error = transformGRPCErrorCodes(causingError)
    return sendErrorResponse({
      event,
      statusCode: h3Error.statusCode,
      data: h3Error,
    })
  }

  if (causingError instanceof EmptyGprcResponseError) {
    const h3Error = createError({
      statusCode: 502,
      message: 'GRPCClient: No response from LND Node',
    })
    return sendErrorResponse({
      event,
      statusCode: h3Error.statusCode,
      data: h3Error,
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
    statusCode: 500,
    data: { statusCode: 500, message: 'Internal Server Error' },
  })
}

const sendErrorResponse = ({ event, statusCode, data }: { event: H3Event, statusCode: number, data: object }) => {
  setResponseStatus(event, statusCode)
  return send(event, JSON.stringify(data))
}

const logError = (context: string, error: unknown) => {
  console.error(`${ERROR_PREFIX} ${context}`, error)
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
