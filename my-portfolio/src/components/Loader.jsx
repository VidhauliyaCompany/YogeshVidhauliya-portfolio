// src/components/Loader.jsx
import { useEffect, useState } from 'react'
import './Loader.css'

function Loader() {
  const [fade, setFade] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1300)
    const t2 = setTimeout(() => setGone(true), 1900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (gone) return null

  return (
    <div className={fade ? 'loader fade' : 'loader'}>
      <div className="loader-ring"></div>
      <h2 className="loader-logo">My<span>Portfolio</span></h2>
    </div>
  )
}

export default Loader