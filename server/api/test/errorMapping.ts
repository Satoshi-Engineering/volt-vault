import { z } from 'zod'

export class CustomError extends Error {
}

const InvalidSchema = z.object({
  foo: z.string(),
})

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  console.log(query.test)

  if (!query || query.test == undefined) {
    return { message: 'success' }
  }

  if (query.test === 'getValidatedQueryError') {
    await getValidatedQuery(event, InvalidSchema.parse)
  }

  if (query.test === 'createError500') {
    throw createError({
      statusCode: 500,
      message: 'Custom create error with 500 - message',
    })
  }

  if (query.test === 'createError403') {
    throw createError({
      statusCode: 403,
      message: 'Custom create error with 403 - message',
    })
  }

  if (query.test === 'createError501') {
    throw createError({
      statusCode: 501,
      message: 'Custom create error with 501 - message',
    })
  }

  if (query.test === 'throwNewError') {
    throw new Error('This is an error')
  }

  if (query.test === 'throwNewCustomError') {
    throw new CustomError('This is an error')
  }

  if (query.test === 'throwZodErrorParse') {
    InvalidSchema.parse({})
  }

  return { message: 'success' }
})
