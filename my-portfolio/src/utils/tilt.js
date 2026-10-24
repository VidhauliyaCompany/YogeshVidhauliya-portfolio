// src/utils/tilt.js
export function tiltMove(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width
  const y = (e.clientY - r.top) / r.height

  el.style.transition = 'transform 0.1s ease-out'
  el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-8px)`
}

export function tiltLeave(e) {
  const el = e.currentTarget
  el.style.transition = 'transform 0.5s ease'
  el.style.transform = ''
}