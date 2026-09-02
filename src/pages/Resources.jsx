import SectionHeading from '../components/SectionHeading'
import ResourceCard from '../components/ResourceCard'
import { resourceCategories } from '../data/resources'
import './Resources.css'

export default function Resources() {
  return (
    <div className="resources-page">
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Resources"
            title="Cybersecurity resources"
            description="Curated links for learning, practicing, and exploring cybersecurity. This list will grow as the club finalizes recommendations."
          />

          <div className="resources-categories">
            {resourceCategories.map((category) => (
              <div key={category.id} className="resources-category">
                <div className="resources-category-header">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                {category.resources.length === 0 ? (
                  <div className="resources-category-empty">Resources for this category are coming soon.</div>
                ) : (
                  <div className="resources-category-grid">
                    {category.resources.map((resource) => (
                      <ResourceCard key={resource.title} {...resource} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
