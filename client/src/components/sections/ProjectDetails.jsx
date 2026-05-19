import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectDetails({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(16px)' }}
          onClick={onClose}
        />

        {/* Panel */}
        <motion.div
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6"
          style={{
            background: '#0a0f1e',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-1"
          >
            <FiX size={20} />
          </button>

          <h2 className="text-xl font-display font-bold text-white mb-1 pr-8">{project.title}</h2>
          <p className="text-sm text-slate-500 mb-6">{project.tagline}</p>

          <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.longDescription}</p>

          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-3">Highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-400">
                    <span className="text-cyan-500 mt-0.5">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          {project.techStack && (
            <div className="mb-6">
              <h3 className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-3">Tech Stack</h3>
              <div className="space-y-2">
                {Object.entries(project.techStack).map(([layer, techs]) =>
                  techs.length > 0 ? (
                    <div key={layer} className="flex flex-wrap gap-2 items-center">
                      <span className="text-xs text-slate-600 w-16 capitalize flex-shrink-0">{layer}</span>
                      {techs.map(t => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-md"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: '#94a3b8',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-300 transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <FiGithub size={15} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-cyan-400 transition-colors"
                style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)' }}
              >
                <FiExternalLink size={15} /> Live
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
