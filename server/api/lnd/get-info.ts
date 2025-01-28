export default defineEventHandler(async (event) => {
  const grpcClient = useGrpc()
  return await grpcClient.getInfo()
})
