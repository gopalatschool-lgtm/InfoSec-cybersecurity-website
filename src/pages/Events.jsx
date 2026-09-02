import SectionHeading from '../components/SectionHeading'
import EventCard from '../components/EventCard'
import { events } from '../data/events'
import './Events.css'

export default function Events() {
  return (
    <div className="events-page">
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Events"
            title="Upcoming events"
            description="Meeting times, workshops, and competitions will be posted here as they're scheduled."
          />

          {events.length === 0 ? (
            <div className="events-empty">
              <div className="events-empty-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3.5" y="5" width="17" height="15" rx="2" />
                  <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Events are coming soon.</h3>
              <p>Check back here once InfoSec meeting times and events are confirmed.</p>
            </div>
          ) : (
            <div className="events-list">
              {events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
