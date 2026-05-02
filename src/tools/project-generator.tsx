/**
 * ProjectGenerator.tsx
 * Run this standalone (e.g. a separate route /generator or open directly).
 * Fill in the form → see live syntax-highlighted JSON → copy to clipboard.
 * Paste the output object into projects.json.
 */

import { useState, useCallback, useEffect, useRef } from 'react'
import projectsData from '../data/projects.json'
import {
  type Tag,
  type Subtitle,
  type FormState,
  ALL_TAGS,
  ALL_SUBTITLES,
  DEFAULT_FORM,
} from '.././types'

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: 10 }, (_, i) => CURRENT_YEAR - i)
const MAX_GALLERY = 10

// ─── Config ───────────────────────────────────────────────────────────────────

const IMAGE_BASE_URL = 'https://sargisXachatryan.github.io/CV/resources'
const VIDEO_BASE_URL = 'https://sargisXachatryan.github.io/CV/resources'

const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'gif'] as const

// ─── Hook: probe image extensions until one loads ─────────────────────────────

type ProbeStatus = 'idle' | 'loading' | 'found' | 'notfound'

function useImageProbe(filename: string) {
  const [resolvedUrl, setResolvedUrl] = useState<string>('')
  const [status, setStatus] = useState<ProbeStatus>('idle')

  useEffect(() => {
    const name = filename.trim()
    if (!name) { setResolvedUrl(''); setStatus('idle'); return }

    setStatus('loading')
    setResolvedUrl('')

    let cancelled = false
    let found = false

    // If the path already has a known image extension, try it directly first
    const hasExt = IMAGE_EXTENSIONS.some(ext => name.toLowerCase().endsWith(`.${ext}`))

    const tryNext = (index: number) => {
      if (cancelled || index >= IMAGE_EXTENSIONS.length) {
        if (!found && !cancelled) setStatus('notfound')
        return
      }
      const url = `${IMAGE_BASE_URL}${name}.${IMAGE_EXTENSIONS[index]}`
      const img = new Image()
      img.onload = () => { if (cancelled) return; found = true; setResolvedUrl(url); setStatus('found') }
      img.onerror = () => tryNext(index + 1)
      img.src = url
    }

    if (hasExt) {
      // Try the exact URL as-is
      const url = `${IMAGE_BASE_URL}${name}`
      const img = new Image()
      img.onload = () => { if (cancelled) return; found = true; setResolvedUrl(url); setStatus('found') }
      img.onerror = () => { if (!cancelled) setStatus('notfound') }
      img.src = url
    } else {
      tryNext(0)
    }

    return () => { cancelled = true }
  }, [filename])

  return { resolvedUrl, status }
}

// ─── Hook: probe a video URL (just a HEAD fetch) ──────────────────────────────

type VideoProbeStatus = 'idle' | 'loading' | 'found' | 'notfound'

function useVideoProbe(path: string) {
  const [status, setStatus] = useState<VideoProbeStatus>('idle')
  const [resolvedUrl, setResolvedUrl] = useState('')

  useEffect(() => {
    const p = path.trim()
    if (!p) { setStatus('idle'); setResolvedUrl(''); return }

    setStatus('loading')
    setResolvedUrl('')

    let cancelled = false
    const url = `${VIDEO_BASE_URL}${p}`

    fetch(url, { method: 'HEAD' })
      .then((res) => {
        if (cancelled) return
        if (res.ok) { setStatus('found'); setResolvedUrl(url) }
        else setStatus('notfound')
      })
      .catch(() => { if (!cancelled) setStatus('notfound') })

    return () => { cancelled = true }
  }, [path])

  return { status, resolvedUrl }
}

// ─── JSON Syntax Highlighter ──────────────────────────────────────────────────

function highlight(json: string): string {
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      if (/^"/.test(match)) {
        if (/:$/.test(match)) return `<span class="json-key">${match}</span>`
        return `<span class="json-string">${match}</span>`
      }
      if (/true|false/.test(match)) return `<span class="json-bool">${match}</span>`
      if (/null/.test(match)) return `<span class="json-null">${match}</span>`
      return `<span class="json-number">${match}</span>`
    }
  )
}

