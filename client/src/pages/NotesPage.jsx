import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FadeIn from '../components/animations/FadeIn'

export default function NotesPage() {
  return (
    <>
      <Helmet>
        <title>Notes | Shaik Yusuf John</title>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12">
            <h1 className="text-4xl font-display font-bold text-white mb-3">Notes</h1>
            <p className="text-slate-500">Rough notes and learning logs — coming soon.</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl p-12 text-center"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px dashed rgba(255,255,255,0.08)',
              }}
            >
              <div className="text-4xl mb-4">🗒️</div>
              <h2 className="text-white font-semibold mb-2">Coming soon</h2>
              <p className="text-slate-500 text-sm">
                DSA notes, problem patterns and learning references.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  )
}
