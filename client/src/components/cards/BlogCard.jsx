import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { formatDate, truncate } from '../../utils/helpers'

export default function BlogCard({ blog }) {
  return (
    <motion.a
      href={blog.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl p-5 transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      whileHover={{ y: -3, borderColor: 'rgba(0,245,255,0.2)' }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-1">
          {blog.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded"
              style={{ background: 'rgba(0,245,255,0.08)', color: '#22d3ee', border: '1px solid rgba(0,245,255,0.15)' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <FiExternalLink size={14} className="text-slate-600 flex-shrink-0 mt-0.5" />
      </div>

      <h3 className="text-white font-semibold text-sm leading-snug mb-2">{blog.title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed mb-4">{truncate(blog.excerpt, 120)}</p>

      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>{formatDate(blog.publishedAt)}</span>
        <span>{blog.readTime}</span>
      </div>
    </motion.a>
  )
}
