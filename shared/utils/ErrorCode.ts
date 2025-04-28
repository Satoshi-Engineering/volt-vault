import z from 'zod'

export const ErrorCode = z.enum([
  'queryRoutesError',
])
export type ErrorCode = z.infer<typeof ErrorCode>
