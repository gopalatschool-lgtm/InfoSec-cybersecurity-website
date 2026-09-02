import './FeatureCard.css'

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      {icon && (
        <div className="feature-card-icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-desc">{description}</p>
    </div>
  )
}
