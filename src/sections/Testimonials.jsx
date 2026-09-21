import { MapPin, Quote } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const gridClass =
    testimonials.length === 1
      ? 'mx-auto max-w-3xl'
      : testimonials.length === 2
        ? 'md:grid-cols-2'
        : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Restaurant Owners."
          description="Real feedback from the restaurant owners we partner with."
          align="center"
        />

        <ul className={`mt-14 grid gap-6 ${gridClass}`}>
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.id} delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-forest-950/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/10 sm:p-7">
                <div className="flex items-start gap-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.imageAlt ?? testimonial.restaurant}
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-forest-950/10 sm:h-16 sm:w-16"
                    />
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold text-forest-950">
                      {testimonial.restaurant}
                    </h3>
                    {testimonial.location && (
                      <p className="mt-1 flex items-start gap-1.5 text-xs leading-relaxed text-charcoal/55">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-500" aria-hidden="true" />
                        <span>{testimonial.location}</span>
                      </p>
                    )}
                  </div>

                  <Quote className="h-8 w-8 shrink-0 text-accent-400/40" aria-hidden="true" />
                </div>

                <blockquote className="mt-5 flex-1 text-pretty text-[15px] leading-relaxed text-charcoal/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 border-t border-forest-950/8 pt-5">
                  <p className="text-sm font-semibold text-forest-950">
                    &mdash; {testimonial.attribution}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
