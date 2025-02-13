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
})
