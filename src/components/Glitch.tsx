import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useParallax'

/** Periodically fires an RGB-split glitch on the wrapped text. */
export default function Glitch({ text }: { text: string }) {
  const reduced = usePrefersReducedMotion()
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      setOn(true)
      window.setTimeout(() => setOn(false), 320)
    }, 4200)
    return () => window.clearInterval(id)
  }, [reduced])

  return (
    <span className={`accent glitch ${on ? 'on' : ''}`} data-text={text}>
      {text}
    </span>
  )
}
