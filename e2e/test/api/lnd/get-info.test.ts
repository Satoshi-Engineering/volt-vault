import * as path from 'node:path'
import * as fs from 'node:fs'
import assert from 'node:assert'
import { expect, test } from '@playwright/test'
import type { Serializable } from 'playwright-core/types/structs'

const LND_CONF_FILE = 'docs/development/lnd.conf'

test.describe('api/lnd/get-info route', async () => {
  let alias: string

  test.beforeAll(async () => {
    const lndConfPath = path.join(process.cwd(), LND_CONF_FILE)
    const lndConfContent = fs.readFileSync(lndConfPath, 'utf-8')
    const aliasMatch = lndConfContent.match(/alias=(.*)/)
    const readAlias = aliasMatch ? aliasMatch[1] : null
    assert(readAlias, 'alias not found in lnd.conf')
    alias = readAlias
  })

  test('Get infos about the lightning node', async ({ request }) => {
    const nodeInfo = await request.get('/api/lnd/get-info')
    expect(nodeInfo.ok()).toBeTruthy()
    const nodeInfoData = await nodeInfo.json()

    testSchema(nodeInfoData)
    expect(nodeInfoData.alias).toBe(alias)
  })
})

const testSchema = (nodeInfoData: Serializable) => {
  expect(nodeInfoData).toEqual(expect.objectContaining({
    version: expect.any(String),
    testnet: expect.any(Boolean),
    color: expect.any(String),
    identity_pubkey: expect.any(String),
    alias: expect.any(String),
    chains: expect.any(Array),
    synced_to_chain: expect.any(Boolean),
    synced_to_graph: expect.any(Boolean),
    block_height: expect.any(Number),
    num_peers: expect.any(Number),
    num_active_channels: expect.any(Number),
    num_pending_channels: expect.any(Number),
  }))

  ;(nodeInfoData.chains as Array<Serializable>).forEach((chain) => {
    expect(chain).toEqual(
      expect.objectContaining({
        chain: expect.any(String),
        network: expect.any(String),
      }),
    )
  })
}
