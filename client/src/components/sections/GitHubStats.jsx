import FadeIn from '../animations/FadeIn'

const GITHUB_USERNAME = 'yusufjohn-shaik'

export default function GitHubStats() {
  return (
    <section className="section-padding-sm">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="flex flex-col gap-4 items-center">
          {/* GitHub stats card via readme-stats */}
          <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=00f5ff&icon_color=a855f7&text_color=94a3b8&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full lg:w-1/2 rounded-xl max-h-44 object-contain"
              loading="lazy"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=00f5ff&fire=a855f7&currStreakLabel=00f5ff&sideLabels=94a3b8&dates=475569`}
              alt="GitHub Streak"
              className="w-full lg:w-1/2 rounded-xl max-h-44 object-contain"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
