// Original file: static-data/lnd/proto/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ChanInfoRequest {
  'chan_id'?: (number | string | Long);
  'chan_point'?: (string);
}

export interface ChanInfoRequest__Output {
  'chan_id': (string);
  'chan_point': (string);
}
