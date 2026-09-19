import 'dotenv/config'

/**
 * Reads a required environment variable and fails fast when it is missing.
 * Secrets are never hardcoded — they must be supplied through the environment.
 */
function required(name) {
  const value = process.env[name]
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(
      `Missing required environment variable "${name}". Copy server/.env.example to server/.env and set it.`,
    )
  }
  return value.trim()
}

function optional(name, fallback = '') {
  const value = process.env[name]
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : fallback
}

function parseOrigins(value) {
  return value
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter(Boolean)
}

const nodeEnv = optional('NODE_ENV', 'development')

export const config = {
  env: nodeEnv,
  isProduction: nodeEnv === 'production',
  port: Number.parseInt(optional('PORT', '5000'), 10) || 5000,
  corsOrigins: parseOrigins(optional('CORS_ORIGIN', 'http://localhost:5173')),
  smtp: {
    host: required('SMTP_HOST'),
    port: Number.parseInt(optional('SMTP_PORT', '587'), 10) || 587,
    secure: optional('SMTP_SECURE', 'false').toLowerCase() === 'true',
    user: required('SMTP_USER'),
    pass: required('SMTP_PASS'),
  },
  mail: {
    from: optional('MAIL_FROM', optional('SMTP_USER')),
    to: optional('MAIL_TO', 'Growfluencestudio@gmail.com'),
  },
}
