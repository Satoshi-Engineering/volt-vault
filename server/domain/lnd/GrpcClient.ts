import * as grpc from '@grpc/grpc-js'

import type { GetInfoResponse__Output as GetInfoResponse } from './types/lnrpc/GetInfoResponse'
import type { LightningClient } from './types/lnrpc/Lightning'
import type { PayReq__Output as PayReq } from './types/lnrpc/PayReq'
import type { QueryRoutesResponse__Output as QueryRoutesResponse } from './types/lnrpc/QueryRoutesResponse'
import type { RouteHint__Output as RouteHint } from './types/lnrpc/RouteHint'
import type { ProtoGrpcType } from './types/lightning'
import getPackageDefinition from './getPackageDefinition'

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

  async getInfo(): Promise<GetInfoResponse> {
    return new Promise((resolve, reject) => {
      this.client.GetInfo({}, (err: unknown, response?: GetInfoResponse) => {
        if (err || !response) {
          reject(err)
        } else {
          console.info(response)
          resolve(response)
        }
      })
    })
  }

  async queryRoutes(request: {
    pub_key: string,
    amt: number,
    route_hints?: RouteHint[],
  }): Promise<QueryRoutesResponse> {
    return new Promise((resolve, reject) => {
      this.client.QueryRoutes(request, (err: unknown, response?: QueryRoutesResponse) => {
        if (err || !response) {
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
      this.client.DecodePayReq(request, (err: unknown, response?: PayReq) => {
        if (err || !response) {
          reject(err)
        } else {
          console.info(response)
          resolve(response)
        }
      })
    })
  }
}
