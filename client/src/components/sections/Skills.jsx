import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom max-w-6xl mx-auto">
        <SectionTitle
          label="Skills & Stack"
          title="Technologies I Build With"
          subtitle="Tools and technologies I use to build real applications and solve problems daily."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <FadeIn key={cat.id} delay={idx * 0.08}>
              <div
                className="h-full rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/30 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl p-2 rounded-xl bg-white/[0.04] border border-white/10">
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-base group-hover:text-cyan-400 transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 mt-5">
                  {cat.skills.map(skill => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: skill.color || '#00f5ff' }}
                      />
                      <span className="text-slate-200">{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-400 bg-white/[0.04]">
                          {skill.tag}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
