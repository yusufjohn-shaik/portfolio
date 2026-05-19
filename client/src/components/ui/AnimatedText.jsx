import { TypeAnimation } from 'react-type-animation'

/**
 * AnimatedText — typewriter-style cycling text animation.
 *
 * sequences: array alternating between strings and pause durations (ms)
 *   e.g. ['Full Stack Developer', 1500, 'AI Enthusiast', 1500]
 */
export default function AnimatedText({
  sequences,
  className = '',
  speed = 50,
  deletionSpeed = 30,
  repeat = Infinity,
  cursor = true,
  wrapper = 'span',
}) {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper={wrapper}
      speed={speed}
      deletionSpeed={deletionSpeed}
      repeat={repeat}
      cursor={cursor}
      className={className}
    />
  )
}
