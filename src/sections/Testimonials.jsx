import { Quote, Star } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { getImage } from '../data/images'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Restaurant Owners."
          description="Sample reviews are shown below to illustrate layout. They are replaced with verified client feedback before launch."
          align="center"
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.id} delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-forest-950/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/10 sm:p-7">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-accent-400/40" aria-hidden="true" />
                  <div className="flex items-center gap-0.5 text-accent-500" aria-hidden="true">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                </div>

                <blockquote className="mt-5 flex-1 text-pretty text-[15px] leading-relaxed text-charcoal/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-forest-950/8 pt-5">
                  <img
                    src={getImage(testimonial.avatar, 120)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-forest-950">{testimonial.name}</p>
                    <p className="text-xs text-charcoal/55">
                      {testimonial.role} &middot; {testimonial.restaurant}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
