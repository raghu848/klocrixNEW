'use client'

import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'

// Honour the OS "reduce motion" setting for every framer-motion animation on the site
export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

// Thin brand-gradient bar at the top of the viewport that fills as the page is scrolled
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] bg-gradient-to-r from-brand-yellow via-accent to-brand-magenta"
    />
  )
}
