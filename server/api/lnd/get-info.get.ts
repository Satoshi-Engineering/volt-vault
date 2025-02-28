import { GetInfoResponse } from '~/server/api/lnd/responses/GetInfoResponse'
import { errorMappingEventHandler } from '~/server/utils/errorMappingEventHandler'

export default errorMappingEventHandler(async () => {
  const grpcClient = useGrpc()
  const nodeInfo = await grpcClient.getInfo()
  return GetInfoResponse.parse(nodeInfo)
})
