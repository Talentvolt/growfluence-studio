import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../data/site'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-charcoal/10 bg-white/90 py-2 shadow-[0_1px_2px_rgba(13,20,18,0.04),0_12px_28px_-16px_rgba(13,20,18,0.18)] backdrop-blur-xl lg:py-2.5'
          : 'border-b border-transparent bg-white py-3 lg:py-4'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
      >
        <a href="#home" className="shrink-0 rounded-lg" aria-label="Growfluence Studio — home">
          <Logo theme="dark" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-charcoal/70 transition-colors duration-200 hover:bg-charcoal/[0.04] hover:text-charcoal focus-visible:text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:bg-accent-600 hover:shadow-accent-500/35 sm:inline-flex"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/15 bg-white text-charcoal transition-colors hover:bg-charcoal/[0.04] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-white" />

            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col px-5 pb-10 pt-4 sm:px-8"
            >
              <div className="flex items-center justify-between">
                <Logo theme="dark" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/15 bg-white text-charcoal transition-colors hover:bg-charcoal/[0.04]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.35 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-charcoal/10 py-4 font-display text-2xl text-charcoal transition-colors hover:text-accent-600"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-600"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
