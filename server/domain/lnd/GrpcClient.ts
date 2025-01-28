import * as grpc from '@grpc/grpc-js'

import getPackageDefinition from './getPackageDefinition'
import { GetInfoResponse } from './responses/GetInfoResponse'

export default class GprcClient {
  client: any

  constructor(params: {
    server: string,
    lndCert: Buffer, 
    macaroon: string,
  }) {

    const packageDefinition = getPackageDefinition()
    const lnrpcDescriptor = grpc.loadPackageDefinition(packageDefinition)
    const lnrpc = lnrpcDescriptor.lnrpc

    const metadata = new grpc.Metadata()
    metadata.add('macaroon', params.macaroon)
    const macaroonCreds = grpc.credentials.createFromMetadataGenerator((_args, callback) => {
      callback(null, metadata)
    })

    const sslCreds = grpc.credentials.createSsl(params.lndCert)
    let credentials = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds)

    this.client = new lnrpc.Lightning(params.server, credentials)
  }

  async getInfo(): Promise<GetInfoResponse> {
    return new Promise((resolve, reject) => {
      this.client.getInfo({}, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          console.log(response)
          const parsedResponse = GetInfoResponse.safeParse(response)
          if (!parsedResponse.success) {
            reject(parsedResponse.error)
            return
          }
          
          resolve(parsedResponse.data)
        }
      })
    })
  }

  async queryRoutes(request: {
    pub_key: string,
    amt_msat: number, 
  }) {
    this.client.QueryRoutes(request, (err: any, response: any) => {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log('Routes:', JSON.stringify(response.routes, null, 2));
      }
    })
  }
}
