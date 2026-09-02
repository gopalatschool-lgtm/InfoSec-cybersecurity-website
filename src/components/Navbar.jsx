import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../data/config'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/events', label: 'Events' },
  { to: '/resources', label: 'Resources' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on route change / resize back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="navbar-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M12 3.5 19.5 6.6v4.9c0 4.7-2.9 8.4-7.5 9.8-4.6-1.4-7.5-5.1-7.5-9.8V6.6L12 3.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 12.3l2 2 4-4.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          INFOSEC
        </NavLink>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="navbar-link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          {siteConfig.joinUrl ? (
            <a href={siteConfig.joinUrl} className="navbar-cta" target="_blank" rel="noreferrer">
              Join InfoSec
            </a>
          ) : (
            <span className="navbar-cta navbar-cta--pending" title="Signup link coming soon">
              Join InfoSec
            </span>
          )}
        </div>

        <button
          className={`navbar-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile${open ? ' is-open' : ''}`}>
        <nav className="navbar-mobile-links" aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="navbar-mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        {siteConfig.joinUrl ? (
          <a href={siteConfig.joinUrl} className="navbar-cta" target="_blank" rel="noreferrer">
            Join InfoSec
          </a>
        ) : (
          <span className="navbar-cta navbar-cta--pending">Join InfoSec</span>
        )}
      </div>
    </header>
  )
}
