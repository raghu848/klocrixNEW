'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Reveal from '../Reveal'

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-[#111827] relative z-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <span className="glass-badge mb-6 inline-block">Case Studies</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Success Stories</h2>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Link href="/work" className="glass-button-premium h-14 group">
              Explore Portfolio
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {[
            {
              title: "GDPL (Gill Developers)",
              category: "Real Estate",
              image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
              problem: "Need for high-quality leads in the Mohali residential market.",
              result: "Consistent delivery of premium leads via Meta & Google Ads."
            },
            {
              title: "WorkVEU CRM",
              category: "PropTech",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
              problem: "Manual lead management slowing down real estate sales.",
              result: "Streamlined sales operations and 2x conversion rate."
            }
          ].map((project, i) => (
            <Reveal key={i} delay={0.2 + (i * 0.1)}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[2.5rem] border border-white/10 overflow-hidden mb-10 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} Case Study`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#0B1220]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-20 h-20 rounded-full bg-accent/20 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(14,165,233,0.5)] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ExternalLink className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-accent transition-colors">{project.title}</h3>

                <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Challenge</p>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Outcome</p>
                    <p className="text-xl font-black text-white">{project.result}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
