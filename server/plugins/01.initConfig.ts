import consola from 'consola'

export default defineNitroPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  consola.info(`Init Config from file: ${runtimeConfig.configFile}`)
  useConfig()
})
