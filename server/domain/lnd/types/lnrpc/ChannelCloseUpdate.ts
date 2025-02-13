// Original file: static-data/lnd/proto/lightning.proto

import type { CloseOutput as _lnrpc_CloseOutput, CloseOutput__Output as _lnrpc_CloseOutput__Output } from '../lnrpc/CloseOutput';

export interface ChannelCloseUpdate {
  'closing_txid'?: (Buffer | Uint8Array | string);
  'success'?: (boolean);
  'local_close_output'?: (_lnrpc_CloseOutput | null);
  'remote_close_output'?: (_lnrpc_CloseOutput | null);
  'additional_outputs'?: (_lnrpc_CloseOutput)[];
}

export interface ChannelCloseUpdate__Output {
  'closing_txid': (Buffer);
  'success': (boolean);
  'local_close_output': (_lnrpc_CloseOutput__Output | null);
  'remote_close_output': (_lnrpc_CloseOutput__Output | null);
  'additional_outputs': (_lnrpc_CloseOutput__Output)[];
}
