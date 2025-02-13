// Original file: static-data/lnd/proto/lightning.proto


export interface DeleteAllPaymentsRequest {
  'failed_payments_only'?: (boolean);
  'failed_htlcs_only'?: (boolean);
  'all_payments'?: (boolean);
}

export interface DeleteAllPaymentsRequest__Output {
  'failed_payments_only': (boolean);
  'failed_htlcs_only': (boolean);
  'all_payments': (boolean);
}
