import { motion } from 'framer-motion'

export default function ExperienceCard({ experience, index = 0 }) {
  const exp = experience
  return (
    <motion.div
      className="rounded-2xl p-6"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-white font-semibold text-sm">{exp.role}</h3>
          <p className="text-xs mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
        </div>
        <span className="text-xs text-slate-500 font-mono">{exp.duration}</span>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{exp.description}</p>
      <div className="flex flex-wrap gap-2">
        {exp.techStack.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded"
            style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
