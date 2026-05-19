import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiSend } from 'react-icons/fi'
import toast from 'react-hot-toast'
import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'
import { contactApi } from '../../services/contactApi'

const iconMap = { FaGithub, FaEnvelope, SiLeetcode }

const contactLinks = [
  { label: 'GitHub', value: 'yusufjohn-shaik', url: 'https://github.com/yusufjohn-shaik', icon: 'FaGithub', color: '#ffffff' },
  { label: 'LeetCode', value: 'shaikyusufjohn', url: 'https://leetcode.com/u/shaikyusufjohn/', icon: 'SiLeetcode', color: '#ffa116' },
  { label: 'Email', value: 'yusufjohn252007@gmail.com', url: 'mailto:yusufjohn252007@gmail.com', icon: 'FaEnvelope', color: '#00f5ff' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.')
      return
    }
    setLoading(true)
    try {
      await contactApi.sendMessage(form)
      toast.success('Message sent!')
      setForm({ name: '', email: '', message: '' })
    } catch {
      // Fallback — open email client
      window.location.href = `mailto:yusufjohn252007@gmail.com?subject=Message from ${form.name}&body=${form.message}`
      toast.success('Opening your email client...')
    } finally {
      setLoading(false)
    }
  }

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
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-xs text-slate-500 mb-2 font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="input-field"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs text-slate-500 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={5}
                  className="input-field resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(168,85,247,0.15))',
                  border: '1px solid rgba(0,245,255,0.3)',
                  color: '#00f5ff',
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                ) : (
                  <FiSend size={15} />
                )}
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
