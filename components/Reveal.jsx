'use client'

import { motion } from 'framer-motion'
import { EASE } from '../lib/motion'

const VARIANTS = {
  // transform/opacity only: animating filter: blur() is too expensive on phones
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  // Wipes the content in from the bottom edge (good for images and big cards)
  clip: { hidden: { clipPath: 'inset(100% 0% 0% 0% round 2.5rem)' }, visible: { clipPath: 'inset(0% 0% 0% 0% round 2.5rem)' } },
}

export default function Reveal({ children, width = "fit-content", delay = 0.2, variant = 'up', duration = 0.8 }) {
  return (
    <div style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={VARIANTS[variant] || VARIANTS.up}
        transition={{ duration: variant === 'clip' ? 1.1 : duration, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}
