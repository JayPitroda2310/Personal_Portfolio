import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useParallax'

const LINES = [
  'INITIALISING RENDER CORE ........... OK',
  'LOADING MODULES [ui/auth/api] ...... OK',
  'CALIBRATING DESIGN PIPELINE ........ <span class="ok">OK</span>',
  'MOUNTING PORTFOLIO /jay_pitroda .... OK',
  'ESTABLISHING UPLINK ................ <span class="ok">SECURE</span>',
  'SYSTEM READY.',
]

/** Terminal boot/preloader that types a log + fills a progress bar, then hides. */
export default function Boot() {
  const reduced = usePrefersReducedMotion()
  const [log, setLog] = useState('')
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reduced) {
      setDone(true)
      return
    }
    let i = 0
    const typeTimer = window.setInterval(() => {
      setLog((prev) => prev + (i ? '\n' : '') + '> ' + LINES[i])
      i += 1
      if (i >= LINES.length) window.clearInterval(typeTimer)
    }, 230)

    let p = 0
    const barTimer = window.setInterval(() => {
      p = Math.min(100, p + Math.random() * 18 + 6)
      setPct(p)
      if (p >= 100) {
        window.clearInterval(barTimer)
        window.setTimeout(() => setDone(true), 420)
      }
    }, 240)

    return () => {
      window.clearInterval(typeTimer)
      window.clearInterval(barTimer)
    }
  }, [reduced])

  return (
    <div className={done ? 'boot done' : 'boot'} aria-hidden="true">
      <div className="boot-inner">
        <pre className="boot-log" dangerouslySetInnerHTML={{ __html: log }} />
        <div className="boot-bar">
          <span style={{ width: `${pct}%` }} />
        </div>
        <div className="boot-pct">{Math.floor(pct)}%</div>
      </div>
    </div>
  )
}
