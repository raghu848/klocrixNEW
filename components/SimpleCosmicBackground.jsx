'use client'

import { useEffect, useRef } from 'react'

export default function SimpleCosmicBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      // Calculate cursor position relative to the local container
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      container.style.setProperty('--mouse-x', `${x}px`)
      container.style.setProperty('--mouse-y', `${y}px`)

      // Activate glow only when cursor is inside the bounding box
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        container.style.setProperty('--opacity', '1')
      } else {
        container.style.setProperty('--opacity', '0')
      }
    }

    // Attach to window so we get smooth tracking even when hovering layered elements
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 bg-[#050505] overflow-hidden"
    >
      {/* Base Dark Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00D1FF 1px, transparent 1px),
            linear-gradient(to bottom, #00D1FF 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Smooth Mouse Glow Layer (Revealed perfectly at cursor) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
        style={{
          opacity: 'var(--opacity, 0)',
          background: `
            radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(0, 209, 255, 0.12), transparent 40%)
          `
        }}
      />

      {/* Bright Grid Lines visually punched out under cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
        style={{
          opacity: 'var(--opacity, 0)',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 209, 255, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 209, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), black, transparent)',
          WebkitMaskImage: 'radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), black, transparent)',
        }}
      />

      {/* Glowing Nodes/Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full transition-opacity duration-1000"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px #00D1FF, 0 0 20px #00D1FF',
              opacity: 0.1 + Math.random() * 0.3,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Atmospheric Soft Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-15px); }
        }
      `}</style>
    </div>
  )
}