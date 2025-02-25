import TelegramSender from 'telegram-sender'
import consoleHooks from 'console-hooks'

const config = useConfig()

const initErrorLogging = () => {
  console.info('Init Telegram Error Logging')

  const telegramSender = initTelegramSender()

  consoleHooks({
    onError: async (message: string) => {
      await telegramSender?.sendMessage({ message })
    },
  })
}

const initTelegramSender = () => {
  if (
    typeof config.telegramSender?.token !== 'string'
    || config.telegramSender.token.length === 0
    || typeof config.telegramSender?.defaultChatId !== 'string'
    || config.telegramSender.defaultChatId.length === 0
  ) {
    console.warn('[ErrorLoggingPlugin] token or defaultChatId are not set in config.json\nWill not send error messages to Telegram.')
    return null
  }

  return new TelegramSender({
    token: config.telegramSender.token,
    defaultChatId: config.telegramSender.defaultChatId,
    messagePrefix: config.telegramSender.messagePrefix ?? undefined,
    messageMaxLength: config.telegramSender.messageMaxLength ?? 4000,
  })
}

export default defineNitroPlugin(initErrorLogging)
