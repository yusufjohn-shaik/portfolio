import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl font-display font-bold text-white/10 mb-4 select-none">404</p>
          <h1 className="text-2xl font-display font-bold text-white mb-3">Page not found</h1>
          <p className="text-slate-500 text-sm mb-8">This page doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-dark-900"
            style={{ background: 'linear-gradient(135deg, #00f5ff, #a855f7)' }}
          >
            Go Home
          </Link>
        </motion.div>
      </main>
    </>
  )
}
