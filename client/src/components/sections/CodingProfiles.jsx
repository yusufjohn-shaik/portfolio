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
    description: 'Open source projects, repositories, and daily commits.',
    stats: [
      { label: 'Activity', value: 'Active' },
      { label: 'Focus', value: 'Full Stack & AI' },
    ],
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    username: 'shaikyusufjohn',
    url: 'https://leetcode.com/u/shaikyusufjohn/',
    icon: SiLeetcode,
    color: '#ffa116',
    description: 'Data Structures, Algorithms, and consistent problem solving.',
    stats: [
      { label: 'Badge', value: '50 Days 2026' },
      { label: 'Routine', value: 'Daily' },
    ],
  },
]

export default function CodingProfiles() {
  return (
    <section id="coding" className="section-padding">
      <div className="container-custom max-w-5xl mx-auto">
        <SectionTitle
          label="Activity & Profiles"
          title="Code & Problem Solving"
          subtitle="Where I commit code, solve algorithms, and maintain daily discipline."
        />

        {/* Profile Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
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
                  borderColor: `${profile.color}40`,
                  background: 'rgba(255,255,255,0.04)',
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
                  <span className="ml-auto text-slate-600 group-hover:text-slate-300 transition-colors text-xs font-mono">
                    View profile ↗
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{profile.description}</p>

                <div className="flex gap-6 pt-4 border-t border-white/[0.06]">
                  {profile.stats.map(stat => (
                    <div key={stat.label}>
                      <div className="text-sm font-semibold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Live Stat Badges */}
        <FadeIn delay={0.2}>
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <h4 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-6">
              Live Activity Widgets
            </h4>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="flex justify-center p-3 rounded-xl bg-black/20 border border-white/5">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=yusufjohn-shaik&show_icons=true&theme=transparent&hide_border=true&title_color=00f5ff&icon_color=a855f7&text_color=94a3b8&bg_color=00000000"
                  alt="GitHub Stats"
                  className="max-w-full h-auto max-h-48 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center p-3 rounded-xl bg-black/20 border border-white/5">
                <img
                  src="https://leetcard.jacoblin.cool/shaikyusufjohn?theme=dark&font=Nunito&ext=heatmap&border=0&radius=12"
                  alt="LeetCode Stats"
                  className="max-w-full h-auto max-h-48 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
