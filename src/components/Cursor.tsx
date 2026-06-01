import { useEffect, useRef } from 'react'

/** Custom crosshair cursor: a precise dot + a lagging ring that swells over targets. */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px)`
    }
    const follow = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(follow)
    }
    const hot = () => ring.classList.add('hot')
    const cool = () => ring.classList.remove('hot')

    window.addEventListener('mousemove', onMove)
    follow()
    const targets = document.querySelectorAll('a, button, .btn, .project-card')
    targets.forEach((t) => {
      t.addEventListener('mouseenter', hot)
      t.addEventListener('mouseleave', cool)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach((t) => {
        t.removeEventListener('mouseenter', hot)
        t.removeEventListener('mouseleave', cool)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
