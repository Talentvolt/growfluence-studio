import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { getImage } from '../data/images'
import { projects } from '../data/work'

export default function Work() {
  return (
    <section id="work" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Restaurants"
            description="A snapshot of the brands we help grow — through content, campaigns and creative that fills tables."
          />
          <Reveal delay={0.1} className="shrink-0">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-500"
            >
              View All Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.id} delay={(index % 4) * 0.07}>
              <a
                href="#contact"
                className="group relative block overflow-hidden rounded-2xl focus-visible:outline-offset-4"
                aria-label={`${project.name} — ${project.service}`}
              >
                <img
                  src={getImage(project.image, 800)}
                  alt={`${project.name}, ${project.service} case study`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/92 via-forest-950/25 to-transparent" />

                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                    {project.service}
                  </span>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-xs text-white/70 opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100">
                    {project.metric}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
