import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useParallax'

const pad = (n: number) => String(n).padStart(2, '0')

/** Fixed HUD overlay: corner brackets, live readouts (clock/fps/frame), ticker. */
export default function HudFrame() {
  const reduced = usePrefersReducedMotion()
  const [clock, setClock] = useState('--:--:--')
  const [frame, setFrame] = useState('0000/0512')
  const [fps, setFps] = useState('--')
  const rafRef = useRef(0)

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setClock(`${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`)
      setFrame(`${String((d.getSeconds() * 8) % 512).padStart(4, '0')}/0512`)
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (reduced) {
      setFps('60')
      return
    }
    let last = performance.now()
    let frames = 0
    const loop = (now: number) => {
      frames += 1
      if (now - last >= 1000) {
        setFps(String(frames))
        frames = 0
        last = now
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [reduced])

  const ticker =
    '◂ JAY PITRODA  ·  SECURE FULL-STACK DEVELOPER  ·  UI/UX × GENERATIVE AI  ·  AUTH · OTP · ESCROW INTEGRITY  ·  OPEN TO OPPORTUNITIES  ·  '

  return (
    <div className="hud-frame" aria-hidden="true">
      <span className="bracket tl" />
      <span className="bracket tr" />
      <span className="bracket bl" />
      <span className="bracket br" />

      <div className="hud-readout hud-left">
        <div className="hud-line"><span className="k">SYS</span><span className="v ok">ONLINE</span></div>
        <div className="hud-line"><span className="k">LAT</span><span className="v">22.3072° N</span></div>
        <div className="hud-line"><span className="k">LNG</span><span className="v">73.1812° E</span></div>
      </div>

      <div className="hud-readout hud-right">
        <div className="hud-line"><span className="k">UTC</span><span className="v">{clock}</span></div>
        <div className="hud-line"><span className="k">FPS</span><span className="v">{fps}</span></div>
        <div className="hud-line"><span className="k">FRM</span><span className="v">{frame}</span></div>
      </div>

      <div className="hud-ticker">
        <span>{ticker.repeat(2)}</span>
      </div>
    </div>
  )
}
