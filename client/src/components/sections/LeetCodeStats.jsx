import FadeIn from '../animations/FadeIn'

const LEETCODE_USERNAME = 'shaikyusufjohn'

export default function LeetCodeStats() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn className="flex justify-center">
          <img
            src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Nunito&ext=heatmap&border=0&radius=12`}
            alt="LeetCode Stats"
            className="max-w-full rounded-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>
    </section>
  )
}
