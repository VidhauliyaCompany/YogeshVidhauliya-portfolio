// src/components/Testimonials.jsx
import { FaBriefcase } from 'react-icons/fa'
import Reveal from './Reveal'
import './HomeSections.css'

// Real work only. Edit the text to match exactly what you did.
const work = [
  {
    title: 'Company Website',
    client: 'Bhagwati Sales and Fire Company',
    year: '2025',
    text: 'Designed and developed the website for Bhagwati Sales and Fire Company to present the business and its products',
  },
  {
    title: 'Ticketing Management Software',
    client: 'Syrotech Networks',
    year: '2026',
    text: 'Built an internal ticketing tool with the MERN stack, covering ticket assignment, status tracking, role-based access, admin approval, SLA monitoring and Excel report export.',
  },
]

function Testimonials() {
  return (
    <section className="hs-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Work I Have <span>Delivered</span></h2>
        </Reveal>

        <Reveal>
          <div className="hs-reviews">
            {work.map((w) => (
              <div className="hs-review" key={w.title}>
                <FaBriefcase className="hs-quote" />
                <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{w.title}</h3>
                <p>{w.text}</p>
                <div className="hs-review-user">
                  <div className="hs-avatar">{w.client.charAt(0)}</div>
                  <div>
                    <h4>{w.client}</h4>
                    <span>{w.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Testimonials