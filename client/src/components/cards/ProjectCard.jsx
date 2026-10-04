import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi'
import ProjectDetails from '../sections/ProjectDetails'

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <motion.div
        className="rounded-2xl p-6 h-full flex flex-col"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
        whileHover={{ y: -4, borderColor: 'rgba(0,245,255,0.2)' }}
        transition={{ duration: 0.25 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            {project.icon && (
              <span
                className="text-2xl p-2 rounded-xl flex-shrink-0"
                style={{
                  background: `${project.color || '#00f5ff'}15`,
                  border: `1px solid ${project.color || '#00f5ff'}30`,
                }}
              >
                {project.icon}
              </span>
            )}
            <div>
              <h3 className="text-white font-semibold text-base leading-snug">{project.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{project.tagline}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span
              className="text-[11px] px-2 py-0.5 rounded-md font-mono"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#94a3b8',
              }}
            >
              {project.year}
            </span>
            {project.status === 'In Progress' ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                In Progress
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">
                Completed
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#94a3b8',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <FiGithub size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <FiExternalLink size={14} /> Live
            </a>
          )}
          <button
            onClick={() => setShowDetails(true)}
            className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            <FiInfo size={14} /> Details
          </button>
        </div>
      </motion.div>

      {showDetails && (
        <ProjectDetails project={project} onClose={() => setShowDetails(false)} />
      )}
    </>
  )
}
