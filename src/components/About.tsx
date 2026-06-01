import { useEffect, useState } from 'react'
import { about, profile } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const pad = (n: number) => String(n).padStart(2, '0')

export default function About() {
  const [uptime, setUptime] = useState('00:00:00')
  useEffect(() => {
    const start = performance.now()
    const id = window.setInterval(() => {
      const s = Math.floor((performance.now() - start) / 1000)
      setUptime(`${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`)
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="about" className="section">
      <SectionHeading tag="// 01" title="ABOUT_THE_DEV" />

      <div className="about-wrap">
        <Reveal className="about-text">
          <p className="lead">
            I'm <strong>{profile.fullName}</strong> — {about.lead.replace(/^I'm Jay — /, '')}
          </p>
          <p>{about.body}</p>

          <div className="about-meta">
            {about.facts.map((f) => (
              <div key={f.k}>
                <span className="k">{f.k}</span>
                <span className={f.highlight ? 'v ok' : 'v'}>{f.v}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-panel" delay={120}>
          <div className="panel-head">
            <span>ID_CARD</span>
            <span className="ok">●</span>
          </div>
          <div className="panel-body">
            <div className="avatar-glyph">{profile.initials}</div>
            <div className="panel-rows">
              <div><span className="pk">NAME</span><span className="pv">{profile.fullName}</span></div>
              <div><span className="pk">ROLE</span><span className="pv">Gen AI Developer</span></div>
              <div><span className="pk">BASE</span><span className="pv">Vadodara, IN</span></div>
              <div><span className="pk">UPTIME</span><span className="pv">{uptime}</span></div>
              <div>
                <span className="pk">SIGNAL</span>
                <span className="signal"><i /><i /><i /><i /><i /></span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
