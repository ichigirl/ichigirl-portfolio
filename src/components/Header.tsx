import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#hero" className="logo">
          <span>🌸</span>
          <span>ichigirl<span className="logo-tld">.dev</span></span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
          <a href="#about"    onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills"   onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact"  onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
