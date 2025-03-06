import { ZodError } from 'zod'
import type { ServiceError } from '@grpc/grpc-js'
import { status } from '@grpc/grpc-js'
import { isGrpcServiceError } from './domain/lnd/lib/isGrpcServiceError'
import EmptyGprcResponseError from './domain/lnd/types/EmptyGprcResponseError'
import nuxtErrorHandler from '~/node_modules/nuxt/dist/core/runtime/nitro/error.js'

const ERROR_PREFIX = '[NitroErrorHandler]'

export default defineNitroErrorHandler((error, event) => {
  const causingError = error.cause

  // ZodError: console.error extra information about the error
  if (causingError instanceof ZodError) {
    logError('ZodError', error)
    return nuxtErrorHandler(error, event)
  }

  if (causingError instanceof EmptyGprcResponseError) {
    logError('EmptyGprcResponseError', causingError)
    return nuxtErrorHandler(error, event)
  }

  if (isGrpcServiceError(causingError)) {
    const h3Error = transformGRPCErrorCodes(causingError)
    return nuxtErrorHandler(h3Error, event)
  }

  return nuxtErrorHandler(error, event)
})

const transformGRPCErrorCodes = (error: ServiceError) => {
  if (error.code === status.UNAVAILABLE) {
    const message = 'GRPCClient: Connection unavailable. Is the lnd node running?'
    logError(message, error)
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
