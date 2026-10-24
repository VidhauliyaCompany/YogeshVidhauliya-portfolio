// src/pages/ProjectDetails.jsx
import { Link, useParams } from 'react-router-dom'
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaCheckCircle,
} from 'react-icons/fa'
import { projectList } from '../data/projects'
import './ProjectDetails.css'

function ProjectDetails() {
  const { id } = useParams()
  const project = projectList.find((p) => String(p.id) === id)

  if (!project) {
    return (
      <section className="pd">
        <div className="container pd-missing">
          <h2>Project not found</h2>
          <p>This project does not exist or was removed.</p>
          <Link to="/projects" className="btn">Back to Projects</Link>
        </div>
      </section>
    )
  }

  const others = projectList.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <section className="pd">
      <div className="container">
        <Link to="/projects" className="pd-back">
          <FaArrowLeft /> Back to Projects
        </Link>

        <div className="pd-hero">
          <div className="pd-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="pd-info">
            <span className="pd-category">{project.category}</span>
            <h1>{project.title}</h1>
            <p className="pd-text">{project.details}</p>

            <div className="pd-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn pd-live"
            >
              <FaExternalLinkAlt /> View Live Project
            </a>
          </div>
        </div>

        {project.features && (
          <>
            <h3 className="sub-title">Key <span>Features</span></h3>
            <div className="pd-features">
              {project.features.map((f) => (
                <div className="pd-feature" key={f}>
                  <FaCheckCircle />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {others.length > 0 && (
          <>
            <h3 className="sub-title">More <span>Projects</span></h3>
            <div className="pd-others">
              {others.map((p) => (
                <Link to={`/projects/${p.id}`} className="pd-other" key={p.id}>
                  <img src={p.image} alt={p.title} />
                  <h4>{p.title}</h4>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ProjectDetails