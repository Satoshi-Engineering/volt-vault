import { expect, test } from '@playwright/test'

import pkg from '../../package.json' assert { type: 'json' }

test.describe('Index page', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('contains main headline', async ({ page }) => {
    expect(await page.getByTestId('headline').isVisible())
    expect((await page.getByTestId('headline').first().textContent())?.trim()).toBe('Volt Vault')
  })

  test('contains version in the footer', async ({ page }) => {
    expect(await page.getByTestId('version').first().textContent()).toBe(`v${pkg.version}`)
  })
})
