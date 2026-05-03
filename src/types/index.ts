// ─── Project type ─────────────────────────────────────────────────────────────

export type Tag =
  | 'React'
  | 'React Native'
  | 'Next.js'
  | 'HTML/CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'Python'
  | 'PySide6'
  | 'SQL'
  | 'MongoDB'
  | 'Node.js'
  | 'REST API'
  | 'Unity'
  | 'C#'
  | 'Blender'
  | 'Davinci Resolve'

export type Subtitle =
  | 'Web App'
  | 'Mobile App'
  | 'PC App'
  | 'Game'
  | '3D / Animation'
  | 'Backend / API'
  | 'Full Stack Web App'
  | 'Tool / Script'
  | 'UI Design'
  | 'Other'

export interface Project {
  id: number
  title: string
  subtitle: Subtitle
  description: string
  /** Optional long-form write-up shown in the "About the project" section on the detail page.
   *  Supports multiple paragraphs separated by double newlines (\n\n). */
  details?: string
  tags: Tag[]
  year: number
  image: string
  link?: string
  video?: string        // optional — YouTube embed URL or direct video URL
  gallery?: string[]    // optional — array of image URLs (max 10)
}

// ─── Generator form state ─────────────────────────────────────────────────────

export interface FormState {
  title: string
  subtitle: Subtitle
  description: string
  details: string
  tags: Tag[]
  year: number
  image: string
  link: string
  video: string
  gallery: string[]
}

export const ALL_TAGS: Tag[] = [
  'React', 'React Native', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS',
  'Python', 'PySide6', 'C#', 'SQL', 'MongoDB', 'Unity', 'Blender',
  'Davinci Resolve', 'Node.js', 'REST API',
]

export const ALL_SUBTITLES: Subtitle[] = [
  'Web App', 'Mobile App', 'PC App', 'Game', '3D / Animation',
  'Backend / API', 'Full Stack Web App', 'Tool / Script', 'UI Design', 'Other',
]

export const DEFAULT_FORM: FormState = {
  title: '',
  subtitle: 'Web App',
  description: '',
  details: '',
  tags: [],
  year: new Date().getFullYear(),
  image: '',
  link: '',
  video: '',
  gallery: [],
}