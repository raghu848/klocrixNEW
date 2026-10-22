'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import HorizontalShowcase from '../motion/HorizontalShowcase'
import { portfolioProjects } from '../../data/projects'

export default function CaseStudiesSection() {
  return (
    <HorizontalShowcase
      items={portfolioProjects}
      heading={
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <span className="glass-badge mb-6 inline-block">Case Studies</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-bold text-white">Success Stories</h2>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Link href="/work" className="glass-button-premium h-14 group">
              Explore Portfolio
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>
      }
    />
  )
}
