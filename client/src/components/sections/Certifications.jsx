import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { certifications, upcomingCerts } from '../../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom max-w-5xl mx-auto">
        <SectionTitle
          label="Certifications"
          title="Learning & Credentials"
          subtitle="Achievements and ongoing learning milestones."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="rounded-xl p-5"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3, borderColor: `${cert.color}30` }}
            >
              <div
                className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center text-xs font-bold font-mono"
                style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
              >
                {cert.issuer.charAt(0)}
              </div>
              <h3 className="text-white text-sm font-semibold mb-1 leading-snug">{cert.title}</h3>
              <p className="text-xs text-slate-500 mb-1">{cert.issuer}</p>
              <p className="text-xs text-slate-600 mb-3 font-mono">{cert.date}</p>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{cert.description}</p>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  View <FiExternalLink size={11} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Upcoming goals */}
        <div
          className="rounded-xl p-6"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <h3 className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-4">Future Goals</h3>
          <div className="flex flex-wrap gap-3">
            {upcomingCerts.map(cert => (
              <span
                key={cert}
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: 'rgba(168,85,247,0.08)',
                  border: '1px solid rgba(168,85,247,0.2)',
                  color: '#c084fc',
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
