import { motion } from 'framer-motion'
import FadeIn from '../animations/FadeIn'

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center px-6">
        <FadeIn>
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: 'rgba(0,245,255,0.04)',
              border: '1px solid rgba(0,245,255,0.12)',
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #00f5ff, transparent)' }}
            />

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Let's work together
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-base leading-relaxed">
              I'm currently open to internships and collaborative projects.
              If you have something in mind, reach out.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href="mailto:yusufjohn252007@gmail.com"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-dark-900"
                style={{ background: 'linear-gradient(135deg, #00f5ff, #a855f7)' }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Send an Email
              </motion.a>
              <motion.a
                href="https://github.com/yusufjohn-shaik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View GitHub
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
