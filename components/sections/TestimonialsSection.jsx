'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import Reveal from '../Reveal'

const testimonials = [
  {
    name: "Vikram Malhotra",
    role: "Director, Real Estate Group",
    content: "Klocrix transformed our lead generation process. Their expertise in Meta and Google advertising has been instrumental in our project sales.",
    image: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    name: "Anjali Sharma",
    role: "Marketing Manager, Automotive",
    content: "The team at Klocrix handles our brand communication with exceptional precision. They delivered a consistent digital presence that resonates with our customers.",
    image: "https://i.pravatar.cc/150?u=anjali"
  },
  {
    name: "Robert Thompson",
    role: "CEO, International Manufacturing",
    content: "Working with Klocrix helped us expand our reach internationally. Their strategic digital execution is truly world-class.",
    image: "https://i.pravatar.cc/150?u=robert"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden relative py-8">
      <div className="absolute inset-0 z-0 bg-[url('/grid-dark.svg')] bg-center bg-fixed opacity-[0.03]" />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">Testimonials</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Trusted by CEOs & Founders</h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="bg-surface/50 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-white/5 h-full flex flex-col hover:border-white/20 hover:-translate-y-2 hover:bg-surface/80 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                <div className="mb-10 text-accent text-opacity-30">
                  <Quote className="w-12 h-12" />
                </div>
                <p className="text-lg text-slate-300 mb-10 italic flex-1 leading-relaxed font-light">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                  <div className="relative w-16 h-16 shrink-0">
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      fill
                      className="rounded-2xl object-cover shadow-lg border border-white/10" 
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{t.name}</p>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
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
