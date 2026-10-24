// src/pages/Projects.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { projectList } from '../data/projects'
import { tiltMove, tiltLeave } from '../utils/tilt'
import './Projects.css'

const categories = ['All', 'MERN', 'React']

function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projectList
      : projectList.filter((p) => p.category === active)

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onMouseMove={tiltMove}
              onMouseLeave={tiltLeave}
            >
              <Link to={`/projects/${project.id}`} className="project-img">
                <img src={project.image} alt={project.title} />
              </Link>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <Link to={`/projects/${project.id}`}>
                    <FaArrowRight /> Details
                  </Link>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects