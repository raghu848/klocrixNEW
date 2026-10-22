'use client'

import TextReveal from '../motion/TextReveal'
import StatsBand from '../motion/StatsBand'

const STATS = [
  { value: 2019, label: 'Founded' },
  { value: 5, suffix: '+', label: 'Years of delivery' },
  { value: 30, suffix: '+', label: 'Countries reached' },
  { value: 6, label: 'Service lines' },
]

// Apple/Linear-style statement that lights up word by word, followed by animated counters
export default function StatementSection() {
  return (
    <section className="cv-auto relative bg-background pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="container-custom relative z-10">
        <span className="glass-badge mb-10 inline-block">Who we are</span>
        <TextReveal
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white max-w-5xl mb-20 md:mb-28 font-[family-name:var(--font-manrope)]"
          text="We are engineers, designers and marketers who turn ambitious ideas into software, brands and growth. From Mohali to clients across the globe, we build products that are fast, scalable and built to last."
          highlight={['software', 'brands', 'growth', 'scalable']}
        />
        <StatsBand stats={STATS} />
      </div>
    </section>
  )
}
