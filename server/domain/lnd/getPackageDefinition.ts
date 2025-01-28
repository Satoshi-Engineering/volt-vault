import path from 'node:path'
import * as protoLoader from '@grpc/proto-loader'

const PROTO_PATH = 'server/domain/lnd/proto'
const PROTO_FILE = 'lightning.proto'

export default () => {
  const absoluteProtoPath = path.resolve(process.cwd(), PROTO_PATH, PROTO_FILE)

  const loaderOptions = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }

  const packageDefinition = protoLoader.loadSync(absoluteProtoPath, loaderOptions)
  return packageDefinition
}
