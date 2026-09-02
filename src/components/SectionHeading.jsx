import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading-title">{title}</h2>
      {description && <p className="section-heading-desc">{description}</p>}
    </div>
  )
}
