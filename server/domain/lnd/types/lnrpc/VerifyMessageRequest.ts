// Original file: static-data/lnd/proto/lightning.proto


export interface VerifyMessageRequest {
  'msg'?: (Buffer | Uint8Array | string);
  'signature'?: (string);
}

export interface VerifyMessageRequest__Output {
  'msg': (Buffer);
  'signature': (string);
}
