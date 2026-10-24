// src/components/AutoReveal.jsx
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './AutoReveal.css'

const SELECTORS = [
  '.section-title',
  '.sub-title',
  '.hire-subtitle',
  '.contact-subtitle',
  '.enquiry-subtitle',
  '.filter-buttons',
  '.project-card',
  '.service-card',
  '.step-card',
  '.timeline-item',
  '.highlight-item',
  '.contact-card',
  '.contact-socials',
  '.contact-map',
  '.contact-cta',
  '.enquiry-form',
  '.resume-download',
].join(',')

function AutoReveal() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // skip anything already wrapped in <Reveal> (About and Home)
    const items = [...document.querySelectorAll(SELECTORS)].filter(
      (el) => !el.closest('.reveal')
    )
    const timers = []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          observer.unobserve(el)
          el.classList.add('auto-in')

          // after the animation, remove the helper classes
          // so hover effects work normally again
          timers.push(
            setTimeout(() => {
              el.classList.remove('auto-reveal', 'auto-in')
              el.style.transitionDelay = ''
            }, 1200)
          )
        })
      },
      { threshold: 0.1 }
    )

    items.forEach((el, i) => {
      el.classList.add('auto-reveal')
      el.style.transitionDelay = `${(i % 3) * 120}ms`
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [pathname])

  return null
}

export default AutoReveal