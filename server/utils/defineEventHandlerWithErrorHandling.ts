import {
  type EventHandler,
  type EventHandlerRequest,
  H3Error,
  type H3Event,
  defineEventHandler,
} from 'h3'
import { ZodError } from 'zod'
import { status } from '@grpc/grpc-js'

import EmptyGprcResponseError from '~/server/domain/lnd/types/EmptyGprcResponseError'
import { isGrpcServiceError } from '~/server/domain/lnd/lib/isGrpcServiceError'

const ERROR_PREFIX = '[NitroErrorHandler]'

export const defineEventHandlerWithErrorCodes = <T extends EventHandlerRequest, D>(
  handler: (event: H3Event<T>) => Promise<D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    try {
      return await handler(event)
    } catch (error) {
      if (error instanceof ZodError) {
        logError('ZodError', error)
        throw error
      }

      if (error instanceof H3Error && error.cause) {
        throw error.cause
      }

      if (error instanceof EmptyGprcResponseError) {
        logError('EmptyGprcResponseError', error)
        throw error
      }

      if (isGrpcServiceError(error)) {
        if (error.code === status.UNAVAILABLE) {
          const message = 'GRPCClient: Connection unavailable. Is the lnd node running?'
          logError(message, error)
          throw createError({
            statusCode: 503,
            message,
          })
        }

        // Note: Not throwing the error here on purpose, because most of the errors will be GRPC errors (by lnd)
        return createError({
          statusCode: 502,
          message: error.toString(),
        })
      }

      throw error
    }
  })

const logError = (context: string, error: unknown) => {
  console.error(`${ERROR_PREFIX} ${context}`, error)
}
