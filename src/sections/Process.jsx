import { ArrowRight } from 'lucide-react'
import { Fragment } from 'react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { processSteps } from '../data/process'

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="How We Work"
          title="A Simple Path To Real Growth."
          description="A clear, repeatable process — so you always know what is happening and why."
          align="center"
          theme="dark"
        />

        <div className="relative mt-14 lg:mt-16">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-7 top-4 w-px bg-white/10 lg:hidden"
          />

          <ol className="relative space-y-6 lg:flex lg:items-stretch lg:gap-2 lg:space-y-0">
            {processSteps.map((step, index) => (
              <Fragment key={step.id}>
                <Reveal
                  as="li"
                  delay={index * 0.08}
                  className="relative flex flex-1 gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-accent-400/40 lg:block lg:p-6"
                >
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent-400 text-forest-950 shadow-lg shadow-accent-500/20">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>

                  <div className="lg:mt-5">
                    <span className="text-xs font-semibold tracking-[0.24em] text-accent-300">
                      {step.id}
                    </span>
                    <h3 className="mt-1.5 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </Reveal>

                {index < processSteps.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden shrink-0 items-center justify-center pt-10 text-accent-400/60 lg:flex"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
