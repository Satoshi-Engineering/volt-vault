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
    || typeof config.telegramSender?.defaultChatId !== 'string'
  ) {
    console.warn('token or defaultChatId are not set in config.json\nWill not send error messages to Telegram.')
    return null
  }

  return new TelegramSender({
    token: config.telegramSender.token,
    defaultChatId: config.telegramSender.defaultChatId,
    messagePrefix: config.telegramSender.messagePrefix,
    messageMaxLength: config.telegramSender.messageMaxLength,
  })
}

export default defineNitroPlugin(initErrorLogging)
