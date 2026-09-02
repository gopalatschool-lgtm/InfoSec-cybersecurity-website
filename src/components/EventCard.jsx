import './EventCard.css'

function formatDate(iso) {
  if (!iso) return null
  const date = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function EventCard({ title, date, time, location, description, tag }) {
  return (
    <div className="event-card">
      <div className="event-card-date">
        {tag && <span className="event-card-tag">{tag}</span>}
        <span className="event-card-date-text">{formatDate(date)}</span>
        {time && <span className="event-card-time">{time}</span>}
      </div>
      <div className="event-card-body">
        <h3 className="event-card-title">{title}</h3>
        {description && <p className="event-card-desc">{description}</p>}
        {location && <p className="event-card-location">{location}</p>}
      </div>
    </div>
  )
}
