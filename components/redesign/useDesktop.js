'use client'

import { useEffect, useState } from 'react'

// True only on wide screens, after mount. Used to skip heavy effects on phones.
export default function useDesktop(min = 1024) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${min}px)`)
    const sync = () => setOn(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [min])
  return on
}
