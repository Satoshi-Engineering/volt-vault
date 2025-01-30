import { z } from 'zod'

const InputSchema = z.object({
  pay_req: z.string().describe('Payment request string'),
})

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, InputSchema.parse)
  const grpcClient = useGrpc()
  try {
    const payReq = await grpcClient.decodePayReq({
      pay_req: query.pay_req,
    })
    const queryRoutesResponse = await grpcClient.queryRoutes({
      pub_key: payReq.destination,
      amt: Number(payReq.num_satoshis),
      route_hints: payReq.route_hints,
    })
    return {
      payReq,
      queryRoutesResponse,
    }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: `${error}`,
      message: `${JSON.stringify(error)}`,
    })
  }
})
