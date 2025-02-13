// Original file: static-data/lnd/proto/lightning.proto

import type { BatchOpenChannel as _lnrpc_BatchOpenChannel, BatchOpenChannel__Output as _lnrpc_BatchOpenChannel__Output } from '../lnrpc/BatchOpenChannel';
import type { CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy, CoinSelectionStrategy__Output as _lnrpc_CoinSelectionStrategy__Output } from '../lnrpc/CoinSelectionStrategy';
import type { Long } from '@grpc/proto-loader';

export interface BatchOpenChannelRequest {
  'channels'?: (_lnrpc_BatchOpenChannel)[];
  'target_conf'?: (number);
  'sat_per_vbyte'?: (number | string | Long);
  'min_confs'?: (number);
  'spend_unconfirmed'?: (boolean);
  'label'?: (string);
  'coin_selection_strategy'?: (_lnrpc_CoinSelectionStrategy);
}

export interface BatchOpenChannelRequest__Output {
  'channels': (_lnrpc_BatchOpenChannel__Output)[];
  'target_conf': (number);
  'sat_per_vbyte': (string);
  'min_confs': (number);
  'spend_unconfirmed': (boolean);
  'label': (string);
  'coin_selection_strategy': (_lnrpc_CoinSelectionStrategy__Output);
}
