import { test, expect, type APIResponse } from '@playwright/test'
import default404ResponseJson from './default-404-response.json' with { type: 'json' }
import getValidateQuery400ResponseJson from './getValidatedQuery-400-response.json' with { type: 'json' }
import generic500ReponseJson from './generic-500-response.json' with { type: 'json' }
import createError403ResponseJson from './createError-403-response.json' with { type: 'json' }
import createError500ResponseJson from './createError-500-response.json' with { type: 'json' }
import createError501ResponseJson from './createError-501-response.json' with { type: 'json' }
import zodParseResponseJson from './ZodParse-response.json' with { type: 'json' }

test('should return 200', async ({ request }) => {
  const response = await request.get('/api/test/errorMapping')
  expect(response.ok()).toBeTruthy()
})

test('should return 404 ', async ({ request }) => {
  const response = await request.get('/api/test/not-there-at-all')
  await testBasicResponseAgainstJson(response, default404ResponseJson)
})

test('should return 403 ', async ({ request }) => {
  const response = await request.get('/api/test/errorMapping?test=createError403')
  await testBasicResponseAgainstJson(response, createError403ResponseJson)
})

test('should return 400 for a ZodError in getValidatedQuery function', async ({ request }) => {
  const response = await request.get('/api/test/errorMapping?test=getValidatedQueryError')

  await testBasicResponseAgainstJson(response, getValidateQuery400ResponseJson)
  const json = await response.json()
  expect(json.data).toEqual(getValidateQuery400ResponseJson.data)
})

test('should return 500 for a createError with status 500', async ({ request }) => {
  const response = await request.get('/api/test/errorMapping?test=createError500')
  await testBasicResponseAgainstJson(response, createError500ResponseJson)
})

test('should return 501 for a createError with status 501', async ({ request }) => {
  const response = await request.get('/api/test/errorMapping?test=createError501')
  await testBasicResponseAgainstJson(response, createError501ResponseJson)
})

test('should return 500 for a throw new Error', async ({ request }) => {
  const response = await request.get('/api/test/errorMapping?test=throwNewError')
  await testBasicResponseAgainstJson(response, generic500ReponseJson)
})

test('should return 500 for a throw new CustomError', async ({ request }) => {
  const response = await request.get('/api/test/errorMapping?test=throwNewCustomError')
  await testBasicResponseAgainstJson(response, generic500ReponseJson)
})

test('should return 500 for a Zod.parse Error', async ({ request }) => {
  const response = await request.get('/api/test/errorMapping?test=throwZodErrorParse')
  await testBasicResponseAgainstJson(response, zodParseResponseJson)
})

const testBasicResponseAgainstJson = async (response: APIResponse, validJson: { statusCode: number, statusMessage: string, message: string }) => {
  expect(response.status()).toBe(validJson.statusCode)
  const json = await response.json()
  expect(json.statusCode).toEqual(validJson.statusCode)
  expect(json.statusMessage).toEqual(validJson.statusMessage)
  expect(json.message).toEqual(validJson.message)
}
