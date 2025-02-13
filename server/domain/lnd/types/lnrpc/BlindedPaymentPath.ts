// Original file: static-data/lnd/proto/lightning.proto

import type { BlindedPath as _lnrpc_BlindedPath, BlindedPath__Output as _lnrpc_BlindedPath__Output } from '../lnrpc/BlindedPath';
import type { FeatureBit as _lnrpc_FeatureBit, FeatureBit__Output as _lnrpc_FeatureBit__Output } from '../lnrpc/FeatureBit';
import type { Long } from '@grpc/proto-loader';

export interface BlindedPaymentPath {
  'blinded_path'?: (_lnrpc_BlindedPath | null);
  'base_fee_msat'?: (number | string | Long);
  'proportional_fee_rate'?: (number);
  'total_cltv_delta'?: (number);
  'htlc_min_msat'?: (number | string | Long);
  'htlc_max_msat'?: (number | string | Long);
  'features'?: (_lnrpc_FeatureBit)[];
}

export interface BlindedPaymentPath__Output {
  'blinded_path': (_lnrpc_BlindedPath__Output | null);
  'base_fee_msat': (string);
  'proportional_fee_rate': (number);
  'total_cltv_delta': (number);
  'htlc_min_msat': (string);
  'htlc_max_msat': (string);
  'features': (_lnrpc_FeatureBit__Output)[];
}
