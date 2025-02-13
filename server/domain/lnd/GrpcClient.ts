import * as grpc from '@grpc/grpc-js'

import type { GetInfoResponse__Output } from './types/lnrpc/GetInfoResponse'
import type { LightningClient } from './types/lnrpc/Lightning'
import type { PayReq__Output as PaymentRequest__Output } from './types/lnrpc/PayReq'
import type { QueryRoutesResponse__Output } from './types/lnrpc/QueryRoutesResponse'
import type { RouteHint__Output } from './types/lnrpc/RouteHint'
import type { ProtoGrpcType } from './types/lightning'
import getPackageDefinition from './getPackageDefinition'

export type QueryRoutesResponse__Input = {
  pub_key: string
  amt: number
  route_hints: RouteHint__Output[]
}

export type PaymentRequest__Input = {
  pay_req: string
}

export default class GprcClient {
  client: LightningClient

  constructor(params: {
    server: string,
    lndCert: Buffer,
    macaroon: string,
  }) {
    const packageDefinition = getPackageDefinition()
    const lnrpcDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
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

  async getInfo(): Promise<GetInfoResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.GetInfo({}, (error, response) => {
        if (error || !response) {
          reject(error)
        } else {
          console.info(response)
          resolve(response)
        }
      })
    })
  }

  async queryRoutes(requestData: QueryRoutesResponse__Input): Promise<QueryRoutesResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.QueryRoutes(requestData, (error, response) => {
        if (error || !response) {
          reject(error)
        } else {
          console.info(response)
          resolve(response)
        }
      })
    })
  }

  async decodePaymentRequest(requestData: PaymentRequest__Input): Promise<PaymentRequest__Output> {
    return new Promise((resolve, reject) => {
      this.client.DecodePayReq(requestData, (error, response) => {
        if (error || !response) {
          reject(error)
        } else {
          console.info(response)
          resolve(response)
        }
      })
    })
  }
}
