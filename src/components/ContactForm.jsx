import { useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { serviceOptions } from '../data/site'

/** Backend base URL, e.g. http://localhost:5000. Configure via VITE_API_URL. */
const API_URL = (import.meta.env.VITE_API_URL || '').trim().replace(/\/+$/, '')

const budgetOptions = [
  'Under ₹25,000 / month',
  '₹25,000 – ₹50,000 / month',
  '₹50,000 – ₹1,00,000 / month',
  '₹1,00,000+ / month',
  'Not sure yet',
]

const initialValues = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  city: '',
  service: '',
  budget: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter at least 2 characters.'
  }

  if (!values.businessName.trim()) {
    errors.businessName = 'Please enter your restaurant or business name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone or WhatsApp number.'
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!values.service) {
    errors.service = 'Please select the service you need.'
  }

  if (!values.message.trim()) {
    errors.message = 'Tell us a little about your goals.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add at least 10 characters.'
  }

  return errors
}

const controlClass = (hasError) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal shadow-sm outline-none transition-colors duration-200 placeholder:text-charcoal/40 focus:ring-2 ${
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/15'
      : 'border-forest-950/12 focus:border-accent-500 focus:ring-accent-500/20'
  }`

function Field({ id, label, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-forest-950">
        {label}
        {required && (
          <span className="ml-1 text-accent-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

function TextField({ id, label, error, required, type = 'text', ...props }) {
  return (
    <Field id={id} label={label} error={error} required={required}>
      <input
        id={id}
        name={id}
        type={type}
        aria-invalid={Boolean(error)}
        aria-required={required || undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={controlClass(Boolean(error))}
        {...props}
      />
    </Field>
  )
}

function SelectField({ id, label, error, required, options, placeholder, ...props }) {
  return (
    <Field id={id} label={label} error={error} required={required}>
      <div className="relative">
        <select
          id={id}
          name={id}
          aria-invalid={Boolean(error)}
          aria-required={required || undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${controlClass(Boolean(error))} appearance-none pr-11 ${
            props.value ? 'text-charcoal' : 'text-charcoal/40'
          }`}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-charcoal">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40"
          aria-hidden="true"
        />
      </div>
    </Field>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleReset = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitError('')
    setSubmittedName('')
    setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstErrorKey = Object.keys(nextErrors)[0]
    if (firstErrorKey) {
      setStatus('idle')
      window.requestAnimationFrame(() => {
        document.getElementById(firstErrorKey)?.focus()
      })
      return
    }

    setStatus('loading')
    setSubmitError('')

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          businessName: values.businessName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          city: values.city.trim(),
          service: values.service,
          budget: values.budget,
          message: values.message.trim(),
        }),
      })

      const payload = await response.json().catch(() => null)

      if (!response.ok) {
        setStatus('error')
        setSubmitError(
          payload?.message ||
            'Something went wrong while sending your enquiry. Please try again, or email us directly.',
        )
        return
      }

      setSubmittedName(values.fullName.trim().split(' ')[0])
      setValues(initialValues)
      setStatus('success')
    } catch {
      setStatus('error')
      setSubmitError(
        'Something went wrong while sending your enquiry. Please try again, or email us directly.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-forest-950/8 bg-white p-8 text-center shadow-xl shadow-forest-950/5 sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-accent-500/10 text-accent-600">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
          Enquiry sent successfully
        </h3>
        <p
          role="status"
          className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-charcoal/70"
        >
          Thanks{submittedName ? `, ${submittedName}` : ''}! We&apos;ve received your details and
          will get back to you within 30 minutes with next steps.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-forest-950/15 px-6 py-3 text-sm font-semibold text-forest-950 transition-colors duration-300 hover:bg-forest-50"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-forest-950/8 bg-white p-6 shadow-xl shadow-forest-950/5 sm:p-8 lg:p-10"
    >
      {status === 'error' && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{submitError}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="fullName"
          label="Full Name"
          required
          autoComplete="name"
          placeholder="e.g. Priya Sharma"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <TextField
          id="businessName"
          label="Restaurant / Business Name"
          required
          autoComplete="organization"
          placeholder="e.g. The Green Table"
          value={values.businessName}
          onChange={handleChange}
          error={errors.businessName}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@restaurant.com"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <TextField
          id="phone"
          label="Phone / WhatsApp"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+91 90000 00000"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <TextField
          id="city"
          label="City"
          autoComplete="address-level2"
          placeholder="e.g. Bengaluru"
          value={values.city}
          onChange={handleChange}
          error={errors.city}
        />

        <SelectField
          id="budget"
          label="Budget Range"
          placeholder="Select a budget range"
          options={budgetOptions}
          value={values.budget}
          onChange={handleChange}
          error={errors.budget}
        />

        <div className="sm:col-span-2">
          <SelectField
            id="service"
            label="Service Needed"
            required
            placeholder="Select the service you need"
            options={serviceOptions}
            value={values.service}
            onChange={handleChange}
            error={errors.service}
          />
        </div>

        <div className="sm:col-span-2">
          <Field id="message" label="Message" error={errors.message} required>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-required="true"
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell us about your restaurant and what you'd like to achieve."
              value={values.message}
              onChange={handleChange}
              className={`${controlClass(Boolean(errors.message))} resize-y`}
            />
          </Field>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-800 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send Enquiry
              <Send
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        <p className="inline-flex items-center gap-2 text-xs leading-relaxed text-charcoal/55">
          <ShieldCheck className="h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
          We only use your details to respond to your enquiry.
        </p>
      </div>
    </form>
  )
}
