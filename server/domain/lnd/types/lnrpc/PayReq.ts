// Original file: static-data/lnd/proto/lightning.proto

import type { RouteHint as _lnrpc_RouteHint, RouteHint__Output as _lnrpc_RouteHint__Output } from '../lnrpc/RouteHint';
import type { Feature as _lnrpc_Feature, Feature__Output as _lnrpc_Feature__Output } from '../lnrpc/Feature';
import type { BlindedPaymentPath as _lnrpc_BlindedPaymentPath, BlindedPaymentPath__Output as _lnrpc_BlindedPaymentPath__Output } from '../lnrpc/BlindedPaymentPath';
import type { Long } from '@grpc/proto-loader';

export interface PayReq {
  'destination'?: (string);
  'payment_hash'?: (string);
  'num_satoshis'?: (number | string | Long);
  'timestamp'?: (number | string | Long);
  'expiry'?: (number | string | Long);
  'description'?: (string);
  'description_hash'?: (string);
  'fallback_addr'?: (string);
  'cltv_expiry'?: (number | string | Long);
  'route_hints'?: (_lnrpc_RouteHint)[];
  'payment_addr'?: (Buffer | Uint8Array | string);
  'num_msat'?: (number | string | Long);
  'features'?: ({[key: number]: _lnrpc_Feature});
  'blinded_paths'?: (_lnrpc_BlindedPaymentPath)[];
}

export interface PayReq__Output {
  'destination': (string);
  'payment_hash': (string);
  'num_satoshis': (string);
  'timestamp': (string);
  'expiry': (string);
  'description': (string);
  'description_hash': (string);
  'fallback_addr': (string);
  'cltv_expiry': (string);
  'route_hints': (_lnrpc_RouteHint__Output)[];
  'payment_addr': (Buffer);
  'num_msat': (string);
  'features': ({[key: number]: _lnrpc_Feature__Output});
  'blinded_paths': (_lnrpc_BlindedPaymentPath__Output)[];
}
