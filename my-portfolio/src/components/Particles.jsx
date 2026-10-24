// src/components/Particles.jsx
import { useEffect, useRef } from 'react'
import './Particles.css'

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const parent = canvas.parentElement
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let w = 0
    let h = 0
    let particles = []
    let frame
    let tick = 0
    let color = '#6366f1'
    const mouse = { x: null, y: null }

    const readColor = () => {
      const c = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary')
        .trim()
      if (c) color = c
    }

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(80, Math.floor((w * h) / 14000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 1.8 + 0.8,
      }))
    }

    const draw = () => {
      tick++
      if (tick % 60 === 0) readColor() // pick up theme changes

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = color
      ctx.strokeStyle = color

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!reduceMotion) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
        }

        ctx.globalAlpha = 0.7
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        // lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 120) {
            ctx.globalAlpha = 0.25 * (1 - d / 120)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        // lines to the mouse
        if (mouse.x !== null) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y)
          if (d < 160) {
            ctx.globalAlpha = 0.5 * (1 - d / 160)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    readColor()
    setup()
    draw()

    window.addEventListener('resize', setup)
    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', setup)
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas"></canvas>
}

export default Particles