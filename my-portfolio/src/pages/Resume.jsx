// src/pages/Resume.jsx
import { FaBriefcase, FaDownload, FaEye, FaCheckCircle } from 'react-icons/fa'
import './Resume.css'

// Edit this list with your real experience.
// To add a job, copy one block and change the text.
const experience = [
  {
    role: 'Frontend Developer',
    company: 'Syrotech Networks',
    year: '2025 - Present',
    points: [
      'I am a passionate  Developer',
      'I build modern, fast and beautiful websites/software using React, Node.js and MongoDB.',
    ],
  },
]

const highlights = [
  'React, Node.js, Express, MongoDB',
  'HTML5, CSS3, JavaScript (ES6+)',
  'Git and GitHub',
  'REST API development',
  'Responsive web design',
]

function Resume() {
  return (
    <section className="resume">
      <div className="container">
        <h2 className="section-title">My <span>Resume</span></h2>

        <div className="resume-download">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn">
            <FaEye /> View Resume
          </a>
          <a
            href="/resume.pdf"
            download="Yogesh_Vidhauliya_Resume.pdf"
            className="btn btn-outline"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* PDF preview (hidden on phones) */}
        <div className="resume-preview">
          <iframe src="/resume.pdf" title="Resume preview"></iframe>
        </div>

        {/* Experience timeline */}
        <h3 className="sub-title">Work <span>Experience</span></h3>
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.role + item.company}>
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h4>{item.role}</h4>
                <p className="timeline-company">{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <h3 className="sub-title">Key <span>Highlights</span></h3>
        <div className="highlights">
          {highlights.map((item) => (
            <div className="highlight-item" key={item}>
              <FaCheckCircle />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume