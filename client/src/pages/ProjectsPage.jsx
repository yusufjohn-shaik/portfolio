import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProjectCard from '../components/cards/ProjectCard'
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer'
import FadeIn from '../components/animations/FadeIn'
import { projects, projectCategories } from '../data/projects'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Projects | Shaik Yusuf John</title>
        <meta name="description" content="Projects built by Shaik Yusuf John." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-12">
            <h1 className="text-4xl font-display font-bold text-white mb-3">Projects</h1>
            <p className="text-slate-500">Things I've built. More on GitHub.</p>
          </FadeIn>

          {/* Filter */}
          <FadeIn className="flex flex-wrap gap-3 mb-10">
            {projectCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: activeCategory === cat ? 'rgba(0,245,255,0.12)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${activeCategory === cat ? 'rgba(0,245,255,0.4)' : 'rgba(255,255,255,0.07)'}`,
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

          <FadeIn className="mt-10 text-center">
            <a
              href="https://github.com/yusufjohn-shaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              More on GitHub →
            </a>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  )
}
