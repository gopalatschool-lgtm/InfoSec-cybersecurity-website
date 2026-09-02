import './Hero.css'

export default function Hero({ kicker, title, subtitle, message, highlight, actions }) {
  return (
    <section className="hero">
      <div className="hero-network" aria-hidden="true">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <g className="hero-network-lines">
            <line x1="620" y1="90" x2="740" y2="180" />
            <line x1="740" y1="180" x2="700" y2="300" />
            <line x1="620" y1="90" x2="560" y2="200" />
            <line x1="560" y1="200" x2="700" y2="300" />
            <line x1="700" y1="300" x2="660" y2="430" />
            <line x1="560" y1="200" x2="470" y2="260" />
            <line x1="470" y1="260" x2="540" y2="400" />
            <line x1="540" y1="400" x2="660" y2="430" />
            <line x1="740" y1="180" x2="780" y2="330" />
            <line x1="780" y1="330" x2="700" y2="300" />
          </g>
          <g className="hero-network-nodes">
            <circle cx="620" cy="90" r="4" />
            <circle cx="740" cy="180" r="3" />
            <circle cx="700" cy="300" r="4.5" />
            <circle cx="560" cy="200" r="3" />
            <circle cx="660" cy="430" r="3.5" />
            <circle cx="470" cy="260" r="3" />
            <circle cx="540" cy="400" r="4" />
            <circle cx="780" cy="330" r="3" />
          </g>
        </svg>
      </div>

      <div className="container hero-inner">
        {kicker && <span className="hero-kicker">{kicker}</span>}
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {message && <p className="hero-message">{message}</p>}
        {highlight && (
          <div className="hero-highlight">
            <span className="hero-highlight-dot" aria-hidden="true" />
            {highlight}
          </div>
        )}
        {actions && <div className="hero-actions">{actions}</div>}
      </div>
    </section>
  )
}
