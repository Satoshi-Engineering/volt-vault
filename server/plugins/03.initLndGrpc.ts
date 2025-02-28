import path from 'node:path'
import fs from 'node:fs'
import consola from 'consola'
import { initGrpcClient } from '../utils/useGrpc'

export default defineNitroPlugin(() => {
  consola.info('Init LND gRPC Client')

  const config = useConfig()

  const lndCertPath = path.resolve(process.cwd(), config.grpc.lndCertDir, config.grpc.lndCertFile)
  const lndCert = fs.readFileSync(lndCertPath)

  const macaroonPath = path.resolve(process.cwd(), config.grpc.macaroonCertDir, config.grpc.macaroonCertFile)
  const macaroonAsBuffer = fs.readFileSync(macaroonPath)
  const macaroon = macaroonAsBuffer.toString('hex')

  initGrpcClient({
    server: config.grpc.server,
    lndCert,
    macaroon,
  })

  setImmediate(testConnection)
})

const testConnection = async () => {
  consola.info('Testing LND gRPC Client Connection')

  const grpcClient = useGrpc()
  try {
    await grpcClient.getInfo()
  } catch (error) {
    throw new Error(`gRPC Client has no client connection!\n${error}`)
  }
}
