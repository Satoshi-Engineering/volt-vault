// Original file: static-data/lnd/proto/lightning.proto

import type { Amount as _lnrpc_Amount, Amount__Output as _lnrpc_Amount__Output } from '../lnrpc/Amount';
import type { Long } from '@grpc/proto-loader';

export interface ChannelBalanceResponse {
  'balance'?: (number | string | Long);
  'pending_open_balance'?: (number | string | Long);
  'local_balance'?: (_lnrpc_Amount | null);
  'remote_balance'?: (_lnrpc_Amount | null);
  'unsettled_local_balance'?: (_lnrpc_Amount | null);
  'unsettled_remote_balance'?: (_lnrpc_Amount | null);
  'pending_open_local_balance'?: (_lnrpc_Amount | null);
  'pending_open_remote_balance'?: (_lnrpc_Amount | null);
  'custom_channel_data'?: (Buffer | Uint8Array | string);
}

export interface ChannelBalanceResponse__Output {
  'balance': (string);
  'pending_open_balance': (string);
  'local_balance': (_lnrpc_Amount__Output | null);
  'remote_balance': (_lnrpc_Amount__Output | null);
  'unsettled_local_balance': (_lnrpc_Amount__Output | null);
  'unsettled_remote_balance': (_lnrpc_Amount__Output | null);
  'pending_open_local_balance': (_lnrpc_Amount__Output | null);
  'pending_open_remote_balance': (_lnrpc_Amount__Output | null);
  'custom_channel_data': (Buffer);
}
