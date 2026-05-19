import { motion } from 'framer-motion'

export default function StatCard({ value, label, color = '#00f5ff', delay = 0 }) {
  return (
    <motion.div
      className="rounded-xl p-5 text-center"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div
        className="text-3xl font-display font-bold mb-1 bg-clip-text text-transparent"
        style={{ backgroundImage: `linear-gradient(135deg, ${color}, #a855f7)` }}
      >
        {value}
      </div>
      <div className="text-xs text-slate-500">{label}</div>
    </motion.div>
  )
}
