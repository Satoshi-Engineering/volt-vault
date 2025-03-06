import { Metadata, type ServiceError, status } from '@grpc/grpc-js'

class TestServiceError implements Error, ServiceError {
  code: status = status.UNKNOWN
  details: string = ''
  metadata: Metadata = new Metadata()
  name: string = ''
  message: string = 'test'
  stack?: string | undefined
  cause?: unknown
}

export default defineEventHandler(async (event) => {
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

  return { message: 'success' }
})
