import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 78
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <nav className="nav">
        <a className="logo" href="#top" onClick={(e) => go(e, 'top')} aria-label="Home">
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-meta">
            <span className="logo-name">JAY_PITRODA</span>
            <span className="logo-role">GEN AI // DEV</span>
          </span>
        </a>

        <ul className={open ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((l, i) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
                <span className="nav-idx">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-cta" href={profile.resume} download="Jay_Pitroda_Resume.pdf">
          DOWNLOAD_CV
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
