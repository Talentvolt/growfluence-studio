import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { config } from './config.js'
import contactRouter from './routes/contact.js'

function corsOptions() {
  return {
    origin(origin, callback) {
      // Allow same-origin requests, curl, and server-to-server calls with no Origin.
      if (!origin || config.corsOrigins.includes(origin.replace(/\/+$/, ''))) {
        return callback(null, true)
      }
      return callback(null, false)
    },
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    maxAge: 86400,
  }
}

export function createApp() {
  const app = express()

  app.disable('x-powered-by')
  app.set('trust proxy', 1)

  app.use(helmet())
  app.use(cors(corsOptions()))
  app.use(express.json({ limit: '32kb' }))

  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message: 'Too many enquiries from this address. Please try again later.',
    },
  })

  app.get('/api/health', (req, res) => {
    res.json({ success: true, status: 'ok', env: config.env })
  })

  app.use('/api/contact', contactLimiter, contactRouter)

  app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Endpoint not found.' })
  })

  // Express identifies error handlers by their four-argument signature.
  app.use((error, req, res, _next) => {
    const isBadJson = error?.type === 'entity.parse.failed' || error instanceof SyntaxError

    if (isBadJson) {
      return res.status(400).json({ success: false, message: 'Invalid JSON payload.' })
    }

    if (error?.type === 'entity.too.large') {
      return res.status(413).json({ success: false, message: 'Request payload is too large.' })
    }

    console.error('[contact] Unhandled error:', error)

    return res.status(500).json({
      success: false,
      message: 'Something went wrong while sending your enquiry. Please try again later.',
    })
  })

  return app
}