function buildJSON(form: FormState, nextId: number): object {
  const obj: Record<string, unknown> = {
    id: nextId,
    title: form.title || '',
    subtitle: form.subtitle,
    description: form.description || '',
    tags: form.tags,
    year: form.year,
    image: form.image ? `${IMAGE_BASE_URL}${form.image}` : '',
  }
  if (form.link.trim())  obj.link  = form.link.trim()
  if (form.video.trim()) obj.video = `${VIDEO_BASE_URL}${form.video.trim()}`
  if (form.gallery.length > 0) {
    obj.gallery = form.gallery.map((g) => `${IMAGE_BASE_URL}${g}`)
  }
  return obj
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProjectGenerator() {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM)
  const [copied, setCopied] = useState(false)

  // Auto-derive next ID directly from the imported JSON — no file picker needed
  const existingIds = (projectsData as { id: number }[]).map((p) => p.id)
  const lastId = existingIds.length > 0 ? Math.max(...existingIds) : 0

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const toggleTag = (tag: Tag) =>
    set('tags', form.tags.includes(tag)
      ? form.tags.filter((t) => t !== tag)
      : [...form.tags, tag]
    )

  const nextId = lastId + 1
  const jsonOutput = JSON.stringify(buildJSON(form, nextId), null, 2)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(jsonOutput).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [jsonOutput])

  return (
    <>
      <style>{CSS}</style>
      <div className="gen-root">
        <header className="gen-header">
          <h1 className="gen-title">Project Entry Generator</h1>
          <p className="gen-subtitle">Fill in the fields → copy the JSON → paste into <code>projects.json</code></p>
        </header>

        <div className="gen-layout">
          {/* ── LEFT: FORM ── */}
          <form className="gen-form" onSubmit={(e) => e.preventDefault()}>

            <div className="gen-row">
              {/* Auto ID — read directly from imported projects.json */}
              <Field label="Next ID" hint="Auto-calculated from projects.json">
                <div className="gen-id-result">
                  <span className="gen-id-label">Last</span>
                  <span className="gen-id-value">{lastId}</span>
                  <span className="gen-id-arrow">→</span>
                  <span className="gen-id-label">Next</span>
                  <span className="gen-id-next">{nextId}</span>
                </div>
              </Field>
              <Field label="Year" hint="The year of the project">
                <select
                  className="gen-select"
                  value={form.year}
                  onChange={(e) => set('year', Number(e.target.value))}
                >
                  {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </Field>
            </div>

            <Field label="Title" hint="Short project name">
              <input className="gen-input" type="text" placeholder="e.g. Aether UI"
                value={form.title} onChange={(e) => set('title', e.target.value)} />
            </Field>

            <Field label="Subtitle" hint="Project category">
              <select className="gen-select" value={form.subtitle}
                onChange={(e) => set('subtitle', e.target.value as Subtitle)}>
                {ALL_SUBTITLES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>

            <Field label="Description" hint="Full project description">
              <textarea className="gen-textarea" rows={4}
                placeholder="Describe the project, its goals, and what you built…"
                value={form.description}
                onChange={(e) => set('description', e.target.value)} />
            </Field>

            <Field label="Tags" hint="Select one or more">
              <div className="gen-tags">
                {ALL_TAGS.map((tag) => (
                  <button key={tag} type="button"
                    className={`gen-tag-btn ${form.tags.includes(tag) ? 'selected' : ''}`}
                    onClick={() => toggleTag(tag)}>
                    {tag}
                  </button>
                ))}
              </div>
            </Field>

            {/* Cover image — file picker */}
            <ImageField
              value={form.image}
              onChange={(val) => set('image', val)}
            />

            {/* Link */}
            <Field label="Link" hint="Optional — project URL or '#'">
              <input className="gen-input" type="text"
                placeholder="https://…  or  #"
                value={form.link}
                onChange={(e) => set('link', e.target.value)} />
            </Field>

            {/* Video — file picker (mp4 only) */}
            <VideoField
              value={form.video}
              onChange={(val) => set('video', val)}
            />

            {/* Gallery */}
            <GalleryField
              items={form.gallery}
              onChange={(val) => set('gallery', val)}
            />

            <button type="button" className="gen-reset"
              onClick={() => { setForm(DEFAULT_FORM) }}>
              Reset form
            </button>
          </form>

          {/* ── RIGHT: JSON OUTPUT ── */}
          <div className="gen-output-col">
            <div className="gen-output-header">
              <span className="gen-output-label">JSON Output</span>
              <button type="button"
                className={`gen-copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}>
                {copied ? '✓ Copied!' : 'Copy JSON'}
              </button>
            </div>
            <div className="gen-output-box">
              <pre className="gen-json"
                dangerouslySetInnerHTML={{ __html: highlight(jsonOutput) }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({ label, hint, children }: {
  label: string; hint?: string; children: React.ReactNode
}) {
  return (
    <div className="gen-field">
      <label className="gen-label">
        {label}
        {hint && <span className="gen-hint">{hint}</span>}
      </label>
      {children}
    </div>
  )
}

// ─── Cover image field — file picker ─────────────────────────────────────────

function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')
  const { resolvedUrl, status } = useImageProbe(value)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Keep full filename including extension
    const path = `/${file.name}`
    setFileName(file.name)
    onChange(path)
    e.target.value = ''
  }

  const statusLabel: Record<ProbeStatus, string> = {
    idle: '', loading: 'Searching…', found: '✓ Found', notfound: '✗ Not found',
  }
  const statusClass: Record<ProbeStatus, string> = {
    idle: '', loading: 'img-status--loading', found: 'img-status--found', notfound: 'img-status--notfound',
  }

  return (
    <div className="gen-field">
      <label className="gen-label">
        Cover image
        <span className="gen-hint">Select the cover image file — full filename including extension is used</span>
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFile}
      />

      <div className="gen-file-row">
        <button
          type="button"
          className="gen-file-pick-btn"
          onClick={() => fileInputRef.current?.click()}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5zm2 5l2-2 2 2 2-3 3 4H4l2-1z"/>
          </svg>
          {fileName ? 'Change image' : 'Select image'}
        </button>

        {fileName && (
          <span className="gen-file-name">{fileName}</span>
        )}

        {status !== 'idle' && (
          <span className={`gen-img-status ${statusClass[status]}`}>{statusLabel[status]}</span>
        )}
      </div>

      <div className={`gen-img-preview-box ${status === 'found' ? 'visible' : ''}`}>
        {status === 'found' && (
          <>
            <img src={resolvedUrl} className="gen-img-preview" alt="preview" />
            <span className="gen-img-url">{IMAGE_BASE_URL}{value}</span>
          </>
        )}
        {status === 'notfound' && value.trim() && (
          <span className="gen-img-notfound">
            No image found at "{IMAGE_BASE_URL}{value.trim()}"
          </span>
        )}
      </div>
    </div>
  )
}

// ─── Video field — file picker (MP4 only) ────────────────────────────────────

function VideoField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')
  const { status, resolvedUrl } = useVideoProbe(value)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const path = `/${file.name}`
    setFileName(file.name)
    onChange(path)
    e.target.value = ''
  }

  const statusLabel: Record<VideoProbeStatus, string> = {
    idle: '', loading: 'Checking…', found: '✓ Found', notfound: '✗ Not found',
  }
  const statusClass: Record<VideoProbeStatus, string> = {
    idle: '', loading: 'img-status--loading', found: 'img-status--found', notfound: 'img-status--notfound',
  }

  return (
    <div className="gen-field">
      <label className="gen-label">
        Video
        <span className="gen-hint">Optional — select an .mp4 file. Path resolved from {VIDEO_BASE_URL}</span>
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept=".mp4,video/mp4"
        style={{ display: 'none' }}
        onChange={handleFile}
      />

      <div className="gen-file-row">
        <button
          type="button"
          className="gen-file-pick-btn"
          onClick={() => fileInputRef.current?.click()}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
            <path d="M2 6a2 2 0 012-2h6l2 2h4a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm11 3l-4-2v6l4-2V9z"/>
          </svg>
          {fileName ? 'Change video' : 'Select .mp4'}
        </button>

        {fileName && (
          <span className="gen-file-name">{fileName}</span>
        )}

        {status !== 'idle' && (
          <span className={`gen-img-status ${statusClass[status]}`}>{statusLabel[status]}</span>
        )}
      </div>

      {status === 'found' && (
        <div className="gen-img-preview-box visible">
          <span className="gen-img-url">{resolvedUrl}</span>
        </div>
      )}

      {fileName && value && (
        <button
          type="button"
          className="gen-file-clear"
          onClick={() => { setFileName(''); onChange('') }}
        >
          × Remove video
        </button>
      )}
    </div>
  )
}

// ─── Gallery field ────────────────────────────────────────────────────────────

function GalleryField({
  items,
  onChange,
}: {
  items: string[]
  onChange: (v: string[]) => void
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    if (files.length === 0) return

    const newPaths = files.map((f) => `/${f.name}`)
    const merged = [...items, ...newPaths].slice(0, MAX_GALLERY)
    onChange(merged)
    e.target.value = ''
  }

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index))
  }

  const remaining = MAX_GALLERY - items.length

  return (
    <div className="gen-field">
      <label className="gen-label">
        Gallery images
        <span className="gen-hint">
          Select up to {MAX_GALLERY} images — filenames become paths after {IMAGE_BASE_URL}
        </span>
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={handleFilePick}
      />

      <button
        type="button"
        className="gen-gallery-pick-btn"
        onClick={() => fileInputRef.current?.click()}
        disabled={remaining === 0}
      >
        {remaining === 0
          ? `Max ${MAX_GALLERY} reached`
          : `+ Add images (${remaining} remaining)`}
      </button>

      {items.length > 0 && (
        <ul className="gen-gallery-list">
          {items.map((path, i) => {
            const previewUrl = `${IMAGE_BASE_URL}${path}`
            return (
              <li key={i} className="gen-gallery-item">
                <span className="gen-gallery-name" data-preview={previewUrl}>
                  {path}
                  <span className="gen-gallery-tooltip">
                    <img src={previewUrl} alt="" className="gen-gallery-tooltip-img" />
                  </span>
                </span>
                <button
                  type="button"
                  className="gen-gallery-remove"
                  onClick={() => removeItem(i)}
                  aria-label="Remove"
                >×</button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  * { scrollbar-width: none; -ms-overflow-style: none; }
  *::-webkit-scrollbar { display: none; }

  :root {
    --bg:          #0e0d0b;
    --surface:     #161510;
    --surface2:    #1e1c17;
    --surface3:    #252318;
    --border:      rgba(255,255,255,0.07);
    --border-focus:rgba(212,168,67,0.5);
    --text:        #c8c2b4;
    --text-dim:    #6b6659;
    --heading:     #f5f0e8;
    --accent:      #d4a843;
    --accent-dim:  rgba(212,168,67,0.12);
    --radius:      8px;
    --font-display:'Bebas Neue', sans-serif;
    --font-mono:   'DM Mono', monospace;
    --font-body:   'Lora', serif;
    --json-key:    #7dd3fc;
    --json-string: #86efac;
    --json-number: #fda4af;
    --json-bool:   #c084fc;
    --json-null:   #6b7280;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  .gen-root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 48px 40px 80px;
  }

  .gen-header { margin-bottom: 40px; }
  .gen-title {
    font-family: var(--font-display);
    font-size: 52px;
    letter-spacing: 0.03em;
    color: var(--heading);
    line-height: 1;
    margin-bottom: 8px;
  }
  .gen-subtitle {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-dim);
    letter-spacing: 0.06em;
  }
  .gen-subtitle code {
    color: var(--accent);
    background: var(--accent-dim);
    padding: 1px 6px;
    border-radius: 4px;
  }

  .gen-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }

  /* ── Form ── */
  .gen-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 32px;
  }

  .gen-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .gen-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .gen-label {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--heading);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .gen-hint {
    font-size: 10px;
    color: var(--text-dim);
    text-transform: none;
    letter-spacing: 0.04em;
  }

  .gen-input,
  .gen-select,
  .gen-textarea {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--heading);
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 10px 14px;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    width: 100%;
  }
  .gen-input::placeholder,
  .gen-textarea::placeholder { color: var(--text-dim); }
  .gen-input:focus,
  .gen-select:focus,
  .gen-textarea:focus {
    border-color: var(--border-focus);
    background: var(--surface3);
  }
  .gen-select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b6659' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
  }
  .gen-select option { background: #1e1c17; }
  .gen-textarea { resize: vertical; min-height: 88px; }

  /* Tag buttons */
  .gen-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .gen-tag-btn {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    padding: 5px 14px;
    border-radius: 99px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.18s;
  }
  .gen-tag-btn:hover { color: var(--heading); border-color: rgba(255,255,255,0.2); }
  .gen-tag-btn.selected { background: var(--accent); border-color: var(--accent); color: var(--bg); }

  /* ── Generic file picker button ── */
  .gen-file-pick-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 9px 18px;
    border-radius: var(--radius);
    border: 1px dashed var(--border);
    background: rgba(255,255,255,0.02);
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.2s;
    align-self: flex-start;
  }
  .gen-file-pick-btn:hover {
    border-color: var(--accent-border, rgba(212,168,67,0.35));
    color: var(--accent);
    background: var(--accent-dim);
  }

  /* Row for picker button + filename + status */
  .gen-file-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  /* Filename shown after file is picked */
  .gen-file-name {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--heading);
    letter-spacing: 0.04em;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 5px 12px;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Error message for JSON parsing */
  .gen-file-error {
    font-family: var(--font-mono);
    font-size: 11px;
    color: #fca5a5;
    letter-spacing: 0.04em;
  }

  /* Inline clear link for video */
  .gen-file-clear {
    align-self: flex-start;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-dim);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    letter-spacing: 0.04em;
    transition: color 0.15s;
  }
  .gen-file-clear:hover { color: #fca5a5; }

  /* ID result pill row */
  .gen-id-result {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 7px 14px;
    align-self: flex-start;
  }
  .gen-id-label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-dim);
  }
  .gen-id-value {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text);
  }
  .gen-id-arrow {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-dim);
    margin: 0 2px;
  }
  .gen-id-next {
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 500;
    color: var(--accent);
  }

  /* Image / status shared */
  .gen-img-status {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .img-status--loading { color: var(--text-dim); }
  .img-status--found   { color: #86efac; }
  .img-status--notfound{ color: #fca5a5; }

  .gen-img-preview-box {
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface2);
    max-height: 0;
    transition: max-height 0.3s ease;
  }
  .gen-img-preview-box.visible { max-height: 220px; }

  .gen-img-preview {
    width: 100%; height: 160px;
    object-fit: cover; display: block;
  }
  .gen-img-url {
    display: block;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-dim);
    padding: 6px 10px;
    word-break: break-all;
  }
  .gen-img-notfound {
    display: block;
    font-family: var(--font-mono);
    font-size: 11px;
    color: #fca5a5;
    padding: 14px;
    line-height: 1.8;
  }

  /* ── Gallery field ── */
  .gen-gallery-pick-btn {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 9px 20px;
    border-radius: var(--radius);
    border: 1px dashed var(--border);
    background: rgba(255,255,255,0.02);
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
  }
  .gen-gallery-pick-btn:hover:not(:disabled) {
    border-color: var(--accent-border, rgba(212,168,67,0.35));
    color: var(--accent);
    background: var(--accent-dim);
  }
  .gen-gallery-pick-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .gen-gallery-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 4px;
  }

  .gen-gallery-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 7px 12px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    transition: border-color 0.2s;
  }
  .gen-gallery-item:hover { border-color: rgba(255,255,255,0.14); }

  .gen-gallery-name {
    position: relative;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text);
    letter-spacing: 0.04em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    cursor: default;
  }
  .gen-gallery-name:hover { color: var(--heading); }

  .gen-gallery-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    z-index: 999;
    pointer-events: none;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.18s, transform 0.18s;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 8px 24px rgba(0,0,0,0.6);
  }
  .gen-gallery-name:hover .gen-gallery-tooltip {
    opacity: 1;
    transform: translateY(0);
  }
  .gen-gallery-tooltip-img {
    display: block;
    width: 180px;
    height: 100px;
    object-fit: cover;
    background: var(--surface2);
  }

  .gen-gallery-remove {
    flex-shrink: 0;
    width: 20px; height: 20px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; line-height: 1;
    background: none;
    border: none;
    border-radius: 50%;
    color: var(--text-dim);
    cursor: pointer;
    transition: color 0.15s, background 0.15s;
  }
  .gen-gallery-remove:hover {
    color: #fca5a5;
    background: rgba(252,165,165,0.1);
  }

  /* Reset button */
  .gen-reset {
    align-self: flex-start;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    padding: 7px 18px;
    border-radius: 99px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.18s;
  }
  .gen-reset:hover { color: var(--heading); border-color: rgba(255,255,255,0.2); }

  /* ── Output column ── */
  .gen-output-col {
    position: sticky;
    top: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border: 1px solid var(--border);
    overflow: hidden;
  }

  .gen-output-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    background: var(--surface2);
    border-bottom: 1px solid var(--border);
  }
  .gen-output-label {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .gen-copy-btn {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 7px 20px;
    border-radius: 99px;
    border: 1px solid rgba(212,168,67,0.35);
    background: rgba(212,168,67,0.1);
    color: var(--accent);
    cursor: pointer;
    transition: all 0.2s;
  }
  .gen-copy-btn:hover { background: var(--accent); color: var(--bg); }
  .gen-copy-btn.copied { background: #166534; border-color: #22c55e; color: #86efac; }

  .gen-output-box {
    background: var(--surface);
    padding: 24px;
    min-height: 340px;
    overflow-x: auto;
    overflow-y: auto;
    max-height: calc(100vh - 200px);
  }

  .gen-json {
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.75;
    white-space: pre;
    color: var(--text);
  }

  .gen-json .json-key    { color: var(--json-key); }
  .gen-json .json-string { color: var(--json-string); }
  .gen-json .json-number { color: var(--json-number); }
  .gen-json .json-bool   { color: var(--json-bool); }
  .gen-json .json-null   { color: var(--json-null); }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .gen-root { padding: 32px 20px 60px; }
    .gen-layout { grid-template-columns: 1fr; }
    .gen-output-col { position: static; }
    .gen-output-box { max-height: none; }
  }
  @media (max-width: 480px) {
    .gen-row { grid-template-columns: 1fr; }
    .gen-title { font-size: 38px; }
  }
`