import { z } from 'zod'

const InputSchema = z.object({
  pub_key: z.string().describe('Public key of a node'),
  amt: z.string().describe('Amount in satoshis'),
})

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, InputSchema.parse)
  const grpcClient = useGrpc()
  try {
    return await grpcClient.queryRoutes({
      pub_key: query.pub_key,
      amt: Number(query.amt),
    })
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: `${error}`,
      message: `${JSON.stringify(error)}`
    })
  }
})
