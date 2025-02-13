// Original file: static-data/lnd/proto/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface CloseOutput {
  'amount_sat'?: (number | string | Long);
  'pk_script'?: (Buffer | Uint8Array | string);
  'is_local'?: (boolean);
  'custom_channel_data'?: (Buffer | Uint8Array | string);
}

export interface CloseOutput__Output {
  'amount_sat': (string);
  'pk_script': (Buffer);
  'is_local': (boolean);
  'custom_channel_data': (Buffer);
}
