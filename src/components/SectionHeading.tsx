export default function SectionHeading({ tag, title }: { tag: string; title: string }) {
  const num = tag.replace(/\D/g, '') || tag
  return (
    <div className="section-head">
      <span className="section-stack">
        <span className="section-num" aria-hidden="true">
          {num}
        </span>
        <h2 className="section-title">{title}</h2>
      </span>
      <span className="section-rule" />
    </div>
  )
}
