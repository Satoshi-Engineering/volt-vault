// Original file: static-data/lnd/proto/lightning.proto

import type { CommitmentType as _lnrpc_CommitmentType, CommitmentType__Output as _lnrpc_CommitmentType__Output } from '../lnrpc/CommitmentType';
import type { Long } from '@grpc/proto-loader';

export interface BatchOpenChannel {
  'node_pubkey'?: (Buffer | Uint8Array | string);
  'local_funding_amount'?: (number | string | Long);
  'push_sat'?: (number | string | Long);
  'private'?: (boolean);
  'min_htlc_msat'?: (number | string | Long);
  'remote_csv_delay'?: (number);
  'close_address'?: (string);
  'pending_chan_id'?: (Buffer | Uint8Array | string);
  'commitment_type'?: (_lnrpc_CommitmentType);
  'remote_max_value_in_flight_msat'?: (number | string | Long);
  'remote_max_htlcs'?: (number);
  'max_local_csv'?: (number);
  'zero_conf'?: (boolean);
  'scid_alias'?: (boolean);
  'base_fee'?: (number | string | Long);
  'fee_rate'?: (number | string | Long);
  'use_base_fee'?: (boolean);
  'use_fee_rate'?: (boolean);
  'remote_chan_reserve_sat'?: (number | string | Long);
  'memo'?: (string);
}

export interface BatchOpenChannel__Output {
  'node_pubkey': (Buffer);
  'local_funding_amount': (string);
  'push_sat': (string);
  'private': (boolean);
  'min_htlc_msat': (string);
  'remote_csv_delay': (number);
  'close_address': (string);
  'pending_chan_id': (Buffer);
  'commitment_type': (_lnrpc_CommitmentType__Output);
  'remote_max_value_in_flight_msat': (string);
  'remote_max_htlcs': (number);
  'max_local_csv': (number);
  'zero_conf': (boolean);
  'scid_alias': (boolean);
  'base_fee': (string);
  'fee_rate': (string);
  'use_base_fee': (boolean);
  'use_fee_rate': (boolean);
  'remote_chan_reserve_sat': (string);
  'memo': (string);
}
