import { motion } from 'framer-motion'

export default function SkillCard({ skill }) {
  return (
    <motion.div
      className="rounded-xl p-4"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden bg-white/5">
        <motion.div
          className="h-full rounded-full"
          style={{ background: skill.color || '#00f5ff' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}
