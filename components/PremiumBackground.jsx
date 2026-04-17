'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PremiumBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Animated Light Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * -1,
          y: mousePosition.y * -1,
        }}
        className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[100px]"
      />
      
      {/* Floating Subtle Shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            x: mousePosition.x * (0.2 * (i + 1)),
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute border border-primary/10 rounded-full"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${10 + i * 25}%`,
            top: `${20 + i * 15}%`,
            opacity: 0.1
          }}
        />
      ))}
      
      {/* Gradient Overlay for bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  )
}
