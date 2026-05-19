import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FadeIn from '../components/animations/FadeIn'

export default function ResumePage() {
  return (
    <>
      <Helmet>
        <title>Resume | Shaik Yusuf John</title>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-display font-bold text-white mb-2">Resume</h1>
              <p className="text-slate-500 text-sm">Shaik Yusuf John — CSE Student, Frontend Developer</p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-dark-900"
              style={{ background: 'linear-gradient(135deg, #00f5ff, #a855f7)' }}
            >
              Download PDF
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="w-full"
                style={{ height: '80vh', background: '#0a0f1e' }}
              />
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  )
}
