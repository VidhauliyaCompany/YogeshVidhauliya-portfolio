// src/components/TechStack.jsx
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiPostman, SiVite } from 'react-icons/si'
import Reveal from './Reveal'
import './HomeSections.css'

// To add a tech: copy a line, change the icon, name and color.
// Use 'var(--text)' as the color for black/white icons so they work in both themes.
const techs = [
  { icon: <FaHtml5 />, name: 'HTML5', color: '#e34f26' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572b6' },
  { icon: <FaJs />, name: 'JavaScript', color: '#f7df1e' },
  { icon: <FaReact />, name: 'React', color: '#61dafb' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#5fa04e' },
  { icon: <SiExpress />, name: 'Express', color: 'var(--text)' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
  { icon: <FaGitAlt />, name: 'Git', color: '#f05032' },
  { icon: <FaGithub />, name: 'GitHub', color: 'var(--text)' },
  { icon: <SiPostman />, name: 'Postman', color: '#ff6c37' },
  { icon: <SiVite />, name: 'Vite', color: '#a855f7' },
  { icon: <FaNpm />, name: 'npm', color: '#cb3837' },
]

function TechStack() {
  return (
    <section className="hs-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">My Tech <span>Stack</span></h2>
        </Reveal>

        <Reveal>
          <div className="tech-grid">
            {techs.map((t) => (
              <div
                className="tech-card"
                key={t.name}
                style={{ '--tech-color': t.color }}
              >
                <div className="tech-icon">{t.icon}</div>
                <p>{t.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default TechStack