'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../../lib/utils'

function Word({ children, progress, range, highlight }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span style={{ opacity }} className={cn('inline-block mr-[0.25em]', highlight && 'text-accent-light')}>
      {children}
    </motion.span>
  )
}

// Statement whose words light up one by one as it scrolls through the viewport.
// Words listed in `highlight` are drawn in the brand accent.
export default function TextReveal({ text, highlight = [], className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')

  return (
    <p ref={ref} className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          highlight={highlight.includes(word.replace(/[.,]/g, ''))}
        >
          {word}
        </Word>
      ))}
    </p>
  )
}
