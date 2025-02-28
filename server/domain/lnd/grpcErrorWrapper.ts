// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const grpcErrorWrapper = <T>(grpcMethod: (callback: (error: any, response: T | undefined) => void) => void): Promise<T> => {
  return new Promise((resolve, reject) => {
    grpcMethod((error, response) => {
      if (error) {
        if (error.message.includes('ECONNREFUSED')) {
          const message = 'GRPCClient: Connection refused. Is the lnd node running?'
          console.error(message, error)
          reject(createError(message))
        } else {
          reject(error)
        }
      } else if (!response) {
        reject(createError('No response from LND Node'))
      } else {
        resolve(response)
      }
    })
  })
}
