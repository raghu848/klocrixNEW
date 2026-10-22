'use client'

import { useEffect, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { cn } from '../../lib/utils'
import { EASE } from '../../lib/motion'

function CountUp({ to, suffix = '', prefix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    // Write straight to the DOM so counting doesn't re-render React on every frame
    const node = ref.current
    const controls = animate(0, to, { duration, ease: EASE, onUpdate: (v) => { node.textContent = `${prefix}${Math.round(v)}${suffix}` } })
    return () => controls.stop()
  }, [inView, to, duration, prefix, suffix])

  // Server-rendered with the final value so crawlers and no-JS visitors see the real number
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{to}{suffix}
    </span>
  )
}

// Row of animated counters. `stats`: [{ value, suffix, prefix, label }]
export default function StatsBand({ stats, theme = 'dark', className }) {
  const dark = theme === 'dark'
  return (
    <div className={cn('grid grid-cols-2 lg:grid-cols-4 gap-px rounded-[2rem] overflow-hidden border', dark ? 'bg-white/10 border-white/10' : 'bg-slate-200 border-slate-200', className)}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
          className={cn('p-6 md:p-10 text-center', dark ? 'bg-surface' : 'bg-white')}
        >
          <p className={cn('text-4xl md:text-6xl font-black tracking-tight mb-2', dark ? 'text-white' : 'text-slate-900')}>
            {typeof stat.value === 'number' ? <CountUp to={stat.value} suffix={stat.suffix} prefix={stat.prefix} /> : stat.value}
          </p>
          <p className={cn('text-xs md:text-sm font-bold uppercase tracking-widest', dark ? 'text-slate-400' : 'text-slate-600')}>{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
