import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'

export default function Blogs() {
  return (
    <section id="blogs" className="section-padding">
      <div className="container-custom max-w-5xl mx-auto">
        <SectionTitle
          label="Blog"
          title="Writing"
          subtitle="Articles and notes — coming soon."
        />

        <FadeIn>
          <div
            className="rounded-2xl p-12 text-center"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.08)',
            }}
          >
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-white font-semibold mb-2">No posts yet</h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              I plan to write about React, Flask, DSA and things I learn while building projects.
              Check back later.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
