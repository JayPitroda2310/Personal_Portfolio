import { experience } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading tag="// 02" title="CAREER_LOG" />

      <ol className="timeline">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.role} className="tl-item" delay={i * 70}>
            <span className="tl-date">{item.date}</span>
            <div className="tl-body">
              <h3>
                {item.role}
                <span className="tl-org">{item.org}</span>
              </h3>
              <p>{item.blurb}</p>
              <div className="tl-tags">
                {item.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
