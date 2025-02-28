import assert from 'node:assert'

import GprcClient from '../domain/lnd/GrpcClient'

let cachedGrpcClient: GprcClient | null = null

export default (): GprcClient => {
  assert(cachedGrpcClient != null, createError('GprcClient not initialized'))
  return cachedGrpcClient
}

export const initGrpcClient = (params: {
  server: string,
  lndCert: Buffer,
  macaroon: string,
}) => {
  assert(cachedGrpcClient == null, createError('GprcClient already initialized'))
  cachedGrpcClient = new GprcClient(params)
}
