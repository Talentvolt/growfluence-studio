import originalArtwork from '../assets/growfluence-logo.png'
import lightVariant from '../assets/growfluence-logo-light.png'

/**
 * Growfluence Studio logo — the supplied brand artwork, used as-is.
 *
 * `theme="light"` (default) selects the light-on-dark variant for dark surfaces
 * such as the navbar and footer. `theme="dark"` uses the original artwork for
 * light surfaces. Original proportions are preserved (intrinsic ratio 640:449).
 */
const SIZES = {
  sm: 'h-10',
  md: 'h-14 lg:h-16',
  lg: 'h-16 sm:h-20',
}

export default function Logo({ theme = 'light', size = 'md', className = '' }) {
  const src = theme === 'dark' ? originalArtwork : lightVariant

  return (
    <img
      src={src}
      alt="Growfluence Studio"
      width={640}
      height={449}
      decoding="async"
      className={`w-auto max-w-none object-contain ${SIZES[size] ?? SIZES.md} ${className}`}
    />
  )
}
