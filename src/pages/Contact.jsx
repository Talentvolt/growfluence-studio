import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Reveal from '../components/Reveal'
import { WhatsappIcon } from '../components/BrandIcons'
import { site } from '../data/site'

export default function Contact() {
  const { number, message } = site.whatsapp
  const whatsappHref = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-forest-100/50 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <Reveal
                as="span"
                className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-forest-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Contact
              </Reveal>

              <Reveal
                as="h1"
                delay={0.05}
                className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-forest-950 sm:text-5xl lg:text-[3.5rem]"
              >
                Let&apos;s grow your restaurant,{' '}
                <span className="text-forest-500">together.</span>
              </Reveal>

              <Reveal
                as="p"
                delay={0.1}
                className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-charcoal/70 sm:text-base"
              >
                Tell us a little about your restaurant and your goals. We&apos;ll reply within one
                business day with next steps and a free growth strategy.
              </Reveal>
            </div>

            <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10">
              <Reveal delay={0.12} className="lg:col-span-7 xl:col-span-8">
                <ContactForm />
              </Reveal>

              <Reveal delay={0.18} className="lg:col-span-5 xl:col-span-4">
                <aside className="relative h-full overflow-hidden rounded-3xl bg-forest-950 p-7 text-white shadow-xl shadow-forest-950/20 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/15 blur-3xl"
                  />

                  <h2 className="relative font-display text-2xl font-semibold text-white">
                    Prefer to talk directly?
                  </h2>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/65">
                    Reach out on any channel below — we&apos;re happy to answer questions before you
                    commit.
                  </p>

                  <ul className="relative mt-7 space-y-5">
                    <li>
                      <a
                        href={`mailto:${site.email}`}
                        className="group flex items-start gap-3.5"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent-400 transition-colors duration-300 group-hover:bg-accent-400/15">
                          <Mail className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                            Email
                          </span>
                          <span className="mt-1 block break-all text-sm font-medium text-white transition-colors group-hover:text-accent-300">
                            {site.email}
                          </span>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href={`tel:${site.phone.replace(/\s+/g, '')}`}
                        className="group flex items-start gap-3.5"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent-400 transition-colors duration-300 group-hover:bg-accent-400/15">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                            Phone
                          </span>
                          <span className="mt-1 block text-sm font-medium text-white transition-colors group-hover:text-accent-300">
                            {site.phone}
                          </span>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3.5"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent-400 transition-colors duration-300 group-hover:bg-accent-400/15">
                          <WhatsappIcon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                            WhatsApp
                          </span>
                          <span className="mt-1 block text-sm font-medium text-white transition-colors group-hover:text-accent-300">
                            Chat with us
                          </span>
                        </span>
                      </a>
                    </li>

                    <li className="flex items-start gap-3.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent-400">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                          Studio
                        </span>
                        <span className="mt-1 block text-sm font-medium text-white">
                          {site.location}
                        </span>
                      </span>
                    </li>
                  </ul>

                  <div className="relative mt-7 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5">
                    <Clock className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                    <p className="text-xs leading-relaxed text-white/65">
                      Average reply time:{' '}
                      <span className="font-semibold text-white">under 1 business day</span>
                    </p>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
