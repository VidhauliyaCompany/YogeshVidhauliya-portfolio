// src/components/ScrollProgress.jsx
import { useEffect, useState } from 'react'
import './ScrollProgress.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ScrollProgress