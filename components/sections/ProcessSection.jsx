'use client'

import Reveal from '../Reveal'

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Deep dive into business goals, mapping out the precise architecture needed to solve complex challenges."
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We define constraints, select the perfect technology stack, and establish a robust timeline for delivery."
  },
  {
    number: "03",
    title: "Engineering",
    desc: "Agile development employing elite coding standards, rigorous testing, and continuous integration."
  },
  {
    number: "04",
    title: "Launch",
    desc: "Seamless deployment with zero downtime, paired with continuous scale support to guarantee ongoing performance."
  }
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-background relative border-y border-white/5 py-24 pb-48">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 bg-[url('/grid-dark.svg')] bg-center opacity-[0.03]" />

      <div className="container-custom relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">Our Process</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Translating Vision into Reality</h2>
          </Reveal>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="sticky w-full"
              style={{ top: `calc(6rem + ${index * 1.5}rem)`, zIndex: index }}
            >
              <div className="p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] bg-surface/90 backdrop-blur-3xl border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-colors min-h-[300px] md:min-h-[350px] flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                  <div className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
