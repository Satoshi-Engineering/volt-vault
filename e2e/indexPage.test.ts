import { beforeAll, describe, expect, it } from 'vitest'
import { setup, createPage, type NuxtPage } from '@nuxt/test-utils/e2e'

import pkg from '../package.json'

describe('Index page', async () => {
  await setup()

  let page: NuxtPage

  beforeAll(async () => {
    page = await createPage('/')
  })

  it('contains main headline', async () => {
    expect(await page.getByTestId('headline').isVisible())
    expect((await page.getByTestId('headline').first().textContent())?.trim()).toBe('Volt Vault')
  })

  it('contains version in the footer', async () => {
    expect(await page.getByTestId('version').first().textContent()).toBe(`v${pkg.version}`)
  })
})
