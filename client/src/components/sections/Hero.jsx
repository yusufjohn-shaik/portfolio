import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiArrowDown } from 'react-icons/fi'
import AnimatedText from '../ui/AnimatedText'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,245,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: '#00f5ff' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: '#a855f7' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-8"
          style={{
            background: 'rgba(0,245,255,0.07)',
            border: '1px solid rgba(0,245,255,0.2)',
            color: '#00f5ff',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          CSE Student · Exploring technologies
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Shaik{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #00f5ff, #a855f7)' }}
          >
            Yusuf John
          </span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          className="text-xl sm:text-2xl text-slate-400 mb-6 font-medium h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatedText
            sequences={[
              'Frontend Developer', 2000,
              'Flask Backend Developer', 2000,
              'DSA Practitioner', 2000,
              'AI Explorer', 2000,
            ]}
            className="text-cyan-400"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-slate-500 text-sm font-mono tracking-wide mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Consistency compounds harder than talent.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Computer Science Engineering student focused on frontend development,
          DSA and building real-world full stack applications.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
        >
          {[
            { href: 'https://github.com/yusufjohn-shaik', icon: <FaGithub size={20} />, label: 'GitHub' },
            { href: 'https://leetcode.com/u/shaikyusufjohn/', icon: <SiLeetcode size={20} />, label: 'LeetCode' },
            { href: 'mailto:yusufjohn252007@gmail.com', icon: <FaEnvelope size={20} />, label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <FiArrowDown size={14} />
      </motion.a>
    </section>
  )
}
