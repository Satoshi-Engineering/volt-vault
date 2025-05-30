import { expect, test } from '@playwright/test'
import executeLndCommand from '../../lib/lnd/executeLndCommand'
import { addTimeout } from '../../lib/timing/addTimeout'
import { wait } from '../../lib/timing/wait'

test.describe('LND Connection', async () => {
  test.afterEach(async () => {
    await executeLndCommand.startLndNode()
  })

  test('should return 200 due lnd is running', async ({ request }) => {
    const nodeInfo = await request.get('/api/lnd/get-info')
    expect(nodeInfo.ok()).toBeTruthy()
  })

  test('should return 503 due lnd is not running', async ({ request }) => {
    await executeLndCommand.stopLndNode()
    const nodeInfo = await request.get('/api/lnd/get-info')
    expect(nodeInfo.status()).toBe(503)
    const resonseJson = await nodeInfo.json()
    expect(resonseJson.message).toBe('GRPCClient: Connection unavailable. Is the lnd node running?')
  })

  test('should return 200 after lnd has recovered restarted ', async ({ request }) => {
    await executeLndCommand.stopLndNode()
    const nodeInfoBefore = await request.get('/api/lnd/get-info')
    expect(nodeInfoBefore.status()).toBe(503)
    await executeLndCommand.startLndNode()

    let successFullConnection = false
    await addTimeout(async () => {
      do {
        const nodeInfo = await request.get('/api/lnd/get-info')
        successFullConnection = nodeInfo.ok()
        await wait(250)
      } while (!successFullConnection)
    }, 10000)
    expect(successFullConnection).toBeTruthy()
  })
})
