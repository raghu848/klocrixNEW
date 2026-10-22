'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { cn } from '../../lib/utils'
import { EASE } from '../../lib/motion'

function Step({ step, index, onActive, active, dark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <div ref={ref} className="lg:min-h-[70vh] flex flex-col justify-center py-10 lg:py-0">
      {/* On small screens the image sits inline with each step */}
      <div className="lg:hidden relative aspect-[16/10] rounded-3xl overflow-hidden mb-8">
        <Image src={step.src} alt={step.alt} fill sizes="100vw" className="object-cover" />
      </div>
      <motion.div
        animate={{ opacity: active ? 1 : 0.35, x: active ? 0 : -8 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="text-accent-light font-black text-sm tracking-[0.3em] uppercase">{step.kicker || `Step ${String(index + 1).padStart(2, '0')}`}</span>
        <h3 className={cn('text-3xl md:text-5xl font-bold mt-4 mb-6', dark ? 'text-white' : 'text-slate-900')}>{step.title}</h3>
        <p className={cn('text-lg md:text-xl leading-relaxed max-w-xl', dark ? 'text-slate-400' : 'text-slate-600')}>{step.desc}</p>
        {step.points && (
          <ul className="mt-8 flex flex-wrap gap-3">
            {step.points.map((p) => (
              <li key={p} className={cn('px-4 py-2 rounded-full text-sm font-semibold border', dark ? 'border-white/10 text-slate-300 bg-white/5' : 'border-slate-200 text-slate-700 bg-white')}>{p}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  )
}

// Apple-style storytelling: a pinned image swaps as each step scrolls into the middle of the screen.
// steps: [{ title, desc, src, alt, kicker?, points? }]
export default function StickySteps({ steps, dark = true }) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
      <div className="hidden lg:block">
        <div className="sticky top-28 h-[70vh] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-0"
            >
              <Image src={steps[active].src} alt={steps[active].alt} fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Progress pips */}
          <div className="absolute bottom-8 left-8 right-8 flex gap-2 z-10">
            {steps.map((_, i) => (
              <span key={i} className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden">
                <motion.span
                  className="block h-full bg-accent"
                  initial={false}
                  animate={{ width: i <= active ? '100%' : '0%' }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        {steps.map((step, i) => (
          <Step key={step.title} step={step} index={i} active={i === active} onActive={setActive} dark={dark} />
        ))}
      </div>
    </div>
  )
}
