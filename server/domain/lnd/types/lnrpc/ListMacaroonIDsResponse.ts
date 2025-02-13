// Original file: static-data/lnd/proto/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ListMacaroonIDsResponse {
  'root_key_ids'?: (number | string | Long)[];
}

export interface ListMacaroonIDsResponse__Output {
  'root_key_ids': (string)[];
}
