import './LeadershipCard.css'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function LeadershipCard({ name, role, photo, socials = {} }) {
  const hasSocials = socials.linkedin || socials.github || socials.email

  return (
    <div className="leadership-card">
      <div className="leadership-card-avatar">
        {photo ? (
          <img src={photo} alt={name} />
        ) : (
          <span className="leadership-card-initials">{getInitials(name)}</span>
        )}
      </div>
      <h3 className="leadership-card-name">{name}</h3>
      <p className="leadership-card-role">{role}</p>

      {hasSocials && (
        <div className="leadership-card-socials">
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label={`${name} on LinkedIn`}>
              LinkedIn
            </a>
          )}
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label={`${name} on GitHub`}>
              GitHub
            </a>
          )}
          {socials.email && (
            <a href={`mailto:${socials.email}`} aria-label={`Email ${name}`}>
              Email
            </a>
          )}
        </div>
      )}
    </div>
  )
}
