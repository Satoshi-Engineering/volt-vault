// Original file: static-data/lnd/proto/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelFeeReport {
  'channel_point'?: (string);
  'base_fee_msat'?: (number | string | Long);
  'fee_per_mil'?: (number | string | Long);
  'fee_rate'?: (number | string);
  'chan_id'?: (number | string | Long);
  'inbound_base_fee_msat'?: (number);
  'inbound_fee_per_mil'?: (number);
}

export interface ChannelFeeReport__Output {
  'channel_point': (string);
  'base_fee_msat': (string);
  'fee_per_mil': (string);
  'fee_rate': (number);
  'chan_id': (string);
  'inbound_base_fee_msat': (number);
  'inbound_fee_per_mil': (number);
}
