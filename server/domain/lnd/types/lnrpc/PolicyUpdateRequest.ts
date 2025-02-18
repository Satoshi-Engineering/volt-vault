// Original file: static-data/lnd/proto/lightning.proto

import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
import type { InboundFee as _lnrpc_InboundFee, InboundFee__Output as _lnrpc_InboundFee__Output } from '../lnrpc/InboundFee';
import type { Long } from '@grpc/proto-loader';

export interface PolicyUpdateRequest {
  'global'?: (boolean);
  'chan_point'?: (_lnrpc_ChannelPoint | null);
  'base_fee_msat'?: (number | string | Long);
  'fee_rate'?: (number | string);
  'time_lock_delta'?: (number);
  'max_htlc_msat'?: (number | string | Long);
  'min_htlc_msat'?: (number | string | Long);
  'min_htlc_msat_specified'?: (boolean);
  'fee_rate_ppm'?: (number);
  'inbound_fee'?: (_lnrpc_InboundFee | null);
  'create_missing_edge'?: (boolean);
  'scope'?: "global"|"chan_point";
}

export interface PolicyUpdateRequest__Output {
  'global'?: (boolean);
  'chan_point'?: (_lnrpc_ChannelPoint__Output | null);
  'base_fee_msat': (string);
  'fee_rate': (number);
  'time_lock_delta': (number);
  'max_htlc_msat': (string);
  'min_htlc_msat': (string);
  'min_htlc_msat_specified': (boolean);
  'fee_rate_ppm': (number);
  'inbound_fee': (_lnrpc_InboundFee__Output | null);
  'create_missing_edge': (boolean);
  'scope': "global"|"chan_point";
}
