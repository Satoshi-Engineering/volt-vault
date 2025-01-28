export default defineEventHandler(async () => {
  const grpcClient = useGrpc()
  return await grpcClient.getInfo()
})
