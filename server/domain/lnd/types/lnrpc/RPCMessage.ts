// Original file: static-data/lnd/proto/lightning.proto


export interface RPCMessage {
  'method_full_uri'?: (string);
  'stream_rpc'?: (boolean);
  'type_name'?: (string);
  'serialized'?: (Buffer | Uint8Array | string);
  'is_error'?: (boolean);
}

export interface RPCMessage__Output {
  'method_full_uri': (string);
  'stream_rpc': (boolean);
  'type_name': (string);
  'serialized': (Buffer);
  'is_error': (boolean);
}
