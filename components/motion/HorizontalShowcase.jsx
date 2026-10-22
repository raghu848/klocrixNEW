'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function Card({ item }) {
  return (
    <Link href="/work" className="group block w-[80vw] sm:w-[60vw] lg:w-[36vw] shrink-0 snap-start">
      <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 mb-6">
        <Image
          src={item.image}
          alt={`${item.title} – ${item.category} project by Klocrix`}
          fill
          sizes="(max-width: 1024px) 80vw, 36vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={item.position ? { objectPosition: item.position } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-black/70 text-white text-xs font-bold uppercase tracking-widest">{item.category}</span>
        <span className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">{item.title}</h3>
      <p className="text-slate-400">{item.result}</p>
    </Link>
  )
}

// Framer-style showcase: vertical scrolling drives the row of projects sideways on large screens.
// On touch/small screens it falls back to a native swipeable row.
export default function HorizontalShowcase({ items, heading }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      const overflow = trackRef.current.scrollWidth - window.innerWidth
      setDistance(window.innerWidth >= 1024 ? Math.max(overflow + 64, 0) : 0)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [items])

  // Progress is read from the section's live position: useScroll's target measurement goes stale
  // once the pinned height is applied, which made the row finish its travel too early.
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, () => {
    if (!sectionRef.current || !distance) return 0
    const progress = Math.min(Math.max(-sectionRef.current.getBoundingClientRect().top / distance, 0), 1)
    return -progress * distance
  })
  const pinned = distance > 0

  return (
    <section ref={sectionRef} className="relative bg-[#151517]" style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}>
      <div className={pinned ? 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden' : 'py-20 md:py-28'}>
        <div className="container-custom mb-12">{heading}</div>
        <motion.div
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className={pinned ? 'flex gap-8 pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]' : 'flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 pb-6 [scrollbar-width:none]'}
        >
          {items.map((item) => <Card key={item.title} item={item} />)}
        </motion.div>
      </div>
    </section>
  )
}
