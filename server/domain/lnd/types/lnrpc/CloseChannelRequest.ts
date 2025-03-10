// Original file: static-data/lnd/proto/lightning.proto

import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
import type { Long } from '@grpc/proto-loader';

export interface CloseChannelRequest {
  'channel_point'?: (_lnrpc_ChannelPoint | null);
  'force'?: (boolean);
  'target_conf'?: (number);
  'sat_per_byte'?: (number | string | Long);
  'delivery_address'?: (string);
  'sat_per_vbyte'?: (number | string | Long);
  'max_fee_per_vbyte'?: (number | string | Long);
  'no_wait'?: (boolean);
}

export interface CloseChannelRequest__Output {
  'channel_point': (_lnrpc_ChannelPoint__Output | null);
  'force': (boolean);
  'target_conf': (number);
  'sat_per_byte': (string);
  'delivery_address': (string);
  'sat_per_vbyte': (string);
  'max_fee_per_vbyte': (string);
  'no_wait': (boolean);
}
