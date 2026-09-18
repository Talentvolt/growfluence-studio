const variants = {
  primary:
    'bg-accent-400 text-forest-950 shadow-lg shadow-accent-500/25 hover:bg-accent-300 hover:shadow-accent-400/35',
  sage: 'bg-sage-400 text-graphite-950 shadow-lg shadow-black/30 hover:bg-sage-300 hover:shadow-black/40',
  dark: 'bg-forest-950 text-white shadow-lg shadow-forest-950/20 hover:bg-forest-800',
  outline: 'border border-white/25 text-white hover:border-white/50 hover:bg-white/10',
  outlineDark:
    'border border-forest-950/15 text-forest-950 hover:border-forest-950/35 hover:bg-forest-50',
  light: 'bg-white text-forest-950 shadow-lg shadow-forest-950/10 hover:bg-white/90',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm sm:px-6',
  lg: 'px-6 py-3.5 text-base sm:px-7',
}

export default function Button({
  href = '#',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon: Icon,
  ...rest
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        variants[variant] ?? variants.primary
      } ${sizes[size] ?? sizes.md} ${className}`}
      {...rest}
    >
      {children}
      {Icon && (
        <Icon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </a>
  )
}
