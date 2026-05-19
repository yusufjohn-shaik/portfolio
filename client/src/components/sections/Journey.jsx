import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { journeyItems } from '../../data/journey'

export default function Journey() {
  return (
    <section id="journey" className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <SectionTitle
          label="Journey"
          title="How I Got Here"
          subtitle="Key milestones from where I started to where I am now."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          />

          <div className="space-y-8">
            {journeyItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="flex gap-6 sm:pl-16 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                {/* Icon dot */}
                <div
                  className="absolute left-0 hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-base flex-shrink-0 z-10"
                  style={{
                    background: 'rgba(10,15,30,1)',
                    border: `1px solid ${item.color}40`,
                    boxShadow: `0 0 12px ${item.color}20`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-xl p-5 transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-md flex-shrink-0"
                      style={{
                        background: `${item.color}15`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
