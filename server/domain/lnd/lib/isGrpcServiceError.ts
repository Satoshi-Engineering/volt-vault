import type { ServiceError } from '@grpc/grpc-js'

export const isGrpcServiceError = (error: unknown): error is ServiceError => {
  return (
    typeof error === 'object'
    && error !== null
    && 'code' in error
    && typeof (error as ServiceError).code === 'number'
    && 'details' in error
    && typeof (error as ServiceError).details === 'string'
  )
}
