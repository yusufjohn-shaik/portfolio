import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'

const profiles = [
  {
    id: 'github',
    label: 'GitHub',
    username: 'yusufjohn-shaik',
    url: 'https://github.com/yusufjohn-shaik',
    icon: FaGithub,
    color: '#ffffff',
    description: 'Source code, projects and contributions.',
    stats: [
      { label: 'Repositories', value: 'Public' },
      { label: 'Projects', value: '2+' },
    ],
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    username: 'shaikyusufjohn',
    url: 'https://leetcode.com/u/shaikyusufjohn/',
    icon: SiLeetcode,
    color: '#ffa116',
    description: 'DSA practice and problem solving consistency.',
    stats: [
      { label: '50 Days Badge', value: '2026' },
      { label: 'Focus', value: 'Daily' },
    ],
  },
]

export default function CodingProfiles() {
  return (
    <section id="coding" className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <SectionTitle
          label="Coding"
          title="Coding Profiles"
          subtitle="Where I practice, build and track progress."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {profiles.map((profile, i) => {
            const Icon = profile.icon
            return (
              <motion.a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl p-6 transition-all duration-300 group"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                whileHover={{
                  y: -4,
                  borderColor: `${profile.color}30`,
                  background: `${profile.color}06`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${profile.color}15`,
                      border: `1px solid ${profile.color}30`,
                    }}
                  >
                    <Icon size={20} color={profile.color} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{profile.label}</h3>
                    <p className="text-xs text-slate-500 font-mono">@{profile.username}</p>
                  </div>
                  <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors text-xs">↗</span>
                </div>

                <p className="text-slate-500 text-sm mb-4">{profile.description}</p>

                <div className="flex gap-4">
                  {profile.stats.map(stat => (
                    <div key={stat.label}>
                      <div className="text-sm font-semibold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
