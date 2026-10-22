'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../../lib/utils'

// Image that drifts slower than the page while its frame scrolls past.
// The frame (className) sets the size; the image is scaled up slightly so the drift never shows an edge.
export default function ParallaxImage({ src, alt, className, sizes = '(max-width: 768px) 100vw, 50vw', strength = 12, priority = false, imgClassName }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div style={{ y }} className="absolute inset-[-15%]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn('object-cover', imgClassName)} />
      </motion.div>
    </div>
  )
}
