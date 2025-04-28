// https://nuxt.com/docs/api/configuration/nuxt-config
import packageJson from './package.json' assert { type: 'json' }

const packageJsonTyped = packageJson as {
  version: string
  meta?: { 'special-version'?: string }
  homepage?: string
}

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/test-utils/module',
  ],
  devtools: {
    enabled: true,
  },
  css: [
    '~/assets/css/main.css',
  ],
  runtimeConfig: {
    public: {
      releasedVersion: packageJsonTyped.version,
      version: packageJsonTyped.meta?.['special-version'] || packageJsonTyped.version,
      githubLink: packageJsonTyped.homepage,
    },
    configFile: 'config.json',
  },
  compatibilityDate: '2024-11-01',
})
