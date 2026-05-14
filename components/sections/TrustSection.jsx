'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ClientLogoMarquee from '../ClientLogoMarquee'

export default function TrustSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-12 bg-[#0B1220] relative border-b border-white/5 shadow-2xl z-20 overflow-hidden"
    >
      {/* Interactive Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient Dark Navy Mesh */}
        <div className="absolute inset-0 bg-[#0B1220]" />

        {/* Slow Moving Atmospheric Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-accent/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-accent-secondary/10 blur-[120px] rounded-full"
        />

        {/* Dynamic Mouse Spotlight */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(14, 165, 233, 0.08), transparent 40%)`
          }}
        />

        {/* Subtle Drifting Data Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: ((i * 17) % 100) + "%",
              y: ((i * 23) % 100) + "%",
              opacity: ((i * 7) % 30) / 100
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: ((i * 11) % 20) + 20,
              repeat: Infinity,
              ease: "linear",
              delay: (i * 3) % 20
            }}
            className="absolute w-[1px] h-12 bg-gradient-to-b from-transparent via-accent/30 to-transparent"
          />
        ))}

        {/* Very Faint Stationary Grid */}
        <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-center opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10">
        <ClientLogoMarquee />
      </div>
    </section>
  )
}
