// Original file: static-data/lnd/proto/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ForwardingHistoryRequest {
  'start_time'?: (number | string | Long);
  'end_time'?: (number | string | Long);
  'index_offset'?: (number);
  'num_max_events'?: (number);
  'peer_alias_lookup'?: (boolean);
}

export interface ForwardingHistoryRequest__Output {
  'start_time': (string);
  'end_time': (string);
  'index_offset': (number);
  'num_max_events': (number);
  'peer_alias_lookup': (boolean);
}
