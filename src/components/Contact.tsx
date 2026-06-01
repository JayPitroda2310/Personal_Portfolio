import { profile } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeading tag="// 05" title="OPEN_CHANNEL" />

      <Reveal className="contact-wrap">
        <h3 className="contact-cta">
          Let's build
          <br />
          <span className="accent">something intelligent.</span>
        </h3>
        <p>Open to internships, full-time roles and freelance. I respond within 24 hours.</p>

        <a className="btn btn-solid btn-lg" href={`mailto:${profile.email}`}>
          <span className="btn-label">{profile.email}</span>
          <span className="btn-arrow">→</span>
        </a>

        <ul className="contact-social">
          <li><a href={`mailto:${profile.email}`}>EMAIL</a></li>
          <li><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li>
          <li><a href="#" aria-label="LinkedIn">LINKEDIN</a></li>
          <li><a href="#" aria-label="GitHub">GITHUB</a></li>
        </ul>
      </Reveal>
    </section>
  )
}
