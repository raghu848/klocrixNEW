'use client'

import Link from 'next/link'
import { PageShell, PageHero, Section, Tiles, Checks, CtaBand, Arrow } from './page-kit'

/**
 * Template for the four service detail pages.
 * config: { hero, servicesId, servicesTitle, servicesIntro, services, why }
 * why: { eyebrow?, title, body, points, cta, aside }  aside: { title, body, link } | { metrics: [[value, label]] }
 */
export default function ServiceDetail({ config }) {
  const { hero, servicesId, servicesTitle, servicesIntro, services, why } = config
  return (
    <PageShell>
      <PageHero
        size="md"
        eyebrow={hero.eyebrow}
        title={hero.title}
        desc={hero.desc}
        actions={[
          { href: hero.primary.href, label: hero.primary.label },
          { href: hero.secondary.href, label: hero.secondary.label, secondary: true },
        ]}
      />

      <Section id={servicesId} eyebrow={config.servicesEyebrow || 'What we deliver'} title={servicesTitle} intro={servicesIntro}>
        <Tiles items={services} />
      </Section>

      <Section id="why">
        <div className="kx-split kx-rv">
          <div className="kx-split-a">
            {why.eyebrow && <p className="kx-eyebrow">{why.eyebrow}</p>}
            <h2 className="kx-h2s" style={{ marginTop: 0 }}>{why.title}</h2>
            <p className="kx-lead" style={{ marginTop: 0 }}>{why.body}</p>
            <Checks items={why.points} />
            <Link href={why.cta.href} className="kx-btn kx-btn-primary">{why.cta.label} <Arrow /></Link>
          </div>
          <div className="kx-split-b">
            <div className="blob" style={{ width: 300, height: 300, right: -100, top: -100, background: '#FFC52E', opacity: 0.5 }} />
            {why.aside.metrics ? (
              why.aside.metrics.map(([value, label]) => (
                <div key={label} style={{ position: 'relative' }}>
                  <div className="kx-big">{value}</div>
                  <p>{label}</p>
                </div>
              ))
            ) : (
              <div style={{ position: 'relative', display: 'grid', gap: 18 }}>
                <h3>{why.aside.title}</h3>
                <p>{why.aside.body}</p>
                <Link href={why.aside.link.href} className="kx-link">{why.aside.link.label} <Arrow size={16} /></Link>
              </div>
            )}
          </div>
        </div>
      </Section>

      <div style={{ marginTop: 112 }}>
        <CtaBand
          title="Ready to build something great?"
          desc="Tell us about your goals and we will come back with a plan, a timeline and a clear next step."
          actions={[{ href: '/contact', label: 'Start a project' }, { href: '/work', label: 'See our work', secondary: true }]}
        />
      </div>
    </PageShell>
  )
}
