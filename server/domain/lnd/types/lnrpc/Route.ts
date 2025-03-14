// Original file: static-data/lnd/proto/lightning.proto

import type { Hop as _lnrpc_Hop, Hop__Output as _lnrpc_Hop__Output } from '../lnrpc/Hop';
import type { Long } from '@grpc/proto-loader';

export interface Route {
  'total_time_lock'?: (number);
  'total_fees'?: (number | string | Long);
  'total_amt'?: (number | string | Long);
  'hops'?: (_lnrpc_Hop)[];
  'total_fees_msat'?: (number | string | Long);
  'total_amt_msat'?: (number | string | Long);
  'first_hop_amount_msat'?: (number | string | Long);
  'custom_channel_data'?: (Buffer | Uint8Array | string);
}

export interface Route__Output {
  'total_time_lock': (number);
  'total_fees': (string);
  'total_amt': (string);
  'hops': (_lnrpc_Hop__Output)[];
  'total_fees_msat': (string);
  'total_amt_msat': (string);
  'first_hop_amount_msat': (string);
  'custom_channel_data': (Buffer);
}
