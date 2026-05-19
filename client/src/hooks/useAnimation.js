import { useInView } from 'react-intersection-observer'

export function useAnimation(threshold = 0.1, triggerOnce = true) {
  const { ref, inView } = useInView({ threshold, triggerOnce })
  return { ref, inView }
}

export function useStaggerAnimation(count = 5, baseDelay = 0.1) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const delays = Array.from({ length: count }, (_, i) => i * baseDelay)
  return { ref, inView, delays }
}
