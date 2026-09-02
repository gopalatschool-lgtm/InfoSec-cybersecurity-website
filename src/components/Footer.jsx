import { Link } from 'react-router-dom'
import { siteConfig } from '../data/config'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">INFOSEC</span>
          <p className="footer-tagline">UNC Greensboro's cybersecurity student club.</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/events">Events</Link>
          <Link to="/resources">Resources</Link>
        </nav>

        <div className="footer-contact">
          <span className="footer-label">Contact</span>
          {siteConfig.contactEmail ? (
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          ) : (
            <span className="footer-pending">Contact info coming soon</span>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} InfoSec at UNC Greensboro. Student organization.</p>
      </div>
    </footer>
  )
}
