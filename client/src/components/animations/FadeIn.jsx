import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * FadeIn — wraps children in a fade + directional slide animation
 * triggered when the element enters the viewport.
 *
 * Props:
 *  direction  — 'up' | 'down' | 'left' | 'right'  (default: 'up')
 *  delay      — seconds before animation starts     (default: 0)
 *  duration   — animation duration in seconds       (default: 0.6)
 *  once       — only animate on first enter         (default: true)
 *  threshold  — intersection threshold 0-1          (default: 0.1)
 *  className  — extra Tailwind / CSS classes
 *  children   — any React node
 */
export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  className = '',
  style = {},
  as = 'div',
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold })

  const offsets = {
    up:    { y: 32, x: 0 },
    down:  { y: -32, x: 0 },
    left:  { x: 32, y: 0 },
    right: { x: -32, y: 0 },
    none:  { x: 0, y: 0 },
  }

  const { x, y } = offsets[direction] || offsets.up

  const variants = {
    hidden:  { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  )
}
