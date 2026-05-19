import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FadeIn from '../components/animations/FadeIn'

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Shaik Yusuf John</title>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12">
            <h1 className="text-4xl font-display font-bold text-white mb-3">Blog</h1>
            <p className="text-slate-500">Writing about things I learn while building.</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl p-12 text-center"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px dashed rgba(255,255,255,0.08)',
              }}
            >
              <div className="text-4xl mb-4">📝</div>
              <h2 className="text-white font-semibold mb-2">Nothing here yet</h2>
              <p className="text-slate-500 text-sm max-w-sm mx-auto">
                Planning to write about React, Flask, DSA and things I discover
                while working on projects.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  )
}
