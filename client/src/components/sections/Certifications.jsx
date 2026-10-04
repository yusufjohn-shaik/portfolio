import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom max-w-5xl mx-auto">
        <SectionTitle
          label="Milestones"
          title="Badges & Recognitions"
          subtitle="Key technical milestones and competitive achievements."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="rounded-2xl p-6 flex flex-col justify-between"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3, borderColor: `${cert.color}40` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold font-mono"
                    style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.issuer.charAt(0)}
                  </div>
                  <span className="text-xs text-slate-500 font-mono px-2 py-0.5 rounded bg-white/[0.04]">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-white text-base font-semibold mb-1 leading-snug">{cert.title}</h3>
                <p className="text-xs text-slate-500 mb-3">{cert.issuer}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{cert.description}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags?.map(t => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 rounded text-slate-400 bg-white/[0.04]">
                      {t}
                    </span>
                  ))}
                </div>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors ml-auto font-mono"
                  >
                    View <FiExternalLink size={11} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
