/* eslint-disable @typescript-eslint/no-explicit-any */
import * as grpc from '@grpc/grpc-js'

import getPackageDefinition from './getPackageDefinition'
import { GetInfoResponse } from './responses/GetInfoResponse'

export type PayReq = {
  destination: string,
  payment_hash: string,
  num_satoshis: string,
  timestamp: string,
  expiry: string,
  description: string,
  description_hash: string,
  fallback_addr: string,
  cltv_expiry: string,
  route_hints: any[],
  payment_addr: Buffer,
  num_msat: string,
  features: any[],
  blinded_path: any[],
}

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
    const credentials = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds)

    this.client = new lnrpc.Lightning(params.server, credentials)
  }

  async getInfo(): Promise<GetInfoResponse> {
    return new Promise((resolve, reject) => {
      this.client.getInfo({}, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
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
    amt: number,
    route_hints?: any[],
  }) {
    return new Promise((resolve, reject) => {
      this.client.QueryRoutes(request, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          console.info(response)
          resolve(response)
        }
      })
    })
  }

  async decodePayReq(request: {
    pay_req: string,
  }): Promise<PayReq> {
    return new Promise((resolve, reject) => {
      this.client.DecodePayReq(request, (err: any, response: PayReq) => {
        if (err) {
          reject(err)
        } else {
          console.info(response)
          resolve(response)
        }
      })
    })
  }
}
