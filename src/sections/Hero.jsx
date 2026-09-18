import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import { IMAGES } from '../data/images'
import { heroServices, heroStats } from '../data/site'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }

  const item = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-graphite-950"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMAGES.heroBackground}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-70 saturate-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/92 to-graphite-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/25 to-graphite-950/85" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-sage-500/8 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-16 lg:pt-40">
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
              Restaurant &amp; Café Growth Agency
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 max-w-2xl text-balance font-display text-[2.5rem] font-semibold leading-[1.07] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              <span className="text-sage-400">GROW</span> Your Restaurant.
              <br />
              Build Your <span className="text-sage-400">Influence.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-sm"
            >
              Strategy. Content. Ads. Influence.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
            >
              We help restaurants grow in the digital world and turn great food into greater
              business.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                href="#contact"
                variant="sage"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Get Free Strategy
              </Button>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 rounded-full px-1 py-1 text-left"
                aria-label="Watch our video"
              >
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/[0.04] backdrop-blur transition-colors duration-300 group-hover:border-sage-400/60">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-sage-400/20" />
                  <Play className="relative h-4 w-4 fill-white text-white" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-white transition-colors group-hover:text-sage-300">
                  Watch Video
                </span>
              </a>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
              aria-label="Core services"
            >
              {heroServices.map((service) => (
                <li
                  key={service.label}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white/55"
                >
                  <Icon name={service.icon} className="h-4 w-4 text-sage-400/70" />
                  {service.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="relative hidden lg:col-span-5 lg:block"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
              <img
                src={IMAGES.heroDish}
                alt="Elegantly plated signature dish served at a premium restaurant"
                loading="eager"
                decoding="async"
                className="h-[29rem] w-full object-cover saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/15 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="font-hand text-3xl leading-tight text-sage-300">Good Food.</p>
                <p className="font-hand text-3xl leading-tight text-white">Greater Growth.</p>
              </div>
            </div>

            <div className="absolute -right-5 top-10 animate-float-slow rounded-2xl border border-white/10 bg-graphite-900/85 px-5 py-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-1 text-sage-300" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-2 font-display text-2xl font-semibold text-white">+182%</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                Average reach lift
              </p>
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4 lg:mt-16"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                {stat.label}
              </dt>
              <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
