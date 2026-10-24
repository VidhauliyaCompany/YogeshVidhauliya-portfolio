// src/components/FAQ.jsx
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Reveal from './Reveal'
import './HomeSections.css'

const faqs = [
  {
    q: 'What technologies do you work with?',
    a: 'I mainly work with the MERN stack: MongoDB, Express, React and Node.js, along with HTML, CSS and JavaScript.',
  },
  {
    q: 'How long does a website take to build?',
    a: 'A simple website usually takes 1 to 2 weeks. Larger full stack apps take longer. I give a clear timeline after we discuss your needs.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Yes. Every website I build is responsive and works on mobile, tablet and desktop.',
  },
  {
    q: 'How can I start a project with you?',
    a: 'Open the Hire Me page, fill in the project request form, and I will contact you to discuss the details.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="hs-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
        </Reveal>

        <Reveal>
          <div className="hs-faq">
            {faqs.map((item, i) => (
              <div
                className={open === i ? 'hs-faq-item open' : 'hs-faq-item'}
                key={item.q}
              >
                <button
                  className="hs-faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <FaChevronDown className="hs-faq-arrow" />
                </button>
                <div className="hs-faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FAQ