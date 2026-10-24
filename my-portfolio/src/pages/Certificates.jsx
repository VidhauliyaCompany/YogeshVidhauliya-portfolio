// src/pages/Certificates.jsx
import { useState, useEffect } from 'react'
import { FaAward, FaExternalLinkAlt, FaTimes, FaSearchPlus } from 'react-icons/fa'
import { certificates } from '../data/certificates'
import { tiltMove, tiltLeave } from '../utils/tilt'
import './Certificates.css'

const categories = ['All', ...new Set(certificates.map((c) => c.category))]

function Certificates() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered =
    active === 'All'
      ? certificates
      : certificates.filter((c) => c.category === active)

  // close the popup with the Escape key, and stop page scroll while open
  useEffect(() => {
    if (!selected) return

    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section className="certs">
      <div className="container">
        <h2 className="section-title">My <span>Certificates</span></h2>
        <p className="certs-subtitle">
          Courses and certifications I have completed.
        </p>

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

        <div className="cert-grid">
          {filtered.map((cert) => (
            <div
              className="cert-card"
              key={cert.id}
              onMouseMove={tiltMove}
              onMouseLeave={tiltLeave}
            >
              <div
                className="cert-img"
                onClick={() => cert.image && setSelected(cert)}
                style={{ cursor: cert.image ? 'zoom-in' : 'default' }}
              >
                {cert.image ? (
                  <>
                    <img src={cert.image} alt={cert.title} />
                    <span className="cert-zoom"><FaSearchPlus /></span>
                  </>
                ) : (
                  <FaAward className="cert-placeholder" />
                )}
              </div>

              <div className="cert-body">
                <span className="cert-category">{cert.category}</span>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-foot">
                  <span>{cert.date}</span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Verify
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selected && (
        <div className="cert-modal" onClick={() => setSelected(null)}>
          <button
            className="cert-close"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <div className="cert-modal-box" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
            <p>{selected.title} · {selected.issuer}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates