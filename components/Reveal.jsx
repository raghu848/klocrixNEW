'use client'

import { motion } from 'framer-motion'

export default function Reveal({ children, width = "fit-content", delay = 0.2 }) {
  return (
    <div style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.6, 
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
