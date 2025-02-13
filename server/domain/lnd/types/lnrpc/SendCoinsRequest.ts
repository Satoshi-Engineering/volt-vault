// Original file: static-data/lnd/proto/lightning.proto

import type { CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy, CoinSelectionStrategy__Output as _lnrpc_CoinSelectionStrategy__Output } from '../lnrpc/CoinSelectionStrategy';
import type { OutPoint as _lnrpc_OutPoint, OutPoint__Output as _lnrpc_OutPoint__Output } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface SendCoinsRequest {
  'addr'?: (string);
  'amount'?: (number | string | Long);
  'target_conf'?: (number);
  'sat_per_vbyte'?: (number | string | Long);
  'sat_per_byte'?: (number | string | Long);
  'send_all'?: (boolean);
  'label'?: (string);
  'min_confs'?: (number);
  'spend_unconfirmed'?: (boolean);
  'coin_selection_strategy'?: (_lnrpc_CoinSelectionStrategy);
  'outpoints'?: (_lnrpc_OutPoint)[];
}

export interface SendCoinsRequest__Output {
  'addr': (string);
  'amount': (string);
  'target_conf': (number);
  'sat_per_vbyte': (string);
  'sat_per_byte': (string);
  'send_all': (boolean);
  'label': (string);
  'min_confs': (number);
  'spend_unconfirmed': (boolean);
  'coin_selection_strategy': (_lnrpc_CoinSelectionStrategy__Output);
  'outpoints': (_lnrpc_OutPoint__Output)[];
}
