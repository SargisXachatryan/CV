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

  const safeFeatured = filtered.find((p) => p.id === featured.id) ?? filtered[0] ?? null

  return (
    <main className="portfolio-page">
      {safeFeatured && <FeaturedPanel project={safeFeatured} />}

      <div className="gallery-lower">
        <GalleryControls
          tags={ALL_TAGS}
          activeTag={activeTag}
          query={query}
          onTagChange={(tag: string) => setActiveTag(tag as Tag)}
          onQueryChange={setQuery}
        />

        <div className="thumbnails">
          {filtered.length === 0 && (
            <p className="no-results">No projects match.</p>
          )}
          {filtered.map((project) => (
            <ProjectThumb
              key={project.id}
              project={project}
              isActive={safeFeatured?.id === project.id}
              onSelect={setFeatured}
            />
          ))}
        </div>
      </div>
    </main>
  )
}