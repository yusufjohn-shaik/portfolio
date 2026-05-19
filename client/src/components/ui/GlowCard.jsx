import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * GlowCard — a card that emits a glow at the cursor position on hover.
 * Inspired by the "spotlight card" effect.
 */
export default function GlowCard({ children, className = '', glowColor = 'rgba(0,245,255,0.15)' }) {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ borderColor: 'rgba(0,245,255,0.2)', y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(250px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  )
}
