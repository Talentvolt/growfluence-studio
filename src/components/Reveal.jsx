import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Scroll-triggered reveal. Respects the user's reduced-motion preference
 * and only animates once per element.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 26,
  duration = 0.65,
  as = 'div',
  once = true,
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}
