'use client'

import Reveal from '../Reveal'
import StickySteps from '../motion/StickySteps'
import { IMAGES } from '../../lib/images'

const steps = [
  {
    kicker: '01 — Discovery',
    title: 'Discovery',
    desc: 'Deep dive into business goals, mapping out the precise architecture needed to solve complex challenges.',
    points: ['Stakeholder workshops', 'Market research', 'Technical audit'],
    ...IMAGES.discovery,
  },
  {
    kicker: '02 — Strategy & Design',
    title: 'Strategy',
    desc: 'We define constraints, select the perfect technology stack, and establish a robust timeline for delivery.',
    points: ['Wireframes & UX', 'Tech stack selection', 'Delivery roadmap'],
    ...IMAGES.design,
  },
  {
    kicker: '03 — Engineering',
    title: 'Engineering',
    desc: 'Agile development employing elite coding standards, rigorous testing, and continuous integration.',
    points: ['Agile sprints', 'Code reviews', 'Automated testing'],
    ...IMAGES.engineering,
  },
  {
    kicker: '04 — Launch & Scale',
    title: 'Launch',
    desc: 'Seamless deployment with zero downtime, paired with continuous scale support to guarantee ongoing performance.',
    points: ['Zero-downtime release', 'Monitoring', 'Growth support'],
    ...IMAGES.launch,
  },
]

export default function ProcessSection() {
  return (
    <section className="cv-auto section-padding bg-background relative border-y border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 bg-[url('/grid-dark.svg')] bg-center opacity-[0.03]" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-12 lg:mb-4">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">Our Process</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">Translating Vision into Reality</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-slate-400">Four focused stages take every project from first conversation to confident launch.</p>
          </Reveal>
        </div>

        <StickySteps steps={steps} />
      </div>
    </section>
  )
}
