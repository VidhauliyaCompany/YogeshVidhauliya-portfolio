// src/pages/Home.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Reveal from '../components/Reveal'
import './Home.css'
import ServicesPreview from '../components/ServicesPreview'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import TechStack from '../components/TechStack'
import Particles from '../components/Particles'
import { tiltMove, tiltLeave } from '../utils/tilt'

const roles = [
  'MERN Stack Developer',
  'React Developer',
  'Backend Developer',
  'Problem Solver',
]

const stats = [
  { end: 5, suffix: '+', label: 'Projects Completed' },
  { end: 1, suffix: '+', label: 'Years Experience' },
  { end: 10, suffix: '+', label: 'Technologies' },
  { end: 100, suffix: '%', label: 'Dedication' },
]

// typing effect
function useTyping(words) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let delay = deleting ? 50 : 110
    if (!deleting && text === word) delay = 1400

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1)
        )
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return text
}

// number that counts up
function Counter({ end, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const start = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end])

  return <>{count}{suffix}</>
}

function Home() {
  const typed = useTyping(roles)

  return (
    <>
      <section className="home">
        {/* animated background blobs */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
        <Particles />

        <div className="container home-container">
          <div className="home-text">
            <p className="home-hello">Hello, I'm</p>
            <h1>Yogesh <span>Vidhauliya</span></h1>
            <h2>
              <span className="typed">{typed}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="home-desc">
              I build modern, fast and beautiful websites/software using React,
              Node.js and MongoDB. Let's create something amazing together.
            </p>

            <div className="home-buttons">
              <Link to="/projects" className="btn">View Projects</Link>
              <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            </div>

            <div className="home-social">
              <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

          <div className="home-image">
            <div className="image-circle">
              <img src="/me.JPG" alt="profile" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <Reveal direction="zoom">
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-card" key={s.label} onMouseMove={tiltMove} onMouseLeave={tiltLeave}>
                  <h3><Counter end={s.end} suffix={s.suffix} /></h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
                </div>
      </section>
      <ServicesPreview />
      <TechStack />
      <Testimonials />
      <FAQ />
    </>
  )
}

export default Home