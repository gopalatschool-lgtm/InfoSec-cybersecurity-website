import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import './About.css'

const goals = [
  { title: 'Learn cybersecurity', description: 'Build a working understanding of security concepts together, regardless of starting point.' },
  { title: 'Connect with other students', description: 'Meet other students who are curious about security and want to learn alongside others.' },
  { title: 'Explore CTF challenges', description: 'Practice with capture-the-flag exercises in a low-pressure, collaborative setting.' },
  { title: 'Build technical skills together', description: 'Work through tools and techniques as a group rather than alone.' },
  { title: 'Have career discussions', description: 'Talk through certifications, internships, and what a security career can look like.' },
  
]

export default function About() {
  return (
    <div className="about-page">
      <section className="section about-intro">
        <div className="container about-intro-grid">
          <SectionHeading eyebrow="About InfoSec" title="A returning cybersecurity club at UNCG" />
          <div className="about-intro-text">
            <p>
              InfoSec is returning as a cybersecurity student club at UNC Greensboro. We welcome anyone interested
              in cybersecurity, and no prior experience is required.
            </p>
            <p>
              The club exists to give students a space to learn about cybersecurity, connect with other students,
              explore CTF challenges, build technical skills together, participate in cybersecurity competitions,
              have career discussions, and explore cybersecurity research.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-goals">
        <div className="container">
          <SectionHeading eyebrow="Goals" title="What the club aims to do" />
          <div className="about-goals-grid">
            {goals.map((goal) => (
              <FeatureCard key={goal.title} title={goal.title} description={goal.description} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
