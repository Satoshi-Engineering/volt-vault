import type { EventHandler, EventHandlerRequest } from 'h3'
import { isGrpcServiceError } from '../domain/lnd/lib/isGrpcServiceError'
import { ServiceError, status } from '@grpc/grpc-js'
import EmptyGprcResponseError from '../domain/lnd/types/EmptyGprcResponseError'

export const errorMappingEventHandler = <T extends EventHandlerRequest, D> (
  handler: EventHandler<T, D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    try {
      return await handler(event)
    } catch (error) {
      if (isGrpcServiceError(error)) {
        handleGRPCErrorCodes(error)
        return
      }
      if (error instanceof EmptyGprcResponseError) {
        throw createError({
          statusCode: 502,
          message: 'GRPCClient: No response from LND Node',
        })
      }
      throw error
    }
  })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleGRPCErrorCodes = (error: ServiceError) => {
  if (error.code === status.UNAVAILABLE) {
    const message = 'GRPCClient: Connection unavailable. Is the lnd node running?'
    console.error(`${message}\n${error}`)
    throw createError({
      statusCode: 503,
      message,
    })
  }
  // Note: missing console.error here on purpose because most of the errors will be GRPC errors (by lnd)
  throw createError({
    statusCode: 502,
    message: `${error}`,
  })
}
