import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, serviceOptions, site, socialLinks } from '../data/site'
import Logo from './Logo'
import { socialIconMap } from './socialIconMap'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-forest-950 text-white/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-6 max-w-xs text-pretty text-[15px] leading-relaxed text-white/65">
              {site.tagline}
            </p>

            <ul className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const SocialIcon = socialIconMap[social.icon]
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Growfluence Studio on ${social.label}`}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/60 hover:bg-accent-400/10 hover:text-accent-300"
                    >
                      {SocialIcon ? <SocialIcon className="h-[18px] w-[18px]" /> : null}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our services" className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceOptions.slice(0, 6).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-white/65 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3 text-white/65 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Growfluence Studio. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/45">
            <li>
              <a href="#home" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#home" className="transition-colors hover:text-white">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
