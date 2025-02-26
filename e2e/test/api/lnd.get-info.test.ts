import * as path from 'node:path'
import * as fs from 'node:fs'
import assert from 'node:assert'
import { expect, test } from '@playwright/test'
import { GetInfoResponse } from '~/server/api/lnd/responses/GetInfoResponse'
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
  expect(nodeInfoData).toHaveProperty('version')
  expect(typeof nodeInfoData.version).toBe('string')

  expect(nodeInfoData).toHaveProperty('testnet')
  expect(typeof nodeInfoData.testnet).toBe('boolean')

  expect(nodeInfoData).toHaveProperty('color')
  expect(typeof nodeInfoData.color).toBe('string')

  expect(nodeInfoData).toHaveProperty('identity_pubkey')
  expect(typeof nodeInfoData.identity_pubkey).toBe('string')

  expect(nodeInfoData).toHaveProperty('alias')
  expect(typeof nodeInfoData.alias).toBe('string')

  expect(nodeInfoData).toHaveProperty('chains')
  expect(Array.isArray(nodeInfoData.chains)).toBe(true)

  expect(nodeInfoData).toHaveProperty('synced_to_chain')
  expect(typeof nodeInfoData.synced_to_chain).toBe('boolean')

  expect(nodeInfoData).toHaveProperty('synced_to_graph')
  expect(typeof nodeInfoData.synced_to_graph).toBe('boolean')

  expect(nodeInfoData).toHaveProperty('block_height')
  expect(typeof nodeInfoData.block_height).toBe('number')

  expect(nodeInfoData).toHaveProperty('num_peers')
  expect(typeof nodeInfoData.num_peers).toBe('number')

  expect(nodeInfoData).toHaveProperty('num_active_channels')
  expect(typeof nodeInfoData.num_active_channels).toBe('number')

  expect(nodeInfoData).toHaveProperty('num_pending_channels')
  expect(typeof nodeInfoData.num_pending_channels).toBe('number')
}