import { motion } from 'framer-motion'
import { clsx } from '../../utils/helpers'

/**
 * Button — reusable animated button component.
 *
 * variant: 'primary' | 'secondary' | 'ghost' | 'danger'
 * size:    'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  href,
  target,
  type = 'button',
  icon,
  iconRight,
  loading = false,
  ...props
}) {
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all duration-200',
  }

  const classes = clsx(
    'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer select-none',
    sizes[size],
    variants[variant],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      {loading ? (
        <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
      ) : (
        icon && <span>{icon}</span>
      )}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
