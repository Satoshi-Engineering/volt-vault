// Original file: static-data/lnd/proto/lightning.proto

import type { BlindedHop as _lnrpc_BlindedHop, BlindedHop__Output as _lnrpc_BlindedHop__Output } from '../lnrpc/BlindedHop';

export interface BlindedPath {
  'introduction_node'?: (Buffer | Uint8Array | string);
  'blinding_point'?: (Buffer | Uint8Array | string);
  'blinded_hops'?: (_lnrpc_BlindedHop)[];
}

export interface BlindedPath__Output {
  'introduction_node': (Buffer);
  'blinding_point': (Buffer);
  'blinded_hops': (_lnrpc_BlindedHop__Output)[];
}
