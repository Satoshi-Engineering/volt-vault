import { Metadata, type ServiceError, status } from '@grpc/grpc-js'
import EmptyGprcResponseError from '~/server/domain/lnd/types/EmptyGprcResponseError'

class TestServiceError extends Error implements ServiceError {
  code: status = status.UNKNOWN
  details: string = 'TestServiceError.details'
  metadata: Metadata = new Metadata()

  constructor() {
    super('TestServiceError')
  }
}

export default defineEventHandlerWithErrorCodes(async (event) => {
  const query = getQuery(event)

  if (!query || query.test == undefined) {
    return { message: 'success' }
  }

  if (query.test === 'ServiceErrorStatusUNKNOWN') {
    throw new TestServiceError()
  }

  if (query.test === 'ServiceErrorStatusUNAVAILABLE') {
    const serviceError = new TestServiceError()
    serviceError.code = status.UNAVAILABLE
    throw serviceError
  }

  if (query.test === 'EmptyGprcResponseError') {
    throw new EmptyGprcResponseError()
  }

  return { message: 'success' }
})
