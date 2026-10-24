// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="mailto:youremail@gmail.com"><FaEnvelope /></a>
        </div>
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer