import { useState, useMemo } from 'react'
import projectsData from '../data/projects.json'
import type { Project, Tag } from '../types/index'
import FeaturedPanel from '../components/FeaturedPanel'
import GalleryControls from '../components/GalleryControls'
import ProjectThumb from '../components/ProjectThumb'
import '../styles/PortfolioPage.css'

const PROJECTS = projectsData as Project[]
const ALL_TAGS: Tag[] = ['All' as Tag, ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort()]

export default function PortfolioPage() {
  const [activeTag, setActiveTag] = useState<Tag>('All' as Tag)
  const [query, setQuery] = useState('')
  const [featured, setFeatured] = useState<Project>(PROJECTS[0])

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesTag = activeTag === ('All' as Tag) || p.tags.includes(activeTag)
      const matchesQuery =
        query === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      return matchesTag && matchesQuery
    })
  }, [activeTag, query])

  const noResults = filtered.length === 0
  // Keep last known project as background when no results
  const safeFeatured = filtered.find((p) => p.id === featured.id) ?? filtered[0] ?? featured

  return (
    <main className="portfolio-page">
      <FeaturedPanel project={safeFeatured} noResults={noResults} />

      <div className="gallery-lower">
        <GalleryControls
          tags={ALL_TAGS}
          activeTag={activeTag}
          query={query}
          onTagChange={(tag: string) => setActiveTag(tag as Tag)}
          onQueryChange={setQuery}
        />

        <div className="thumbnails">
          {!noResults && filtered.map((project) => (
            <ProjectThumb
              key={project.id}
              project={project}
              isActive={safeFeatured?.id === project.id}
              onSelect={setFeatured}
            />
          ))}
        </div>
      </div>

      {/* ── Contact Section ── */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-header">
            <span className="contact-eyebrow">Get in touch</span>
            <h2 className="contact-title">Let's work together</h2>
            <p className="contact-sub">Open to freelance, full-time, and collaboration opportunities.</p>
          </div>

          <div className="contact-cards">
            <a href="mailto:Sargis.a.xachatryan@gmail.com" className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">Sargis.a.xachatryan@gmail.com</span>
              </div>
              <span className="contact-card-arrow">→</span>
            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11 17v-4c0-1.5 1-2.5 2.5-2.5S16 11.5 16 13v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">Sargis Khachatryan</span>
              </div>
              <span className="contact-card-arrow">→</span>
            </a>

            {/* <a href="https://wa.me/37400000000" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.38A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M8.5 10.5c.5 1.5 2 3 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 8.5c.167.167.833.9 1.5 1.5s.5.5.5.5-.667.833-.5 1c.5.5 2.5 2.5 3 2.5.333 0 1-.667 1-.667s.333-.167.667 0c.333.167 1.333.833 1.333.833s.167.5-.333 1c-.5.5-1 .833-1.667.667C12.5 15.5 9 12 8.5 11c-.333-.833.167-1.833.5-2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">WhatsApp</span>
                <span className="contact-card-value">+374 00 000 000</span>
              </div>
              <span className="contact-card-arrow">→</span>
            </a> */}
          </div>
        </div>
      </section>
    </main>
  )
}