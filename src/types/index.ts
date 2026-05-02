// ─── Project type ─────────────────────────────────────────────────────────────

export type Tag =
  | 'React'
  | 'Next.js'
  | 'JavaScript'
  | 'TypeScript'
  | 'HTML/CSS'
  | 'Python'
  | 'C#'
  | 'SQL'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Firebase'
  | 'Unity'
  | 'Blender'
  | 'Davinci Resolve'
  | 'Node.js'
  | 'REST API'

export type Subtitle =
  | 'Web App'
  | 'Mobile App'
  | 'Game'
  | '3D / Animation'
  | 'Backend / API'
  | 'Full Stack'
  | 'Tool / Script'
  | 'UI Design'
  | 'Other'

export interface Project {
  id: number
  title: string
  subtitle: Subtitle
  description: string
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
  tags: Tag[]
  year: number
  image: string
  link: string
  video: string
  gallery: string[]
}

export const ALL_TAGS: Tag[] = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS',
  'Python', 'C#', 'SQL', 'MongoDB', 'PostgreSQL', 'Firebase',
  'Unity', 'Blender','Davinci Resolve', 'Node.js', 'REST API',
]

export const ALL_SUBTITLES: Subtitle[] = [
  'Web App', 'Mobile App', 'Game', '3D / Animation',
  'Backend / API', 'Full Stack', 'Tool / Script', 'UI Design', 'Other',
]

export const DEFAULT_FORM: FormState = {
  title: '',
  subtitle: 'Web App',
  description: '',
  tags: [],
  year: new Date().getFullYear(),
  image: '',
  link: '',
  video: '',
  gallery: [],
}