import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer'
import ProjectCard from '../cards/ProjectCard'
import { projects, projectCategories } from '../../data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom max-w-6xl mx-auto">
        <SectionTitle
          label="Projects"
          title="Things I've Built"
          subtitle="Real projects I've worked on. More on GitHub."
        />

        {/* Filter tabs */}
        <FadeIn className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === cat
                  ? 'rgba(0,245,255,0.12)'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeCategory === cat
                  ? 'rgba(0,245,255,0.4)'
                  : 'rgba(255,255,255,0.07)'}`,
                color: activeCategory === cat ? '#00f5ff' : '#94a3b8',
              }}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6" stagger={0.1}>
          {filtered.map(project => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* GitHub CTA */}
        <FadeIn className="text-center mt-12">
          <a
            href="https://github.com/yusufjohn-shaik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 font-medium"
          >
            More projects on GitHub →
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
