import { profile, stats } from '../data'
import Typewriter from './Typewriter'
import Counter from './Counter'
import Glitch from './Glitch'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <p className="eyebrow">
          <span className="dot-pulse" /> OPEN TO OPPORTUNITIES · SECURE FULL-STACK · UI/UX
        </p>

        <h1 className="hero-title">
          <span className="line">DESIGN ×</span>
          <span className="line">
            <Glitch text="CODE" />
          </span>
        </h1>

        <h2 className="hero-sub">
          <Typewriter words={profile.roles} />
        </h2>

        <p className="hero-desc">{profile.tagline}</p>

        <div className="hero-actions">
          <a className="btn btn-solid" href="#projects" onClick={smooth('projects')}>
            <span className="btn-label">EXPLORE_WORK</span>
            <span className="btn-arrow">→</span>
          </a>
          <a className="btn btn-ghost" href="#contact" onClick={smooth('contact')}>
            <span className="btn-label">START_A_PROJECT</span>
          </a>
        </div>

        <ul className="hero-stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>
                <Counter value={s.value} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  )
}

function smooth(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 78
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
