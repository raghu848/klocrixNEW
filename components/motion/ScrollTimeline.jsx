'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { EASE } from '../../lib/motion'

// Vertical timeline whose centre line draws itself as you scroll.
// items: [{ label, title, desc }]
export default function ScrollTimeline({ items }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />
      <motion.div style={{ scaleY }} className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[3px] origin-top bg-gradient-to-b from-brand-yellow via-accent to-brand-magenta md:-translate-x-1/2 rounded-full" />

      <div className="space-y-16 md:space-y-24">
        {items.map((item, i) => {
          const right = i % 2 === 1
          return (
            <div key={item.title} className="relative grid md:grid-cols-2 gap-8 items-center">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-30% 0px' }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute left-5 md:left-1/2 top-2 md:top-1/2 w-5 h-5 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-white border-4 border-accent shadow-[0_0_0_6px_rgba(217,51,31,0.15)]"
              />
              <motion.div
                initial={{ opacity: 0, x: right ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ duration: 0.8, ease: EASE }}
                className={right ? 'pl-14 md:pl-16 md:col-start-2' : 'pl-14 md:pl-0 md:pr-16 md:text-right'}
              >
                <span className="text-accent font-black text-sm tracking-[0.25em] uppercase">{item.label}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
