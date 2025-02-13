// Original file: static-data/lnd/proto/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface AliasMap {
  'base_scid'?: (number | string | Long);
  'aliases'?: (number | string | Long)[];
}

export interface AliasMap__Output {
  'base_scid': (string);
  'aliases': (string)[];
}
