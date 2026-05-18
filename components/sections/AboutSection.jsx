'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Reveal from '../Reveal'

export default function AboutSection() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="about" className="py-10 md:py-16 lg:py-20 bg-[#111827] overflow-hidden relative border-t border-white/5 scroll-mt-20 md:scroll-mt-32">
      <motion.div style={{ y: yParallax }} className="absolute -top-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative z-10">
          <Reveal delay={0.2}>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group aspect-[4/3]">
              <img
                src="/case-studies/klocrix-team-digital-transformation.jpeg"
                alt="Klocrix Team collaborating on digital transformation projects"
                className="w-full h-full object-cover transition-opacity duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Experience Badge */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 right-0 md:-bottom-10 md:-right-10 p-5 md:p-10 bg-surface/90 backdrop-blur-2xl border border-white/10 text-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              <p className="text-4xl md:text-6xl font-black mb-1 text-accent">5+</p>
              <p className="text-slate-300 font-bold uppercase tracking-widest text-[10px] md:text-xs">Years of Excellence</p>
            </motion.div>
          </Reveal>
        </div>

        <div className="relative z-10">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">About Klocrix</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">Accelerating Brand Growth Since 2019</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Klocrix is a forward-thinking business consultancy founded by Mr. Nikhil Saini & Mrs. Reetika Saini. We are committed to accelerating your brand's growth through innovation, data-driven insights, and strategic execution.
            </p>
          </Reveal>

          <div className="space-y-8 mb-12">
            {[
              { title: "Strategic Mastery", desc: "Decades of experience in high-stakes digital environments." },
              { title: "Bespoke Innovation", desc: "No generic templates. Only custom-engineered excellence." },
              { title: "Global Impact", desc: "Empowering businesses across 30+ countries worldwide." }
            ].map((item, i) => (
              <Reveal key={i} delay={0.4 + (i * 0.1)}>
                <div className="flex gap-6 group">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 shadow-inner flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.7}>
            <Link href="/about" className="glass-button-premium mt-4 group">
              Our Full Story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
