import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * StaggerContainer — wraps a list of children and staggers their
 * entrance animations. Each child should use a motion component
 * with `variants` that include 'hidden' and 'visible' states.
 *
 * Props:
 *  stagger       — delay between each child (default: 0.1s)
 *  delayChildren — initial delay before first child (default: 0)
 *  once          — animate once (default: true)
 *  threshold     — intersection threshold (default: 0.05)
 *  className     — extra CSS classes
 */

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function StaggerContainer({
  children,
  stagger = 0.1,
  delayChildren = 0,
  once = true,
  threshold = 0.05,
  className = '',
  style = {},
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem — use inside StaggerContainer.
 * Animates with the parent's stagger timing.
 */
export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  )
}
