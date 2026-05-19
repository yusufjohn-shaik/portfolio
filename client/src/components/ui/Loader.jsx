import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo / Monogram */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(168,85,247,0.15))', border: '1px solid rgba(0,245,255,0.3)' }}>
            <span className="text-3xl font-display font-bold gradient-text">YJ</span>
          </div>
          {/* Spinning ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ border: '2px solid transparent', borderTopColor: '#00f5ff', borderRightColor: 'rgba(0,245,255,0.3)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #00f5ff, #a855f7)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        <motion.p
          className="mt-4 text-xs font-mono text-slate-500 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}
