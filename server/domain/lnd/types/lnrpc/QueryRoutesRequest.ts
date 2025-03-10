// Original file: static-data/lnd/proto/lightning.proto

import type { FeeLimit as _lnrpc_FeeLimit, FeeLimit__Output as _lnrpc_FeeLimit__Output } from '../lnrpc/FeeLimit';
import type { EdgeLocator as _lnrpc_EdgeLocator, EdgeLocator__Output as _lnrpc_EdgeLocator__Output } from '../lnrpc/EdgeLocator';
import type { NodePair as _lnrpc_NodePair, NodePair__Output as _lnrpc_NodePair__Output } from '../lnrpc/NodePair';
import type { RouteHint as _lnrpc_RouteHint, RouteHint__Output as _lnrpc_RouteHint__Output } from '../lnrpc/RouteHint';
import type { FeatureBit as _lnrpc_FeatureBit, FeatureBit__Output as _lnrpc_FeatureBit__Output } from '../lnrpc/FeatureBit';
import type { BlindedPaymentPath as _lnrpc_BlindedPaymentPath, BlindedPaymentPath__Output as _lnrpc_BlindedPaymentPath__Output } from '../lnrpc/BlindedPaymentPath';
import type { Long } from '@grpc/proto-loader';

export interface QueryRoutesRequest {
  'pub_key'?: (string);
  'amt'?: (number | string | Long);
  'final_cltv_delta'?: (number);
  'fee_limit'?: (_lnrpc_FeeLimit | null);
  'ignored_nodes'?: (Buffer | Uint8Array | string)[];
  'ignored_edges'?: (_lnrpc_EdgeLocator)[];
  'source_pub_key'?: (string);
  'use_mission_control'?: (boolean);
  'ignored_pairs'?: (_lnrpc_NodePair)[];
  'cltv_limit'?: (number);
  'amt_msat'?: (number | string | Long);
  'dest_custom_records'?: ({[key: number]: Buffer | Uint8Array | string});
  'outgoing_chan_id'?: (number | string | Long);
  'last_hop_pubkey'?: (Buffer | Uint8Array | string);
  'route_hints'?: (_lnrpc_RouteHint)[];
  'dest_features'?: (_lnrpc_FeatureBit)[];
  'time_pref'?: (number | string);
  'blinded_payment_paths'?: (_lnrpc_BlindedPaymentPath)[];
}

export interface QueryRoutesRequest__Output {
  'pub_key': (string);
  'amt': (string);
  'final_cltv_delta': (number);
  'fee_limit': (_lnrpc_FeeLimit__Output | null);
  'ignored_nodes': (Buffer)[];
  'ignored_edges': (_lnrpc_EdgeLocator__Output)[];
  'source_pub_key': (string);
  'use_mission_control': (boolean);
  'ignored_pairs': (_lnrpc_NodePair__Output)[];
  'cltv_limit': (number);
  'amt_msat': (string);
  'dest_custom_records': ({[key: number]: Buffer});
  'outgoing_chan_id': (string);
  'last_hop_pubkey': (Buffer);
  'route_hints': (_lnrpc_RouteHint__Output)[];
  'dest_features': (_lnrpc_FeatureBit__Output)[];
  'time_pref': (number);
  'blinded_payment_paths': (_lnrpc_BlindedPaymentPath__Output)[];
}
