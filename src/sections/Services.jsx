import { ArrowUpRight } from 'lucide-react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Everything your restaurant needs to{' '}
                <span className="text-forest-500">grow in the digital world.</span>
              </>
            }
            description="One team for strategy, content, advertising and reputation — built specifically for restaurants and cafés."
          />
          <Reveal delay={0.1} className="shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-500"
            >
              Request a free audit
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={(index % 4) * 0.06} className="h-full">
              <article className="group relative flex h-full flex-col rounded-2xl border border-forest-950/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-400/50 hover:shadow-xl hover:shadow-forest-950/10">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-950 text-accent-400 transition-colors duration-300 group-hover:bg-accent-400 group-hover:text-forest-950">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-forest-950/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest-600"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 text-[17px] font-semibold leading-snug text-forest-950">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-pretty text-sm leading-relaxed text-charcoal/65">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
