import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'coding', label: 'Coding' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          title={label}
          className="group flex items-center gap-2 justify-end"
        >
          <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100 duration-200">
            {label}
          </span>
          <motion.div
            className="rounded-full transition-all duration-300"
            animate={{
              width: active === id ? 20 : 6,
              height: 6,
              backgroundColor: active === id ? '#00f5ff' : 'rgba(255,255,255,0.2)',
            }}
          />
        </a>
      ))}
    </div>
  )
}
