import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiSend, FiCheckCircle } from 'react-icons/fi'
import { useForm, ValidationError } from '@formspree/react'
import toast from 'react-hot-toast'
import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'

const iconMap = { FaGithub, FaEnvelope, SiLeetcode }

const contactLinks = [
  { label: 'GitHub', value: 'yusufjohn-shaik', url: 'https://github.com/yusufjohn-shaik', icon: 'FaGithub', color: '#ffffff' },
  { label: 'LeetCode', value: 'shaikyusufjohn', url: 'https://leetcode.com/u/shaikyusufjohn/', icon: 'SiLeetcode', color: '#ffa116' },
  { label: 'Email', value: 'yusufjohn252007@gmail.com', url: 'mailto:yusufjohn252007@gmail.com', icon: 'FaEnvelope', color: '#00f5ff' },
]

export default function Contact() {
  const [state, handleSubmit] = useForm('xwlvvpew')

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully!')
    }
  }, [state.succeeded])

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom max-w-5xl mx-auto">
        <SectionTitle
          label="Contact"
          title="Get In Touch"
          subtitle="Open to internships, collaborations and conversations."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <FadeIn direction="left">
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              I am currently looking for internship opportunities and open to
              working on interesting projects. If you want to reach out, feel free
              to use any of the links below or send a message.
            </p>

            <div className="space-y-4">
              {contactLinks.map(link => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = `${link.color}30`)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${link.color}12`, border: `1px solid ${link.color}25` }}
                    >
                      {Icon && <Icon size={16} color={link.color} />}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{link.label}</p>
                      <p className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                        {link.value}
                      </p>
                    </div>
                    <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors">↗</span>
                  </a>
                )
              })}
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn direction="right" delay={0.1}>
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[360px]"
                style={{
                  background: 'rgba(0,245,255,0.03)',
                  border: '1px solid rgba(0,245,255,0.2)',
                }}
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 text-2xl font-bold">
                  <FiCheckCircle size={28} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
                  Thank you for reaching out! Your message was delivered directly to my inbox via Formspree, and I will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-slate-500 mb-2 font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input-field"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-slate-500 mb-2 font-medium">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="input-field"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-slate-500 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What's on your mind?"
                    rows={5}
                    className="input-field resize-none"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(168,85,247,0.15))',
                    border: '1px solid rgba(0,245,255,0.3)',
                    color: '#00f5ff',
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {state.submitting ? (
                    <span className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                  ) : (
                    <FiSend size={15} />
                  )}
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
