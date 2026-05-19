import FadeIn from '../animations/FadeIn'

const LEETCODE_USERNAME = 'shaikyusufjohn'

export default function LeetCodeStats() {
  return (
    <section className="section-padding-sm">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn className="flex justify-center">
          <img
            src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Nunito&ext=heatmap&border=0&radius=12`}
            alt="LeetCode Stats"
            className="max-w-full rounded-xl max-h-60 object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>
    </section>
  )
}
