import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectGenerator from './project-generator'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectGenerator />
  </StrictMode>
)