// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )

  // apply the theme to the whole page and remember it
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const closeMenu = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          My<span>Portfolio</span>
        </NavLink>

        <ul className={open ? 'nav-links active' : 'nav-links'}>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/hire" onClick={closeMenu}>Hire Me</NavLink></li>
                    <li><NavLink to="/resume" onClick={closeMenu}>Resume</NavLink></li>
          <li><NavLink to="/certificates" onClick={closeMenu}>Certificates</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          <li><NavLink to="/enquiry" className="nav-btn" onClick={closeMenu}>Enquiry</NavLink></li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          <div className="menu-icon" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar