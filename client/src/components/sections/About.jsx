import { motion } from 'framer-motion'
import FadeIn from '../animations/FadeIn'
import SectionTitle from '../ui/SectionTitle'

const focuses = [
  { label: 'Frontend Development', icon: '🎨' },
  { label: 'Flask Backend Development', icon: '⚙️' },
  { label: 'DSA & Problem Solving', icon: '🧩' },
  { label: 'AI Exploration', icon: '🤖' },
  { label: 'Building Real Projects', icon: '🚀' },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom max-w-6xl mx-auto">
        <SectionTitle
          label="About"
          title="Who I Am"
          center={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeIn direction="left">
            <div className="space-y-10">
              <div className="space-y-5 text-slate-400 text-base leading-relaxed">
                <p>
                  I am a Computer Science Engineering student with a strong interest in
                  frontend development, full stack applications, artificial intelligence
                  and problem solving.
                </p>
                <p>
                  I enjoy building clean and modern web applications while continuously
                  improving my understanding of data structures, algorithms and scalable
                  software systems.
                </p>
                <p>
                  My long-term goal is to become a high-impact software engineer and
                  eventually build technology products that solve meaningful real-world
                  problems.
                </p>

                <blockquote
                  className="border-l-2 pl-4 py-1 text-slate-500 italic text-sm"
                  style={{ borderColor: '#00f5ff' }}
                >
                  "Consistency compounds harder than talent."
                </blockquote>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: '2+', label: 'Projects Built' },
                  { value: '50+', label: 'LeetCode Days' },
                  { value: '2026', label: 'Currently' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div
                      className="text-2xl font-display font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: 'linear-gradient(135deg, #00f5ff, #a855f7)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="self-center rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="/profile.png"
                alt="Yusuf John"
                className="w-full h-96 object-cover sm:h-[520px]"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-16 rounded-2xl p-6"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h3 className="text-white font-semibold mb-6 text-sm font-mono tracking-widest uppercase text-cyan-400">
              Currently Focused On
            </h3>
            <div className="space-y-3">
              {focuses.map((f, i) => (
                <motion.div
                  key={f.label}
                  className="flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                  whileHover={{ background: 'rgba(0,245,255,0.05)', x: 4 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="text-lg">{f.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">{f.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs text-slate-500 leading-relaxed">
                Open to internship opportunities and collaborative projects.
                Reach out at{' '}
                <a
                  href="mailto:yusufjohn252007@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  yusufjohn252007@gmail.com
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
