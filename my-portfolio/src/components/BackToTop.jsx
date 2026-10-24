// src/components/BackToTop.jsx
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './BackToTop.css'

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={show ? 'back-to-top show' : 'back-to-top'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  )
}

export default BackToTop