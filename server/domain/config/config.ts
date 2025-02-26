import fs from 'node:fs'
import path from 'node:path'
import { z } from 'zod'
import consola from 'consola'

export const LndSchema = z.object({
  server: z.string(),
  lndCertDir: z.string().default('data/lnd'),
  lndCertFile: z.string().default('tls.cert'),
  macaroonCertDir: z.string().default('data/lnd/data/chain/bitcoin/mainnet'),
  macaroonCertFile: z.string().default('admin.macaroon'),
})

export const TelegramSenderSchema = z.object({
  token: z.string().nullish(),
  defaultChatId: z.string().nullish(),
  messagePrefix: z.string().nullish(),
  messageMaxLength: z.number().nullish(),
})

export const ConfigSchema = z.object({
  grpc: LndSchema,
  telegramSender: TelegramSenderSchema.optional(),
})

export type ConfigType = z.infer<typeof ConfigSchema>

export const parseConfig = (relativeFilePath = 'config.json') => {
  const configFilePath = path.resolve(process.cwd(), relativeFilePath)

  try {
    const configData = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'))
    return ConfigSchema.parse(configData)
  } catch (error) {
    consola.warn('Invalid configuration:', error)
    consola.info('Using default configuration')
    throw error
  }
}
