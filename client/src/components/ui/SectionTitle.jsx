import FadeIn from '../animations/FadeIn'

export default function SectionTitle({ label, title, subtitle, center = true, className = '' }) {
  return (
    <FadeIn direction="up" className={`mb-16 ${center ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 mb-4">
          <span className="w-6 h-px bg-cyan-400" />
          {label}
          <span className="w-6 h-px bg-cyan-400" />
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
