import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) {
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <Reveal
          as="span"
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
            isDark
              ? 'border-white/15 bg-white/5 text-accent-300'
              : 'border-forest-200 bg-forest-50 text-forest-600'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          {eyebrow}
        </Reveal>
      )}

      <Reveal
        as="h2"
        delay={0.05}
        className={`mt-5 text-balance text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          isDark ? 'text-white' : 'text-forest-950'
        }`}
      >
        {title}
      </Reveal>

      {description && (
        <Reveal
          as="p"
          delay={0.1}
          className={`mt-5 text-pretty text-[15px] leading-relaxed sm:text-base ${
            isDark ? 'text-white/70' : 'text-charcoal/70'
          }`}
        >
          {description}
        </Reveal>
      )}
    </div>
  )
}
