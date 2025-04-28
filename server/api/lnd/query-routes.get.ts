import { z } from 'zod'

const InputSchema = z.object({
  paymentRequestEncoded: z.string().describe('Payment request string'),
})

export default defineEventHandlerWithErrorCodes(async (event) => {
  const { paymentRequestEncoded } = await getValidatedQuery(event, InputSchema.parse)
  const grpcClient = useGrpc()

  const paymentRequestDecoded = await grpcClient.decodePaymentRequest({
    pay_req: paymentRequestEncoded,
  })
  const queryRoutesResponse = await grpcClient.queryRoutes({
    pub_key: paymentRequestDecoded.destination,
    amt: Number(paymentRequestDecoded.num_satoshis),
    route_hints: paymentRequestDecoded.route_hints,
  })
  return {
    paymentRequestDecoded,
    queryRoutesResponse,
  }
})
