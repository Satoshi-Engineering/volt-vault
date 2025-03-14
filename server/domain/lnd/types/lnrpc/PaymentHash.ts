// Original file: static-data/lnd/proto/lightning.proto


export interface PaymentHash {
  'r_hash_str'?: (string);
  'r_hash'?: (Buffer | Uint8Array | string);
}

export interface PaymentHash__Output {
  'r_hash_str': (string);
  'r_hash': (Buffer);
}
