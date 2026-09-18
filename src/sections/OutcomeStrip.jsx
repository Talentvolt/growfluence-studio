import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { outcomes } from '../data/site'

export default function OutcomeStrip() {
  return (
    <section
      aria-label="What we deliver"
      className="relative z-20 -mt-12 px-5 sm:-mt-16 sm:px-8 lg:px-12"
    >
      <Reveal className="mx-auto max-w-7xl" y={30}>
        <div className="rounded-[1.75rem] border border-forest-950/5 bg-white p-6 shadow-2xl shadow-forest-950/10 sm:p-8 lg:p-10">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-forest-950/10">
            {outcomes.map((outcome) => (
              <li key={outcome.title} className="flex items-center gap-4 lg:px-6 lg:first:pl-0">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent-400/30 bg-forest-50 text-forest-600">
                  <Icon name={outcome.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-forest-950 sm:text-[15px]">
                  {outcome.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
