// Original file: static-data/lnd/proto/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface TimestampedError {
  'timestamp'?: (number | string | Long);
  'error'?: (string);
}

export interface TimestampedError__Output {
  'timestamp': (string);
  'error': (string);
}
