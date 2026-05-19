import { clsx } from '../../utils/helpers'

/**
 * GradientText — renders text with a gradient fill.
 *
 * gradient: 'cyan-purple' | 'cyan-blue' | 'pink-purple' | 'green-cyan' | string (custom Tailwind)
 */
export default function GradientText({
  children,
  gradient = 'cyan-purple',
  className = '',
  as: Tag = 'span',
}) {
  const gradients = {
    'cyan-purple': 'from-cyan-400 via-blue-400 to-purple-400',
    'cyan-blue':   'from-cyan-400 to-blue-500',
    'pink-purple': 'from-pink-400 to-purple-500',
    'green-cyan':  'from-emerald-400 to-cyan-400',
    'gold':        'from-yellow-400 to-orange-400',
  }

  const gradientClass = gradients[gradient] || gradient

  return (
    <Tag
      className={clsx(
        'bg-clip-text text-transparent bg-gradient-to-r',
        gradientClass,
        className
      )}
    >
      {children}
    </Tag>
  )
}
