import {
  type EventHandler,
  type EventHandlerRequest,
  type H3Event,
  defineEventHandler,
} from 'h3'

import { isErrorWithCode } from '~/shared/utils/ErrorWithCode'

export const defineEventHandlerWithErrorCodes = <T extends EventHandlerRequest, D>(
  handler: (event: H3Event<T>) => Promise<D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    try {
      return await handler(event)
    } catch (error) {
      if (!isErrorWithCode(error)) {
        throw error
      }
      const statusCode = 400
      throw createError({
        statusCode,
        statusMessage: error.code,
        message: error.message,
      })
    }
  })
