import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { IMAGES } from '../data/images'

export default function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950">
      <img
        src={IMAGES.ctaBackground}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-forest-950/82" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-forest-950"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-32">
        <Reveal
          as="h2"
          className="text-balance font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
        >
          Good Food.
          <br />
          <span className="text-accent-400">Greater Growth.</span>
        </Reveal>

        <Reveal
          as="p"
          delay={0.08}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Book a free strategy call and let&apos;s create a growth plan for your restaurant.
        </Reveal>

        <Reveal delay={0.15} className="mt-9 flex justify-center">
          <Button href="#contact" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
            Book a Free Strategy Call
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
