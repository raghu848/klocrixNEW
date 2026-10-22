'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useTilt from './useTilt'
import './kx.css'

// Category drives the accent: warm colours lead, teal marks healthcare as the supporting highlight.
const ACCENTS = {
  'Real Estate': '#FF7A1A',
  PropTech: '#F23D7A',
  Automotive: '#FF4D3A',
  Manufacturing: '#FFC52E',
  Hospitality: '#FF7A1A',
  Healthcare: '#22D3C5',
}
const accentFor = (category) => ACCENTS[category] || '#FF7A1A'

// "3x Increase in Engagement" -> { value: '3x', label: 'Increase in Engagement' }
const parseMetric = (result) => {
  const m = /^(\d+(?:\.\d+)?[x%+]?)\s+(.+)$/i.exec(result || '')
  return m ? { value: m[1], label: m[2] } : null
}

const Arrow = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

function ProjectImage({ project }) {
  const [ready, setReady] = useState(false)
  return (
    <Image
      src={project.image}
      alt=""
      fill
      sizes="(max-width: 960px) 100vw, 640px"
      className={ready ? 'ready' : ''}
      style={{ objectPosition: project.position || 'center' }}
      onLoad={() => setReady(true)}
    />
  )
}

/**
 * Case studies as a selectable list with a live preview card.
 * variant="home": heading block + link to /work. variant="page": no heading, optional filters.
 */
export default function CaseStudyExplorer({ projects, variant = 'home', limit, id = 'case-studies' }) {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(0)
  const tilt = useTilt()
  const tabs = useRef([])

  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [projects])
  const items = useMemo(() => {
    const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
    return limit ? list.slice(0, limit) : list
  }, [projects, filter, limit])

  useEffect(() => { setActive(0) }, [filter])

  const current = items[Math.min(active, items.length - 1)]
  if (!current) return null
  const metric = parseMetric(current.result)
  const acc = accentFor(current.category)

  const onKeyDown = (e) => {
    const next = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault()
      const to = e.key === 'Home' ? 0 : items.length - 1
      setActive(to); tabs.current[to]?.focus()
    } else if (next) {
      e.preventDefault()
      const to = (active + next + items.length) % items.length
      setActive(to); tabs.current[to]?.focus()
    }
  }

  const isHome = variant === 'home'

  return (
    <section id={id} className={'kx-cases' + (isHome ? '' : ' kx-cases-bare')} aria-labelledby={id + '-title'}>
      {isHome && (
        <>
          <div className="blob" style={{ width: 520, height: 520, right: -160, top: -180, background: '#FF7A1A' }} />
          <div className="blob" style={{ width: 420, height: 420, left: -180, bottom: -200, background: '#F23D7A' }} />
        </>
      )}

      {isHome ? (
        <div className="kx-cases-head">
          <div className="rv">
            <p className="kx-eyebrow">Case studies</p>
            <h2 id={id + '-title'} className="kx-h2">Success stories</h2>
          </div>
          <Link href="/work" className="kx-btn kx-btn-glass">Explore portfolio <Arrow /></Link>
        </div>
      ) : (
        <>
          <h2 id={id + '-title'} className="sr-only">Case studies</h2>
          <div className="kx-filters" role="group" aria-label="Filter by industry">
            {categories.map((c) => (
              <button key={c} type="button" className="kx-filter" aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
        </>
      )}

      <div className="kx-board">
        <div
          className="kx-list"
          role="tablist"
          aria-orientation="vertical"
          aria-label="Case studies"
          style={{ '--n': items.length, '--i': Math.min(active, items.length - 1), '--acc': acc }}
          onKeyDown={onKeyDown}
        >
          <span className="kx-ind" aria-hidden="true" />
          {items.map((p, i) => {
            const selected = p === current
            return (
              <button
                key={p.title}
                ref={(el) => { tabs.current[i] = el }}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                className="kx-tab"
                style={{ '--acc': accentFor(p.category) }}
                onClick={() => setActive(i)}
                onPointerEnter={(e) => { if (e.pointerType === 'mouse') setActive(i) }}
              >
                <span>
                  <span className="kx-tab-cat">{p.category}</span>
                  <span className="kx-tab-title">{p.title}</span>
                </span>
                <span className="kx-tab-arrow"><Arrow size={22} /></span>
              </button>
            )
          })}
        </div>

        <div
          className="kx-stagewrap"
          style={{ '--acc': acc }}
          ref={tilt.ref}
          onPointerMove={tilt.onPointerMove}
          onPointerLeave={tilt.onPointerLeave}
        >
          <article
            className="kx-prev"
            role="tabpanel"
            id={`${id}-panel`}
            aria-labelledby={`${id}-tab-${items.indexOf(current)}`}
          >
            <div className="kx-media" key={current.title + '-media'}>
              <ProjectImage project={current} />
              <span className="kx-badge"><i />{current.category}</span>
              {metric && (
                <div className="kx-metric kx-swap"><b>{metric.value}</b><span>{metric.label}</span></div>
              )}
            </div>

            <div className="kx-body kx-swap" key={current.title}>
              <h3>{current.title}</h3>
              <p>{current.summary}</p>
              <ul className="kx-tags" aria-label="Services delivered">
                {current.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="kx-result">
                <small>Result</small>
                <strong>{current.result}</strong>
              </div>
              <Link href="/contact" className="kx-link">Start a similar project <Arrow size={16} /></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
