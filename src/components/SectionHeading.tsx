export default function SectionHeading({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="section-head">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" />
    </div>
  )
}
