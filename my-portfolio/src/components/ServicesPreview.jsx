// src/components/ServicesPreview.jsx
import { Link } from 'react-router-dom'
import { FaLaptopCode, FaServer, FaPaintBrush } from 'react-icons/fa'
import Reveal from './Reveal'
import './HomeSections.css'

const items = [
  {
    icon: <FaLaptopCode />,
    title: 'Website Development',
    desc: 'Fast, responsive websites built with React and modern CSS.',
  },
  {
    icon: <FaServer />,
    title: 'Full Stack Apps',
    desc: 'Complete MERN applications with login, APIs and database.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI / UX Design',
    desc: 'Clean and attractive designs that users enjoy.',
  },
]

function ServicesPreview() {
  return (
    <section className="hs-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">What I <span>Do</span></h2>
        </Reveal>

        <Reveal>
          <div className="hs-services">
            {items.map((item) => (
              <div className="hs-service" key={item.title}>
                <div className="hs-service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="hs-center">
            <Link to="/hire" className="btn">Hire Me for Your Project</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ServicesPreview