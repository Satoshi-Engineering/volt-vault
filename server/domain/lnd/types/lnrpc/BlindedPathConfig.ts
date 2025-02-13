// Original file: static-data/lnd/proto/lightning.proto


export interface BlindedPathConfig {
  'min_num_real_hops'?: (number);
  'num_hops'?: (number);
  'max_num_paths'?: (number);
  'node_omission_list'?: (Buffer | Uint8Array | string)[];
  '_min_num_real_hops'?: "min_num_real_hops";
  '_num_hops'?: "num_hops";
  '_max_num_paths'?: "max_num_paths";
}

export interface BlindedPathConfig__Output {
  'min_num_real_hops'?: (number);
  'num_hops'?: (number);
  'max_num_paths'?: (number);
  'node_omission_list': (Buffer)[];
  '_min_num_real_hops': "min_num_real_hops";
  '_num_hops': "num_hops";
  '_max_num_paths': "max_num_paths";
}
