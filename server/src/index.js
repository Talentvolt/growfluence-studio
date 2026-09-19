import { createApp } from './app.js'
import { config } from './config.js'
import { verifyMailer } from './services/mailer.js'

const app = createApp()

const server = app.listen(config.port, () => {
  console.log(`[server] Growfluence Studio API listening on port ${config.port} (${config.env})`)
  console.log(`[server] Allowed origins: ${config.corsOrigins.join(', ') || '(none)'}`)

  verifyMailer()
    .then(() => console.log('[server] SMTP connection verified.'))
    .catch((error) => console.error('[server] SMTP verification failed:', error.message))
})

function shutdown(signal) {
  console.log(`[server] ${signal} received. Shutting down.`)
  server.close(() => process.exit(0))
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))
