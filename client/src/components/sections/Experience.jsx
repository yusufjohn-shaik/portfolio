import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <SectionTitle
          label="Experience"
          title="What I've Done"
          subtitle="Hackathons, self-directed projects and ongoing growth."
          center={false}
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-semibold text-base">{exp.role}</h3>
                  <p className="text-sm mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 font-mono">{exp.duration}</span>
                  <p className="text-xs text-slate-600 mt-0.5">{exp.location}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

              <ul className="space-y-2 mb-5">
                {exp.responsibilities.map((r, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-500">
                    <span className="text-cyan-500 mt-0.5 flex-shrink-0">→</span>
                    {r}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techStack.map(tech => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94a3b8',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
