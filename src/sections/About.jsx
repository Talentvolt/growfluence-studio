import { ArrowRight, Play } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { IMAGES } from '../data/images'
import { aboutStats } from '../data/site'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-forest-50/60 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative pb-8 sm:pb-10" y={34}>
            <div className="overflow-hidden rounded-[2rem] border border-forest-950/5 shadow-2xl shadow-forest-950/15">
              <img
                src={IMAGES.aboutChef}
                alt="Chef carefully plating a dish in a professional restaurant kitchen"
                loading="lazy"
                decoding="async"
                className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
              />
            </div>

            <div className="absolute -bottom-8 right-4 w-36 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:right-8 sm:w-48">
              <img
                src={IMAGES.aboutInterior}
                alt="Warm café interior with ambient lighting and seating"
                loading="lazy"
                decoding="async"
                className="h-28 w-full object-cover sm:h-36"
              />
            </div>

            <div className="absolute -top-5 left-5 rounded-2xl bg-forest-950 px-5 py-4 text-white shadow-xl">
              <p className="font-display text-2xl font-semibold leading-none">12+</p>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-white/55">
                Years combined
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal
              as="span"
              className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              About Growfluence Studio
            </Reveal>

            <Reveal
              as="h2"
              delay={0.05}
              className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.12] text-forest-950 sm:text-4xl lg:text-[2.75rem]"
            >
              Let&apos;s Grow Your
              <br />
              Restaurant Together.
            </Reveal>

            <Reveal
              as="p"
              delay={0.1}
              className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-charcoal/70 sm:text-base"
            >
              We combine creativity, strategy and performance marketing to help restaurants attract
              more customers, increase orders and build long-term brand value.
            </Reveal>

            <Reveal delay={0.15} className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button href="#contact" variant="dark" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Book a Strategy Call
              </Button>
              <Button href="#work" variant="outlineDark" size="lg" icon={Play} className="w-full sm:w-auto">
                Watch Our Story
              </Button>
            </Reveal>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-forest-950/10 pt-8">
              {aboutStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="flex flex-col-reverse">
                    <dt className="mt-1.5 text-xs font-medium uppercase tracking-[0.16em] text-charcoal/50">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
                      {stat.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
