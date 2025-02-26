import { parseConfig, type ConfigType } from '../domain/config/config'

let configCache: ConfigType | null = null

export const useConfig = (): ConfigType => {
  if (!configCache) {
    const runtimeConfig = useRuntimeConfig()
    configCache = parseConfig(runtimeConfig.configFile)
  }

  return configCache
}
