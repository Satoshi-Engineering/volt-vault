import fs from 'node:fs'
import path from 'node:path'
import { z } from 'zod'
import consola from 'consola'

export const LndSchema = z.object({
  server: z.string(),
})

export const ConfigSchema = z.object({
  grpc: LndSchema,
})

export type ConfigType = z.infer<typeof ConfigSchema>

export const parseConfig = () => {
  const configFilePath = path.resolve(process.cwd(), 'config.json')

  try {
    const configData = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'))
    return ConfigSchema.parse(configData)
  } catch (error) {
    consola.warn('Invalid configuration:', error)
    consola.info('Using default configuration')
    return ConfigSchema.parse({})
  }
}
