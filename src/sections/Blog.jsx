import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { posts } from '../data/blog'
import { getImage } from '../data/images'

export default function Blog() {
  return (
    <section id="blog" className="bg-forest-50/60 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Tips, Trends & Growth Ideas."
            description="Practical marketing ideas for restaurant owners — from reels to local search."
          />
          <Reveal delay={0.1} className="shrink-0">
            <a
              href="#blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-500"
            >
              Read all articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal as="li" key={post.id} delay={index * 0.08} className="h-full">
              <article className="group h-full">
                <a
                  href={post.href}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-forest-950/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest-950/10"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getImage(post.image, 800)}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-700 backdrop-blur">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-pretty text-lg font-semibold leading-snug text-forest-950 transition-colors duration-300 group-hover:text-forest-600">
                      {post.title}
                    </h3>

                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-xs text-charcoal/55">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-forest-500" aria-hidden="true" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-forest-500" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
