// Shared Framer Motion animation variants

export const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

export const slideIn = (direction = 'left', delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
    y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

export const textReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
  },
}

export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 300, damping: 20 },
}

export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.4)' },
  hover: {
    y: -6,
    boxShadow: '0 12px 48px rgba(0,0,0,0.6)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}
