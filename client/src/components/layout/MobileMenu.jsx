import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(3,7,18,0.95)', backdropFilter: 'blur(20px)' }}
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.nav
            className="absolute top-20 left-6 right-6 rounded-2xl p-6 flex flex-col gap-1"
            style={{
              background: 'rgba(10,15,30,0.98)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            initial={{ y: -20, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="text-slate-300 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 font-medium text-sm"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}

            <div className="mt-3 pt-4 border-t border-white/5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block text-center py-3 px-4 rounded-xl text-sm font-semibold text-cyan-400 transition-colors"
                style={{ border: '1px solid rgba(0,245,255,0.3)' }}
              >
                View Resume
              </a>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
