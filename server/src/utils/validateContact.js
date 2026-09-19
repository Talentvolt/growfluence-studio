import { BUDGET_OPTIONS, SERVICE_OPTIONS } from '../constants.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/

const LIMITS = {
  fullName: { min: 2, max: 100 },
  businessName: { min: 2, max: 150 },
  email: { max: 254 },
  phone: { max: 20 },
  city: { max: 100 },
  message: { min: 10, max: 5000 },
}

function stripControlChars(value) {
  let result = ''
  for (const char of value) {
    const code = char.charCodeAt(0)
    result += code < 32 || code === 127 ? ' ' : char
  }
  return result
}

function clean(value) {
  if (typeof value !== 'string') return ''
  return stripControlChars(value).trim()
}

function checkLength(value, { min = 0, max }) {
  if (value.length < min) return `Must be at least ${min} characters.`
  if (value.length > max) return `Must be at most ${max} characters.`
  return null
}

/**
 * Validates and normalises a contact form payload.
 * @returns {{ data: object, errors: object|null }}
 */
export function validateContact(body) {
  const input = body && typeof body === 'object' ? body : {}

  const data = {
    fullName: clean(input.fullName),
    businessName: clean(input.businessName),
    email: clean(input.email).toLowerCase(),
    phone: clean(input.phone),
    city: clean(input.city),
    service: clean(input.service),
    budget: clean(input.budget),
    message: clean(input.message),
  }

  const errors = {}

  if (!data.fullName) {
    errors.fullName = 'Please enter your full name.'
  } else {
    const error = checkLength(data.fullName, LIMITS.fullName)
    if (error) errors.fullName = error
  }

  if (!data.businessName) {
    errors.businessName = 'Please enter your restaurant or business name.'
  } else {
    const error = checkLength(data.businessName, LIMITS.businessName)
    if (error) errors.businessName = error
  }

  if (!data.email) {
    errors.email = 'Please enter your email address.'
  } else if (data.email.length > LIMITS.email.max || !EMAIL_PATTERN.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!data.phone) {
    errors.phone = 'Please enter your phone or WhatsApp number.'
  } else if (!PHONE_PATTERN.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (data.city && data.city.length > LIMITS.city.max) {
    errors.city = 'Please shorten the city name.'
  }

  if (!data.service) {
    errors.service = 'Please select the service you need.'
  } else if (!SERVICE_OPTIONS.includes(data.service)) {
    errors.service = 'Please select a valid service.'
  }

  if (data.budget && !BUDGET_OPTIONS.includes(data.budget)) {
    errors.budget = 'Please select a valid budget range.'
  }

  if (!data.message) {
    errors.message = 'Tell us a little about your goals.'
  } else {
    const error = checkLength(data.message, LIMITS.message)
    if (error) errors.message = error
  }

  return {
    data,
    errors: Object.keys(errors).length > 0 ? errors : null,
  }
}
