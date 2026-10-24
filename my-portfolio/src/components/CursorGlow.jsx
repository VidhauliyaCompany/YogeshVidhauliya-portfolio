// src/components/CursorGlow.jsx
import { useEffect, useRef } from 'react'
import './CursorGlow.css'

function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor-glow" ref={ref}></div>
}

export default CursorGlow