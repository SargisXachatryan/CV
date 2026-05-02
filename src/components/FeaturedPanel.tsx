import type { Project } from '../types'
import '../styles/FeaturedPanel.css'

interface Props {
  project: Project
}

export default function FeaturedPanel({ project }: Props) {
  return (
    <div className="featured">
      <div className="featured-image-wrap">
        <img
          key={project.id}
          src={project.image}
          alt={project.title}
          className="featured-image"
        />
        <div className="featured-overlay" />
      </div>

      {/* Year badge — solid, always readable */}
      <div className="featured-year-badge">
        <span>{project.year}</span>
        {project.tags.map((t) => (
          <span key={t} className="tag-pill">{t}</span>
        ))}
      </div>

      <div className="featured-body">
        <p className="featured-subtitle">{project.subtitle}</p>
        <h2 className="featured-title">{project.title}</h2>
        <p className="featured-desc">{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" className="featured-cta">
            See project <span className="arrow">→</span>
          </a>
        )}
      </div>
    </div>
  )
}
