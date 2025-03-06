import { expect, type APIResponse } from '@playwright/test'

export default async (response: APIResponse, validJson: { statusCode: number, statusMessage: string, message: string }) => {
  expect(response.status()).toBe(validJson.statusCode)
  const json = await response.json()
  expect(json.statusCode).toEqual(validJson.statusCode)
  expect(json.statusMessage).toEqual(validJson.statusMessage)
  expect(json.message).toEqual(validJson.message)
}
