import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const base = "/CV/"

  return (
    <header className="navbar">
      <NavLink to={base} className="navbar-logo">
        Sargis Khachatryan
      </NavLink>

      <button
        className={`navbar-burger ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <nav className={`navbar-links ${open ? 'open' : ''}`}>
        <NavLink to={base} onClick={() => setOpen(false)}>CV</NavLink>
        <NavLink to={base + "portfolio"} onClick={() => setOpen(false)}>Portfolio</NavLink>
        <a href="mailto:you@example.com" className="navbar-cta" onClick={() => setOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  )
}
