import './ResourceCard.css'

export default function ResourceCard({ title, url, description }) {
  const content = (
    <>
      <h4 className="resource-card-title">{title}</h4>
      {description && <p className="resource-card-desc">{description}</p>}
    </>
  )

  if (url) {
    return (
      <a className="resource-card resource-card--link" href={url} target="_blank" rel="noreferrer">
        {content}
        <span className="resource-card-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    )
  }

  return <div className="resource-card">{content}</div>
}
