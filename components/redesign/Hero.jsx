'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import useTilt from './useTilt'
import useDesktop from './useDesktop'
import './kx.css'

const TubesBackground = dynamic(() => import('../TubesBackground'), { ssr: false })

// Replace or add files in /public/hero (portrait, about 4:5). `label` shows in the "Now showing" chip.
const SLIDES = [
  { src: '/hero/team.webp', alt: 'The Klocrix team in the studio', label: 'The studio' },
  { src: '/hero/growth.webp', alt: 'Colourful growth chart with a rising red arrow', label: 'Growth strategy' },
  { src: '/hero/interface.webp', alt: 'Glass interface cards and a mobile app glowing in red and teal', label: 'Product design' },
  { src: '/hero/developer.webp', alt: 'A developer working on code and analytics dashboards', label: 'Engineering' },
]
const SLIDE_MS = 5000

const PHRASES = ['Scalable IT solutions.', 'Digital evolution.', 'Enterprise software.', 'Cloud innovation.']

const METRICS = [
  ['2019', 'Founded in Mohali'],
  ['5+', 'Years of delivery'],
  ['30+', 'Countries reached'],
]

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export default function Hero({ ready = true }) {
  const [phrase, setPhrase] = useState(0)
  const [cycled, setCycled] = useState(false)
  const [slide, setSlide] = useState(0)
  const tilt = useTilt()
  const desktop = useDesktop()

  useEffect(() => {
    const id = setInterval(() => { setCycled(true); setPhrase((p) => (p + 1) % PHRASES.length) }, 3000)
    return () => clearInterval(id)
  }, [])

  // restart the timer whenever the slide changes, so a manual pick gets its full time on screen
  useEffect(() => {
    const id = setTimeout(() => setSlide((s) => (s + 1) % SLIDES.length), SLIDE_MS)
    return () => clearTimeout(id)
  }, [slide])

  return (
    <section className={'kx-hero' + (ready ? ' go' : '')} aria-labelledby="hero-title">
      <div className="kx-hero-light" />
      <div className="grid-bg" />
      {desktop && <TubesBackground className="absolute inset-0 z-0 !bg-transparent" />}
      <div className="kx-hero-veil" />

      <div className="kx-copy">
        <p className="kx-eyebrow kx-fade" style={{ '--d': '.1s' }}>Empowering the future of business</p>

        <h1 id="hero-title" className="kx-h1">
          <span className="kx-line"><span style={{ '--d': '.2s' }}>Transforming</span></span>
          <span className="kx-line"><span style={{ '--d': '.32s' }}>businesses with</span></span>
          <span className="kx-line kx-rot" aria-hidden="true">
            <span key={phrase} className="kx-grad" style={{ '--d': cycled ? '0s' : '.45s' }}>{PHRASES[phrase]}</span>
          </span>
          <span className="sr-only">scalable IT solutions, digital evolution, enterprise software and cloud innovation.</span>
        </h1>

        <p className="kx-desc kx-fade" style={{ '--d': '.55s' }}>
          We empower ambitious companies with cutting-edge technology, strategic consulting, and bespoke software that drives real-world growth.
        </p>

        <div className="kx-actions kx-fade" style={{ '--d': '.7s' }}>
          <Link href="/contact" className="kx-btn kx-btn-primary">Start a project <Arrow /></Link>
          <a href="#services" className="kx-btn kx-btn-glass">Our capabilities</a>
        </div>

        <dl className="kx-metrics kx-fade" style={{ '--d': '.85s' }}>
          {METRICS.map(([value, label]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
      </div>

      <div className="kx-stage" ref={tilt.ref} onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave}>
        <span className="kx-glow kx-glow-a" />
        <span className="kx-glow kx-glow-b" />
        <span className="kx-glow kx-glow-c" />

        <div className="kx-tilt">
         <div className="kx-float">
          <span className="kx-plate kx-plate-2" />
          <span className="kx-plate kx-plate-1" />
          <div className="kx-card">
            {SLIDES.map((s, i) => (
              <div key={s.src} className={'kx-slide' + (i === slide ? ' on' : '')}>
                <Image src={s.src} alt={s.alt} fill sizes="(max-width: 640px) 78vw, 380px" priority={i === 0} />
              </div>
            ))}
          </div>
          <span className="kx-corner c1" /><span className="kx-corner c2" /><span className="kx-corner c3" /><span className="kx-corner c4" />
         </div>
        </div>

        <div className="kx-fc kx-fc-a kx-fade" style={{ '--d': '1.1s' }}>
          <div className="kx-chip" style={{ '--bob': '0s' }}>
            <span className="kx-stat kx-grad">6</span>
            <small>Service lines</small>
          </div>
        </div>

        <div className="kx-fc kx-fc-c kx-fade" style={{ '--d': '1.3s' }}>
          <div className="kx-chip kx-chip-row" style={{ '--bob': '-3s' }}>
            <span className="kx-dot" aria-hidden="true" />Since 2019 · Mohali
          </div>
        </div>

        <div className="kx-fc kx-fc-b kx-fade" style={{ '--d': '1.5s' }}>
          <div className="kx-chip kx-now" style={{ '--bob': '-5s' }}>
            <small>Now showing</small>
            <b>{SLIDES[slide].label}</b>
            <div className="kx-segs">
              {SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  className={'kx-seg' + (i === slide ? ' on' : i < slide ? ' done' : '')}
                  style={{ '--dur': SLIDE_MS + 'ms' }}
                  onClick={() => setSlide(i)}
                  aria-label={'Show ' + s.label}
                  aria-current={i === slide}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
