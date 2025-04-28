import { test, expect } from '@playwright/test'
import testBasicResponseAgainstJson from '../testBasicResponseAgainstJson'
import generic500ReponseJson from '../generic-500-response.json' with { type: 'json' }
import error500ReponseWithMessageJson from '../error-500-response-with-message.json' with { type: 'json' }
import default404ResponseJson from './default-404-response.json' with { type: 'json' }
import getValidateQuery400ResponseJson from './getValidatedQuery-400-response.json' with { type: 'json' }
import createError403ResponseJson from './createError-403-response.json' with { type: 'json' }
import createError500ResponseJson from './createError-500-response.json' with { type: 'json' }
import createError501ResponseJson from './createError-501-response.json' with { type: 'json' }
import zodParseResponseJson from './ZodParse-response.json' with { type: 'json' }

test.describe('Default API Errors', () => {
  test('should return 200', async ({ request }) => {
    const response = await request.get('/api/test/default-errors')
    expect(response.ok()).toBeTruthy()
  })

  test('should return 404 ', async ({ request }) => {
    const response = await request.get('/api/test/not-there-at-all')
    await testBasicResponseAgainstJson(response, default404ResponseJson)
  })

  test('should return 403 ', async ({ request }) => {
    const response = await request.get('/api/test/default-errors?test=createError403')
    await testBasicResponseAgainstJson(response, createError403ResponseJson)
  })

  test('should return 400 for a ZodError in getValidatedQuery function', async ({ request }) => {
    const response = await request.get('/api/test/default-errors?test=getValidatedQueryError')

    await testBasicResponseAgainstJson(response, getValidateQuery400ResponseJson)
    const json = await response.json()
    expect(json.data).toEqual(getValidateQuery400ResponseJson.data)
  })

  test('should return 500 for a createError with status 500', async ({ request }) => {
    const response = await request.get('/api/test/default-errors?test=createError500')
    await testBasicResponseAgainstJson(response, createError500ResponseJson)
  })

  test('should return 501 for a createError with status 501', async ({ request }) => {
    const response = await request.get('/api/test/default-errors?test=createError501')
    await testBasicResponseAgainstJson(response, createError501ResponseJson)
  })

  test('should return 500 for a throw new Error', async ({ request }) => {
    const response = await request.get('/api/test/default-errors?test=throwNewError')
    await testBasicResponseAgainstJson(response, error500ReponseWithMessageJson)
  })

  test('should return 500 for a throw new CustomError', async ({ request }) => {
    const response = await request.get('/api/test/default-errors?test=throwNewCustomError')
    await testBasicResponseAgainstJson(response, generic500ReponseJson)
  })

  test('should return 500 for a Zod.parse Error', async ({ request }) => {
    const response = await request.get('/api/test/default-errors?test=throwZodErrorParse')
    await testBasicResponseAgainstJson(response, zodParseResponseJson)
  })
})
