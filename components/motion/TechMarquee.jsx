'use client'

import { motion } from 'framer-motion'
import { EASE } from '../../lib/motion'

const GROUPS = [
  { label: 'Frontend', dot: 'bg-brand-yellow', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'] },
  { label: 'Backend & Mobile', dot: 'bg-brand-green', items: ['Node.js', 'Python', 'Django', 'Flutter', 'React Native'] },
  { label: 'Cloud & Data', dot: 'bg-brand-blue', items: ['AWS', 'Google Cloud', 'Docker', 'MongoDB', 'PostgreSQL', 'TensorFlow', 'Pandas'] },
  { label: 'Growth & Marketing', dot: 'bg-brand-magenta', items: ['Meta Ads', 'Google Ads', 'GA4'] },
]

const TOTAL = GROUPS.reduce((n, g) => n + g.items.length, 0)

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const chip = {
  hidden: { opacity: 0, y: 14, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
}

// Technology stack grouped by discipline. Chips pop in one after another when the section
// scrolls into view, then a soft brand-coloured glow travels across them (opacity-only, so it stays cheap).
export default function TechMarquee() {
  let index = 0

  return (
    <section aria-label="Technologies we work with" className="cv-auto py-16 md:py-24 bg-background border-y border-white/5">
      <div className="container-custom">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-10 md:mb-12">Our technology stack</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {GROUPS.map((group) => (
            <div key={group.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <motion.p variants={chip} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
                {group.label}
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((name) => {
                  const delay = (index++ / TOTAL) * 12
                  return (
                    <motion.span
                      key={name}
                      variants={chip}
                      whileHover={{ y: -3 }}
                      className="relative px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm font-medium whitespace-nowrap hover:text-white hover:border-accent/50 transition-colors"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border border-accent/70 bg-accent/10 opacity-0 animate-chip-glow pointer-events-none"
                        style={{ animationDelay: `${delay}s` }}
                      />
                      <span className="relative">{name}</span>
                    </motion.span>
                  )
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
