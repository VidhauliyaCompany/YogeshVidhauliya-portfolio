// src/pages/Contact.jsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Contact.css'
import { tiltMove, tiltLeave } from '../utils/tilt'

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'yogeshvidhauliya130@gmail.com',
    link: 'mailto:youremail@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    value: '+91 9389863182',
    link: 'tel:+919876543210',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Noida, India',
    link: 'https://maps.google.com/?q=Noida',
  },
]

const socials = [
  { icon: <FaGithub />, link: 'https://github.com', name: 'GitHub' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/yogesh-vidhauliya9389/', name: 'LinkedIn' },
  { icon: <FaInstagram />, link: 'https://instagram.com', name: 'Instagram' },
]

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        <p className="contact-subtitle">
          Have a project in mind or want to work together? Feel free to reach
          out using any of the options below.
        </p>

        {/* Contact cards */}
        <div className="contact-cards">
          {contactInfo.map((item) => (
            <a
              className="contact-card" onMouseMove={tiltMove} onMouseLeave={tiltLeave}
              href={item.link}
              key={item.title}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </a>
          ))}
        </div>

        {/* Social links */}
        <h3 className="sub-title">Find Me <span>Online</span></h3>
        <div className="contact-socials">
          {socials.map((s) => (
            <a href={s.link} key={s.name} target="_blank" rel="noreferrer">
              {s.icon}
              <span>{s.name}</span>
            </a>
          ))}
        </div>

        {/* Map */}
        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=New+Delhi&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* Link to enquiry */}
        <div className="contact-cta">
          <p>Want to send me a message directly?</p>
          <Link to="/enquiry" className="btn">Go to Enquiry Form</Link>
        </div>
      </div>
    </section>
  )
}

export default Contact