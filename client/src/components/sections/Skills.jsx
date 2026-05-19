import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const active = skillCategories.find(c => c.id === activeCategory) || skillCategories[0]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom max-w-6xl mx-auto">
        <SectionTitle
          label="Skills"
          title="What I Work With"
          subtitle="Technologies and tools I use to build projects."
        />

        {/* Category tabs */}
        <FadeIn className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === cat.id
                  ? 'rgba(0,245,255,0.12)'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeCategory === cat.id
                  ? 'rgba(0,245,255,0.4)'
                  : 'rgba(255,255,255,0.07)'}`,
                color: activeCategory === cat.id ? '#00f5ff' : '#94a3b8',
              }}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </FadeIn>

        {/* Skills grid */}
        <StaggerContainer key={activeCategory} stagger={0.06} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {active.skills.map(skill => (
            <StaggerItem key={skill.name}>
              <div
                className="rounded-xl p-4 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                  <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 rounded-full overflow-hidden bg-white/5">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: skill.color || '#00f5ff' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
