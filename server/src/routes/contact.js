import { Router } from 'express'
import { sendContactEmail } from '../services/mailer.js'
import { validateContact } from '../utils/validateContact.js'

const router = Router()

router.post('/', async (req, res, next) => {
  const { data, errors } = validateContact(req.body)

  if (errors) {
    return res.status(400).json({
      success: false,
      message: 'Please check the form fields and try again.',
      errors,
    })
  }

  try {
    await sendContactEmail(data)

    return res.status(200).json({
      success: true,
      message: 'Thanks! Your enquiry has been sent. We will get back to you shortly.',
    })
  } catch (error) {
    return next(error)
  }
})

export default router
