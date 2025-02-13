// Original file: static-data/lnd/proto/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface LookupHtlcResolutionRequest {
  'chan_id'?: (number | string | Long);
  'htlc_index'?: (number | string | Long);
}

export interface LookupHtlcResolutionRequest__Output {
  'chan_id': (string);
  'htlc_index': (string);
}
