import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useScroll } from '../../hooks/useScroll'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { scrollY, scrollDirection, isAtTop } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isHidden = scrollDirection === 'down' && scrollY > 100

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: isAtTop
            ? 'transparent'
            : 'rgba(3, 7, 18, 0.85)',
          backdropFilter: isAtTop ? 'none' : 'blur(16px)',
          borderBottom: isAtTop ? 'none' : '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-mono"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(168,85,247,0.2))',
                border: '1px solid rgba(0,245,255,0.3)',
                color: '#00f5ff',
              }}
            >
              YJ
            </div>
            <span className="font-display font-semibold text-white text-sm hidden sm:block">
              Yusuf John
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={pathname === '/' ? link.href : `/${link.href}`}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Resume button + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{
                border: '1px solid rgba(0,245,255,0.3)',
                color: '#00f5ff',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,245,255,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              Resume
            </a>

            <button
              className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(3,7,18,0.95)', backdropFilter: 'blur(20px)' }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-20 left-6 right-6 rounded-2xl p-6 flex flex-col gap-2"
              style={{ background: 'rgba(10,15,30,0.98)', border: '1px solid rgba(255,255,255,0.08)' }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 font-medium"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="border-t border-white/5 mt-2 pt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 px-4 rounded-xl text-sm font-semibold text-cyan-400"
                  style={{ border: '1px solid rgba(0,245,255,0.3)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  View Resume
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
