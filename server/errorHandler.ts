import { type H3Event, H3Error } from 'h3'
import type { ServiceError } from '@grpc/grpc-js'
import { status } from '@grpc/grpc-js'
import { ZodError } from 'zod'
import { isGrpcServiceError } from './domain/lnd/lib/isGrpcServiceError'
import EmptyGprcResponseError from './domain/lnd/types/EmptyGprcResponseError'

const ERROR_PREFIX = '[NitroErrorHandler]'

export default defineNitroErrorHandler((error, event) => {
  setResponseHeader(event, 'content-type', 'application/json')
  setResponseStatus(event, 500)

  //  It should always be a H3Error, but if not send a error and generic 500 response
  if (!(error instanceof H3Error)) {
    console.error(`${ERROR_PREFIX} Error`, error)
    return sendGenericErrorResponse(event)
  }

  // H3Error Response (createError)
  if (error.cause == undefined) {
    return sendErrorResponse(event, error)
  }

  // Validation Error from getValidatedQuery or readValidatedBody
  if (error.data instanceof ZodError) {
    setResponseStatus(event, error.statusCode)
    return send(event, JSON.stringify(error))
  }

  // throw new Error
  const causingError = error.cause

  if (isGrpcServiceError(causingError)) {
    const h3Error = transformGRPCErrorCodes(causingError)
    return sendErrorResponse(event, h3Error)
  }

  if (causingError instanceof EmptyGprcResponseError) {
    const h3Error = createError({
      statusCode: 502,
      message: 'GRPCClient: No response from LND Node',
    })
    return sendErrorResponse(event, h3Error)
  }

  // Error was not handled. Send generic 500 response via API and log error in console for telegram sender
  console.error(`${ERROR_PREFIX} H3Error`, error)
  console.error(`${ERROR_PREFIX} H3Error.cause`, error.cause)
  return sendGenericErrorResponse(event)
})

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

const sendGenericErrorResponse = (event: H3Event) => {
  setResponseStatus(event, 500)
  return send(event, JSON.stringify({ statusCode: 500, message: 'Internal Server Error' }))
}

const sendErrorResponse = (event: H3Event, error: H3Error) => {
  setResponseStatus(event, error.statusCode)
  return send(event, h3Error2JsonString(error))
}

const h3Error2JsonString = (error: H3Error) => (JSON.stringify(error))
