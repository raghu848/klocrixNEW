'use client'

import { useCallback, useEffect, useRef } from 'react'

// Pointer-driven depth: writes --px / --py (-0.5..0.5) and --mx / --my (0..100%) onto the element.
// CSS decides what moves. Mouse only, and skipped when the visitor prefers reduced motion.
export default function useTilt() {
  const ref = useRef(null)
  const frame = useRef(0)
  const reduced = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => { reduced.current = mq.matches }
    sync()
    mq.addEventListener('change', sync)
    return () => { mq.removeEventListener('change', sync); cancelAnimationFrame(frame.current) }
  }, [])

  const set = (x, y) => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--px', x.toFixed(3))
    el.style.setProperty('--py', y.toFixed(3))
    el.style.setProperty('--mx', ((x + 0.5) * 100).toFixed(1) + '%')
    el.style.setProperty('--my', ((y + 0.5) * 100).toFixed(1) + '%')
  }

  const onPointerMove = useCallback((e) => {
    if (e.pointerType !== 'mouse' || reduced.current || !ref.current) return
    const { clientX, clientY } = e
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const r = ref.current.getBoundingClientRect()
      set((clientX - r.left) / r.width - 0.5, (clientY - r.top) / r.height - 0.5)
    })
  }, [])

  const onPointerLeave = useCallback(() => {
    cancelAnimationFrame(frame.current)
    set(0, 0)
  }, [])

  return { ref, onPointerMove, onPointerLeave }
}
