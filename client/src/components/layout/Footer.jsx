import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { socials } from '../../data/socials'

const iconMap = { FaGithub, FaEnvelope, SiLeetcode }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t py-10 px-6"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#030712' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-slate-500">
            © {year} Shaik Yusuf John. Built with React & Flask.
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Consistency compounds harder than talent.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socials.map(s => {
            const Icon = iconMap[s.icon]
            return (
              <a
                key={s.id}
                href={s.url}
                target={s.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-slate-500 hover:text-white transition-colors duration-200"
              >
                {Icon && <Icon size={17} />}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
