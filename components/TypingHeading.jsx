'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function TypingHeading({ text, className, as: Component = "h2", delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const characters = text.split("")

  return (
    <Component ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.1, delay: delay + index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </Component>
  )
}
