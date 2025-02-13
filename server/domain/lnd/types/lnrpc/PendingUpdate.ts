// Original file: static-data/lnd/proto/lightning.proto


export interface PendingUpdate {
  'txid'?: (Buffer | Uint8Array | string);
  'output_index'?: (number);
}

export interface PendingUpdate__Output {
  'txid': (Buffer);
  'output_index': (number);
}
