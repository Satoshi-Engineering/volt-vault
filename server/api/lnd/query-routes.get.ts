import { z } from 'zod'
import { errorMappingEventHandler } from '~/server/utils/errorMappingEventHandler'

const InputSchema = z.object({
  paymentRequestEncoded: z.string().describe('Payment request string'),
})

export default errorMappingEventHandler(async (event) => {
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
