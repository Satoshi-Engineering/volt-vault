export default defineEventHandler(() => {
  const grpcClient = useGrpc()
  //
  grpcClient.queryRoutes({
    pub_key: '02287f754427019e74b88c8f3779ce09bcf2c3eefd3e24c1eb7b011b35d9d883af',
    amt_msat: 1000,
  })
  return {
    hello: 'world',
  }
})
