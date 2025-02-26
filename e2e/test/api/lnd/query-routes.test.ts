import { expect, test } from '@playwright/test'
import type { Serializable } from 'playwright-core/types/structs'
import { getLndInvoice } from '~/e2e/lib/getLndInvoice'

const SATS_AMOUNT = 2000

test.describe('api/lnd/query-routes route', async () => {
  let paymentRequestEncoded: string

  test.beforeAll(async () => {
    paymentRequestEncoded = await getLndInvoice({
      amount: SATS_AMOUNT,
    })
  })

  test('should fail due validation error', async ({ request }) => {
    const queryRoutesResponse = await request.get('/api/lnd/query-routes')
    expect(queryRoutesResponse.status()).toBe(400)
  })

  test('Getting fee for payment', async ({ request }) => {
    const queryRoutesResponse = await request.get(`/api/lnd/query-routes?=paymentRequestEncoded=${paymentRequestEncoded}`)
    expect(queryRoutesResponse.ok()).toBeTruthy()
    const queryRoutesData = await queryRoutesResponse.json()

    testSchema(queryRoutesData)
    expect(queryRoutesData.paymentRequestDecoded.num_satoshis).toEqual(`${SATS_AMOUNT}`)
    expect(queryRoutesData.paymentRequestDecoded.num_msat).toEqual(`${SATS_AMOUNT * 1000}`)
    expect(queryRoutesData.queryRoutesResponse.success_prob).not.toEqual(0)
    expect(queryRoutesData.queryRoutesResponse.routes[0].total_amt).toEqual(`${SATS_AMOUNT}`)
    expect(queryRoutesData.queryRoutesResponse.routes[0].total_amt_msat).toEqual(`${SATS_AMOUNT * 1000}`)
    expect(queryRoutesData.queryRoutesResponse.routes[0].total_fees).toEqual('0')
    expect(queryRoutesData.queryRoutesResponse.routes[0].total_fees_msat).toEqual('0')
  })
})

const testSchema = (queryRoutesData: Serializable) => {
  expect(queryRoutesData.paymentRequestDecoded).toEqual(expect.objectContaining({
    blinded_paths: expect.any(Array), // Expecting an array
    cltv_expiry: expect.any(String),
    description: expect.any(String),
    description_hash: expect.any(String),
    destination: expect.any(String),
    expiry: expect.any(String),
    fallback_addr: expect.any(String),
    features: expect.any(Object), // Features is an object with number keys
    num_msat: expect.any(String),
    num_satoshis: expect.any(String),
    payment_addr: expect.any(Object), // Expecting a Buffer
    payment_hash: expect.any(String),
    route_hints: expect.any(Array), // Expecting an array
    timestamp: expect.any(String),
  }))

  expect(queryRoutesData.queryRoutesResponse).toEqual(expect.objectContaining({
    success_prob: expect.any(Number),
    routes: expect.arrayContaining([
      expect.objectContaining({
        total_time_lock: expect.any(Number),
        total_fees: expect.any(String),
        total_amt: expect.any(String),
        hops: expect.any(Array), // Expecting an array
        total_fees_msat: expect.any(String),
        total_amt_msat: expect.any(String),
        first_hop_amount_msat: expect.any(String),
        custom_channel_data: expect.any(Object), // Expecting a Buffer
      }),
    ]),
  }))
}
