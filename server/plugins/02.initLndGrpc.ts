import path from 'node:path'
import fs from 'node:fs'
import consola from 'consola'
import GprcClient from '../domain/lnd/GrpcClient'
import { initGrpcClient } from '../utils/useGrpc'

const LND_CERT_PATH = 'data/lnd'
const LND_CERT_FILE = 'tls.cert'

const MACAROON_CERT_PATH = 'data/lnd/chain/bitcoin/mainnet'
const MACAROON_CERT_FILE = 'admin.macaroon'


export default defineNitroPlugin(() => {
  consola.info('Init LND gRPC Client')

  const lndCertPath = path.resolve(process.cwd(), LND_CERT_PATH, LND_CERT_FILE)
  const lndCert = fs.readFileSync(lndCertPath)

  const macaroonPath = path.resolve(process.cwd(), MACAROON_CERT_PATH, MACAROON_CERT_FILE)
  const macaroonAsBuffer = fs.readFileSync(macaroonPath)
  const macaroon = macaroonAsBuffer.toString('hex')

  initGrpcClient({
    server: 'localhost:10009',
    lndCert,
    macaroon,
  })
})
