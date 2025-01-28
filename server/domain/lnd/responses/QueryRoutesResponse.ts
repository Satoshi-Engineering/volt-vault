import { z } from 'zod'

export const QueryRoutesResponse = z.object({
  version: z.string(),
  testnet: z.boolean(),
  color: z.string(),
  identity_pubkey: z.string(),
  alias: z.string(),
  chains: z.array(
    z.object({
      chain: z.string(),
      network: z.string(),
    }),
  ),
  synced_to_chain: z.boolean(),
  synced_to_graph: z.boolean(),
  block_height: z.number(),
  num_peers: z.number(),
  num_active_channels: z.number(),
  num_pending_channels: z.number(),
})

export type QueryRoutesResponse = z.infer<typeof QueryRoutesResponse>
