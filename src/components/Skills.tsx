import { skills } from '../data'
import { useInView } from '../hooks/useInView'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  return (
    <section id="skills" className="section">
      <SectionHeading tag="// 04" title="CAPABILITIES" />

      <div className="skills-grid" ref={ref}>
        {skills.map((s, i) => (
          <div className="skill" key={s.name}>
            <span className="skill-name">{s.name}</span>
            <span className="skill-bar">
              <i style={{ width: inView ? `${s.level}%` : '0%', transitionDelay: `${i * 60}ms` }} />
            </span>
            <span className="skill-pct">{s.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
