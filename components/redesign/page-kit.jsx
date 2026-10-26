'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import useTilt from './useTilt'
import useDesktop from './useDesktop'
import Header from '../Header'
import Footer from '../Footer'
import '../../app/redesign.css'
import './kx.css'
import './page-kit.css'

export const Arrow = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

/** Dark page frame shared by every inner page: header, rounded-card layout, footer, scroll reveals. */
export function PageShell({ children }) {
  const root = useRef(null)
  useEffect(() => {
    const el = root.current
    if (!el) return
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    el.querySelectorAll('.kx-rv').forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
  return (
    <main className="rd min-h-screen overflow-x-clip" ref={root}>
      <Header />
      <div className="wrap">{children}</div>
      <Footer />
    </main>
  )
}

function Actions({ actions }) {
  if (!actions?.length) return null
  return (
    <div className="kx-actions">
      {actions.map((a) => (
        <Link key={a.label} href={a.href} className={'kx-btn ' + (a.secondary ? 'kx-btn-glass' : 'kx-btn-primary')}>
          {a.label}{!a.secondary && <Arrow />}
        </Link>
      ))}
    </div>
  )
}

const TubesBackground = dynamic(() => import('../TubesBackground'), { ssr: false })
const WavesBackground = dynamic(() => import('../InteractiveWavesBackground'), { ssr: false })

/** Floating glass plates that tilt with the pointer; each carries one stat. */
function HeroGraphic({ stats }) {
  const tilt = useTilt()
  return (
    <div className="kx-hg" ref={tilt.ref} onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave} aria-hidden="false">
      <span className="kx-glow kx-glow-a" style={{ left: '20%', top: '15%', width: 340, height: 340 }} />
      <span className="kx-glow kx-glow-b" style={{ left: '55%', bottom: '5%', width: 260, height: 260 }} />
      <div className="kx-hg-tilt">
        <span className="kx-hg-ring" />
        <span className="kx-hg-ring r2" />
        {stats.slice(0, 3).map(([value, label], i) => (
          <div key={label} className={'kx-hg-plate p' + (i + 1)} style={{ '--bob': -i * 2.4 + 's', '--d': 0.5 + i * 0.2 + 's' }}>
            <strong className="kx-grad">{value}</strong>
            <span>{label}</span>
          </div>
        ))}
        {[0, 1, 2, 3].map((i) => <span key={i} className={'kx-hg-dot d' + i} />)}
      </div>
    </div>
  )
}

/** Page opener: animated background, staged headline, intro, buttons and a floating stat graphic. */
export function PageHero({ eyebrow, title, desc, actions, stats, size, bg = 'tubes', id = 'page-title' }) {
  const desktop = useDesktop()
  return (
    <section className={'kx-whero' + (stats ? '' : ' solo')} aria-labelledby={id}>
      <div className="kx-hero-light" />
      <div className="grid-bg" />
      <div className="blob" style={{ width: 420, height: 420, right: -120, top: -140, background: '#F23D7A', opacity: 0.22, animation: 'rd-b1 20s ease-in-out infinite' }} />
      {desktop && bg === 'tubes' && <TubesBackground className="absolute inset-0 z-0 !bg-transparent" />}
      {desktop && bg === 'waves' && <WavesBackground backgroundColor="transparent" className="absolute inset-0 z-0 opacity-80 [mask-image:linear-gradient(to_right,rgba(0,0,0,0.15)_0%,rgba(0,0,0,1)_50%)]" />}
      <div className="kx-hero-veil" />
      <div className="kx-hcopy">
        {eyebrow && <p className="kx-eyebrow kx-ent" style={{ '--d': '.05s' }}>{eyebrow}</p>}
        <h1 id={id} className={'kx-h1 kx-ent' + (size === 'md' ? ' md' : '')} style={{ '--d': '.15s' }}>{title}</h1>
        {desc && <p className="kx-desc kx-ent" style={{ '--d': '.3s' }}>{desc}</p>}
        <div className="kx-ent" style={{ '--d': '.45s' }}><Actions actions={actions} /></div>
      </div>
      {stats && <HeroGraphic stats={stats} />}
    </section>
  )
}

/** Free-floating section with an optional heading block. `panel` wraps it in a surface card. */
export function Section({ id, eyebrow, title, intro, children, panel, center, className = '' }) {
  const head = (title || eyebrow) && (
    <div className={'kx-sec-head kx-rv' + (center ? ' kx-center' : '')} style={center ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}>
      {eyebrow && <p className="kx-eyebrow">{eyebrow}</p>}
      {title && <h2 id={id ? id + '-title' : undefined} className="kx-h2s">{title}</h2>}
      {intro && <p className="kx-lead" style={center ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}>{intro}</p>}
    </div>
  )
  if (panel) {
    return (
      <section id={id} className={'kx-sec ' + className} style={{ paddingTop: 12, paddingLeft: 0, paddingRight: 0, marginTop: 12 }}>
        <div className="kx-panel">
          <div className="blob" style={{ width: 460, height: 460, right: -140, top: -160, background: '#FF7A1A', opacity: 0.16 }} />
          <div style={{ position: 'relative' }}>{head}{children}</div>
        </div>
      </section>
    )
  }
  return <section id={id} className={'kx-sec ' + className}>{head}{children}</section>
}

/** Grid of dark tiles. items: [{ icon: LucideIcon, title, desc, points?, id?, href?, cta? }] */
export function Tiles({ items, cols = 3 }) {
  return (
    <div className="kx-grid" style={{ '--cols': cols }}>
      {items.map((it) => {
        const Icon = it.icon
        return (
          <article key={it.title} id={it.id} className="kx-tile kx-rv" style={it.id ? { scrollMarginTop: 120 } : undefined}>
            {Icon && <span className="kx-ico"><Icon size={26} aria-hidden="true" /></span>}
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
            {it.points && <ul className="kx-checks" style={{ marginTop: 6 }}>{it.points.map((p) => <li key={p}>{p}</li>)}</ul>}
            {it.href && <Link href={it.href} className="kx-link" style={{ marginTop: 'auto' }}>{it.cta || 'Learn more'} <Arrow size={16} /></Link>}
          </article>
        )
      })}
    </div>
  )
}

export function Checks({ items, acc }) {
  return <ul className="kx-checks" style={acc ? { '--acc': acc } : undefined}>{items.map((p) => <li key={p}>{p}</li>)}</ul>
}

/** Closing call to action card. */
export function CtaBand({ title, desc, actions }) {
  return (
    <section className="kx-cta" style={{ marginTop: 12 }} aria-label="Next step">
      <div className="blob" style={{ width: 480, height: 480, left: -160, top: -200, background: '#FF4D3A', opacity: 0.3 }} />
      <div className="blob" style={{ width: 380, height: 380, right: -120, bottom: -160, background: '#FF7A1A', opacity: 0.28 }} />
      <div style={{ position: 'relative' }}>
        <h2 className="kx-h2">{title}</h2>
        {desc && <p className="kx-desc">{desc}</p>}
        <Actions actions={actions} />
      </div>
    </section>
  )
}
