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
  ],
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    public: {
      releasedVersion: packageJsonTyped.version,
      version: packageJsonTyped.meta?.['special-version'] || packageJsonTyped.version,
      githubLink: packageJsonTyped.homepage,
    },
  },
  compatibilityDate: '2024-11-01',
})
