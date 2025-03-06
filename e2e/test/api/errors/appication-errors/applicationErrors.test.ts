import { test, expect } from '@playwright/test'
import testBasicResponseAgainstJson from '../testBasicResponseAgainstJson'
import generic500ReponseJson from '../generic-500-response.json' with { type: 'json' }
import unknownResponseJson from './unknown-response.json' with { type: 'json' }
import unavailableResponseJson from './unavailable-response.json' with { type: 'json' }

test.describe('Application Errors', () => {
  test('should return 200', async ({ request }) => {
    const response = await request.get('/api/test/application-errors')
    expect(response.ok()).toBeTruthy()
  })

  test('should return 502', async ({ request }) => {
    const response = await request.get('/api/test/application-errors?test=ServiceErrorStatusUNKNOWN')
    await testBasicResponseAgainstJson(response, unknownResponseJson)
  })

  test('should return 503', async ({ request }) => {
    const response = await request.get('/api/test/application-errors?test=ServiceErrorStatusUNAVAILABLE')
    await testBasicResponseAgainstJson(response, unavailableResponseJson)
  })

  test('should return 500', async ({ request }) => {
    const response = await request.get('/api/test/application-errors?test=EmptyGprcResponseError')
    await testBasicResponseAgainstJson(response, generic500ReponseJson)
  })
})
