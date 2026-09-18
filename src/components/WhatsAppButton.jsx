import { site } from '../data/site'
import { WhatsappIcon } from './BrandIcons'

/**
 * Floating WhatsApp CTA.
 * The number lives in `site.whatsapp` (src/data/site.js) and can be overridden
 * with the VITE_WHATSAPP_NUMBER environment variable.
 */
export default function WhatsAppButton() {
  const { number, message } = site.whatsapp
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Growfluence Studio on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-accent-500 p-3.5 text-forest-950 shadow-xl shadow-forest-950/25 transition-all duration-300 hover:bg-accent-400 hover:shadow-2xl focus-visible:outline-offset-4 sm:bottom-7 sm:right-7 sm:pr-5"
    >
      <span className="relative grid place-items-center">
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-400" />
        <WhatsappIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  )
}
