'use client'

import Link from 'next/link'
import Reveal from '../Reveal'

export default function CTASection() {
  return (
    <section className="section-padding bg-[#111827]">
      <div className="container-custom gap-8">
        <div className="relative rounded-[2rem] md:rounded-[3rem] bg-surface border border-white/10 overflow-hidden p-10 md:p-32 text-center shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-10 leading-tight">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">legendary</span> together
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-slate-400 mb-16 leading-relaxed font-light">
                Ready to take your business to the next level? Our team of architects is here to help you navigate the digital landscape.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="glass-button-premium text-lg px-12 h-16 w-full sm:w-auto">
                  Start a Project
                </Link>
                <Link href="/services" className="btn-outline border-white/20 text-white hover:border-white/40 hover:bg-white/5 text-lg px-12 h-16 w-full sm:w-auto inline-flex justify-center items-center">
                  Our Capabilities
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
