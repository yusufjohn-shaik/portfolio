import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * SlideUp — slides children upward into view with a spring feel.
 * Great for cards, list items, and section reveals.
 *
 * Props:
 *  delay     — seconds before animation starts (default: 0)
 *  duration  — animation duration              (default: 0.5)
 *  distance  — px distance to travel           (default: 50)
 *  once      — animate only on first view      (default: true)
 *  className — extra CSS classes
 */
export default function SlideUp({
  children,
  delay = 0,
  duration = 0.5,
  distance = 50,
  once = true,
  className = '',
  style = {},
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{
        duration,
        delay,
        type: 'spring',
        stiffness: 80,
        damping: 14,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
