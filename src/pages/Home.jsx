import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import LeadershipCard from '../components/LeadershipCard'
import EventCard from '../components/EventCard'
import { leadership } from '../data/leadership'
import { events } from '../data/events'
import { siteConfig } from '../data/config'
import './Home.css'

const whatWeDo = [
  {
    title: 'Learn cybersecurity',
    description: 'Work through foundational security concepts together, no matter where you\u2019re starting from.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 6.5 12 3l8 3.5v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10v-6Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Explore CTFs',
    description: 'Try capture-the-flag challenges as a group and pick up practical, hands-on skills.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 21V4m0 0h11l-2 3.5L16 11H5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Build technical skills',
    description: 'Get comfortable with the tools and workflows security practitioners use every day.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14.5 3.5 20.5 9.5l-9 9H5.5v-6l9-9Z" strokeLinejoin="round" />
        <path d="M13 5l6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Compete',
    description: 'Take part in cybersecurity competitions as a club, from local events to larger circuits.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Career discussions',
    description: 'Talk through certifications, internships, and career paths with people further along theirs.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 7h16v11H4V7Z" strokeLinejoin="round" />
        <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Explore research',
    description: 'Dig into current security research and share what you find with the rest of the club.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="M20 20l-4.8-4.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      <Hero
        kicker="UNCG Student Organization"
        title="INFOSEC"
        subtitle="Explore. Learn. Build. Secure."
        message="A cybersecurity student club where students can learn, build skills, explore CTFs, compete, and connect."
        highlight="No prior experience required."
        actions={
          <>
            {siteConfig.joinUrl ? (
              <a href={siteConfig.joinUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                Join InfoSec
              </a>
            ) : (
              <span className="btn btn-pending">Join InfoSec — link coming soon</span>
            )}
            <Link to="/about" className="btn btn-secondary">
              Learn about the club
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="A club built around doing, not just watching"
            description="Every InfoSec activity is meant to be hands-on. Here's what you can expect to spend time on."
          />
          <div className="home-grid">
            {whatWeDo.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section home-beginner">
        <div className="container home-beginner-inner">
          <div>
            <SectionHeading
              eyebrow="Start here"
              title="New to cybersecurity? Good — this club is for you."
              description="You don't need any prior coursework, certifications, or experience to get involved. Most of what we do is designed to meet people where they are and build up from there together."
            />
          </div>
          <div className="home-beginner-card">
            <p className="home-beginner-line">No prior experience required.</p>
            <p className="home-beginner-sub">Bring curiosity. We'll help with the rest.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Run by students, for students"
            description="Meet the current InfoSec board."
          />
          <div className="home-leadership-grid">
            {leadership.map((member) => (
              <LeadershipCard key={member.id} {...member} />
            ))}
          </div>
          <Link to="/leadership" className="home-link-more">
            View full leadership page
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Events" title="Upcoming events" />
          {events.length === 0 ? (
            <div className="home-events-empty">
              <p>Events are coming soon.</p>
              <Link to="/events" className="home-link-more">
                Check the events page
              </Link>
            </div>
          ) : (
            <div className="home-events-list">
              {events.slice(0, 3).map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section home-cta">
        <div className="container home-cta-inner">
          <h2>Ready to get involved?</h2>
          <p>Come to a meeting, ask questions, or just say hi. Everyone is welcome, no matter your background.</p>
          <div className="home-cta-actions">
            {siteConfig.joinUrl ? (
              <a href={siteConfig.joinUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                Join InfoSec
              </a>
            ) : (
              <span className="btn btn-pending">Join InfoSec — link coming soon</span>
            )}
            <Link to="/resources" className="btn btn-secondary">
              Browse resources
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
