// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: true,
  },
  dirs: {
    src: [
      './playground',
    ],
  },
}, {
  ignores: ['server/domain/lnd/types/**/*.ts'],
})
  .append({
    rules: {
      '@stylistic/brace-style': 'off',
      '@stylistic/member-delimiter-style': 'off',
      '@vue/singleline-html-element-content-newline': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/block-tag-newline': 'off',
    },
  })
