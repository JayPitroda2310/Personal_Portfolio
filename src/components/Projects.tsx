import { projects } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading tag="// 03" title="SELECTED_WORK" />
      <p className="section-intro">
        Builds across fintech, agri-tech and robotics — where the integrity of the system mattered
        as much as the interface on top of it.
      </p>

      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.id} className="project-card" delay={i * 80}>
            <div className="card-visual" data-art={String(i + 1).padStart(2, '0')} />
            <div className="card-body">
              <div className="card-top">
                <span className="card-idx">{p.id.toUpperCase()}</span>
                <span className="card-type">{p.type.toUpperCase()}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <span className="card-link">{p.meta.toUpperCase()} →</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
