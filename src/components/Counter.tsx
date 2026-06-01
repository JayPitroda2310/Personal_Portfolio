import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

/** Counts up to `value` once scrolled into view. */
export default function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.6 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1100
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="counter">
      {n.toLocaleString()}
      {suffix}
    </span>
  )
}
