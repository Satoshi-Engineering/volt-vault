import * as grpc from '@grpc/grpc-js'

import type { GetInfoResponse__Output } from './types/lnrpc/GetInfoResponse'
import type { LightningClient } from './types/lnrpc/Lightning'
import type { PayReq__Output as PaymentRequest__Output } from './types/lnrpc/PayReq'
import type { QueryRoutesResponse__Output } from './types/lnrpc/QueryRoutesResponse'
import type { RouteHint__Output } from './types/lnrpc/RouteHint'
import type { ProtoGrpcType } from './types/lightning'
import getPackageDefinition from './getPackageDefinition'
import { isGrpcServiceError } from './lib/isGrpcServiceError'

export type QueryRoutesResponse__Input = {
  pub_key: string
  amt: number
  route_hints: RouteHint__Output[]
}

export type PaymentRequest__Input = {
  pay_req: string
}

export default class GprcClient {
  client_: LightningClient | null = null
  credentials: grpc.ChannelCredentials
  server: string

  constructor(params: {
    server: string,
    lndCert: Buffer,
    macaroon: string,
  }) {
    this.server = params.server

    const metadata = new grpc.Metadata()
    metadata.add('macaroon', params.macaroon)
    const macaroonCreds = grpc.credentials.createFromMetadataGenerator((_args, callback) => {
      callback(null, metadata)
    })

    const sslCreds = grpc.credentials.createSsl(params.lndCert)
    this.credentials = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds)
  }

  async getInfo(): Promise<GetInfoResponse__Output> {
    return this.grpcWrapper(callback => this.client.GetInfo({}, callback))
  }

  async queryRoutes(requestData: QueryRoutesResponse__Input): Promise<QueryRoutesResponse__Output> {
    return this.grpcWrapper(callback => this.client.QueryRoutes(requestData, callback))
  }

  async decodePaymentRequest(requestData: PaymentRequest__Input): Promise<PaymentRequest__Output> {
    return this.grpcWrapper(callback => this.client.DecodePayReq(requestData, callback))
  }

  private createClient(): LightningClient {
    const packageDefinition = getPackageDefinition()
    const lnrpcDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
    const lnrpc = lnrpcDescriptor.lnrpc

    return new lnrpc.Lightning(this.server, this.credentials)
  }

  private get client(): LightningClient {
    if (!this.client_) {
      this.client_ = this.createClient()
    }
    return this.client_
  }

  private destroyClient(): void {
    this.client_ = null
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private grpcWrapper = <T>(grpcMethod: (callback: (error: any, response: T | undefined) => void) => void): Promise<T> => {
    return new Promise((resolve, reject) => {
      grpcMethod((error, response) => {
        if (error) {
          if (isGrpcServiceError(error)) {
            this.handleGRPCErrorCodes(error, reject)
            return
          }
          reject(error)
          return
        } else if (!response) {
          reject(createError({
            statusCode: 502,
            message: 'GRPCClient: No response from LND Node',
          }))
        } else {
          resolve(response)
        }
      })
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleGRPCErrorCodes(error: grpc.ServiceError, reject: any): void {
    if (error.code === grpc.status.UNAVAILABLE) {
      this.destroyClient()
      const message = 'GRPCClient: Connection unavailable. Is the lnd node running?'
      console.error(`${message}\n${error}`)
      reject(createError({
        statusCode: 503,
        message,
      }))
    }
    // Note: missing console.error here on purpose because most of the errors will be GRPC errors (by lnd)
    reject(createError({
      statusCode: 502,
      message: `${error}`,
    }))
  }
}
