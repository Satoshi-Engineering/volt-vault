import { z } from 'zod'

const InputSchema = z.object({
  pay_req: z.string().describe('Payment request string'),
})

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, InputSchema.parse)
  const grpcClient = useGrpc()
  try {
    const { destination, num_satoshis, route_hints } = await grpcClient.decodePayReq({
      pay_req: query.pay_req,
    })
    return await grpcClient.queryRoutes({
      pub_key: destination,
      amt: Number(num_satoshis),
      route_hints,
    })
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: `${error}`,
      message: `${JSON.stringify(error)}`,
    })
  }
})
