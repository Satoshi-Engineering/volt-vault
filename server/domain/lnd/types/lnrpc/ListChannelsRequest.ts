// Original file: static-data/lnd/proto/lightning.proto


export interface ListChannelsRequest {
  'active_only'?: (boolean);
  'inactive_only'?: (boolean);
  'public_only'?: (boolean);
  'private_only'?: (boolean);
  'peer'?: (Buffer | Uint8Array | string);
  'peer_alias_lookup'?: (boolean);
}

export interface ListChannelsRequest__Output {
  'active_only': (boolean);
  'inactive_only': (boolean);
  'public_only': (boolean);
  'private_only': (boolean);
  'peer': (Buffer);
  'peer_alias_lookup': (boolean);
}
