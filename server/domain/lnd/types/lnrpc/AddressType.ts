// Original file: static-data/lnd/proto/lightning.proto

export const AddressType = {
  WITNESS_PUBKEY_HASH: 'WITNESS_PUBKEY_HASH',
  NESTED_PUBKEY_HASH: 'NESTED_PUBKEY_HASH',
  UNUSED_WITNESS_PUBKEY_HASH: 'UNUSED_WITNESS_PUBKEY_HASH',
  UNUSED_NESTED_PUBKEY_HASH: 'UNUSED_NESTED_PUBKEY_HASH',
  TAPROOT_PUBKEY: 'TAPROOT_PUBKEY',
  UNUSED_TAPROOT_PUBKEY: 'UNUSED_TAPROOT_PUBKEY',
} as const;

export type AddressType =
  | 'WITNESS_PUBKEY_HASH'
  | 0
  | 'NESTED_PUBKEY_HASH'
  | 1
  | 'UNUSED_WITNESS_PUBKEY_HASH'
  | 2
  | 'UNUSED_NESTED_PUBKEY_HASH'
  | 3
  | 'TAPROOT_PUBKEY'
  | 4
  | 'UNUSED_TAPROOT_PUBKEY'
  | 5

export type AddressType__Output = typeof AddressType[keyof typeof AddressType]
