import { GetInfoResponse } from '~/server/domain/lnd/responses/GetInfoResponse'

export default defineEventHandler(async () => {
  const grpcClient = useGrpc()
  const nodeInfo = await grpcClient.getInfo()
  return GetInfoResponse.parse(nodeInfo)
})
