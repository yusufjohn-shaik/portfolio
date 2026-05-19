import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDev, FaEnvelope, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { socials } from '../../data/socials'

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaDev,
  FaEnvelope,
  FaXTwitter: FaTwitter,
  SiLeetcode,
}

export default function SocialIcons({ size = 20, className = '', gap = 4, showLabel = false }) {
  return (
    <div className={`flex items-center gap-${gap} ${className}`}>
      {socials.map((social, i) => {
        const Icon = iconMap[social.icon]
        return (
          <motion.a
            key={social.id}
            href={social.url}
            target={social.url.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className="flex items-center gap-2 text-slate-400 transition-colors duration-200"
            style={{ '--hover-color': social.color }}
            whileHover={{ scale: 1.15, color: social.color }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {Icon && <Icon size={size} />}
            {showLabel && <span className="text-sm">{social.label}</span>}
          </motion.a>
        )
      })}
    </div>
  )
}
