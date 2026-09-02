import SectionHeading from '../components/SectionHeading'
import LeadershipCard from '../components/LeadershipCard'
import { leadership } from '../data/leadership'
import './Leadership.css'

export default function Leadership() {
  return (
    <div className="leadership-page">
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Current InfoSec board"
            description="Photos, bios, and social links will be added as they become available."
          />
          <div className="leadership-grid">
            {leadership.map((member) => (
              <LeadershipCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
