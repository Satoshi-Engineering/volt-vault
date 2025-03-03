import { GetInfoResponse } from '~/server/api/lnd/responses/GetInfoResponse'

export default defineEventHandler(async () => {
  const grpcClient = useGrpc()
  const nodeInfo = await grpcClient.getInfo()
  return GetInfoResponse.parse(nodeInfo)
})
