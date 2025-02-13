// Original file: static-data/lnd/proto/lightning.proto

import type { CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy, CoinSelectionStrategy__Output as _lnrpc_CoinSelectionStrategy__Output } from '../lnrpc/CoinSelectionStrategy';
import type { Long } from '@grpc/proto-loader';

export interface SendManyRequest {
  'AddrToAmount'?: ({[key: string]: number | string | Long});
  'target_conf'?: (number);
  'sat_per_vbyte'?: (number | string | Long);
  'sat_per_byte'?: (number | string | Long);
  'label'?: (string);
  'min_confs'?: (number);
  'spend_unconfirmed'?: (boolean);
  'coin_selection_strategy'?: (_lnrpc_CoinSelectionStrategy);
}

export interface SendManyRequest__Output {
  'AddrToAmount': ({[key: string]: string});
  'target_conf': (number);
  'sat_per_vbyte': (string);
  'sat_per_byte': (string);
  'label': (string);
  'min_confs': (number);
  'spend_unconfirmed': (boolean);
  'coin_selection_strategy': (_lnrpc_CoinSelectionStrategy__Output);
}
