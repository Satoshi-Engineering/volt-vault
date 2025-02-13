// Original file: static-data/lnd/proto/lightning.proto


export interface BlindedHop {
  'blinded_node'?: (Buffer | Uint8Array | string);
  'encrypted_data'?: (Buffer | Uint8Array | string);
}

export interface BlindedHop__Output {
  'blinded_node': (Buffer);
  'encrypted_data': (Buffer);
}
