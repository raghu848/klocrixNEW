'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Target, Eye, Users, TrendingUp, Globe2, Award } from 'lucide-react'
import { PageHero, Section, Tiles, CtaBand } from './redesign/page-kit'

const FOUNDATION_IMAGES = [
  ['/case-studies/about.jpeg', 'The Klocrix team together'],
  ['/case-studies/klocrix-team-1.jpeg', 'Klocrix team at work'],
  ['/case-studies/klocrix-team-2.jpeg', 'Klocrix engineers working at their desks'],
  ['/case-studies/klocrix-team-3.jpeg', 'Klocrix team members in the office'],
  ['/case-studies/about-section-1.jpeg', 'The Klocrix studio in Mohali'],
  ['/case-studies/about-section-2.jpeg', 'Klocrix team celebrating a milestone'],
]

// Hero
export function AboutHero() {
  return (
    <PageHero
      eyebrow="Our journey"
      title={<>Architecting <span className="kx-grad">digital evolution</span></>}
      desc="We are a team of architects, engineers, and visionaries dedicated to building the foundational systems of the future since 2019."
      actions={[{ href: '/contact', label: 'Get in touch' }, { href: '/work', label: 'View our work', secondary: true }]}
      stats={[['2019', 'Founded in Mohali'], ['5+', 'Years of delivery'], ['30+', 'Countries reached']]}
    />
  )
}

// Our story: rotating team photos beside the founding story
export function OurStorySection() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCurrent((i) => (i + 1) % FOUNDATION_IMAGES.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <Section id="story">
      <div className="kx-story">
        <div className="kx-photo kx-rv">
          {FOUNDATION_IMAGES.map(([src, alt], i) => (
            <div key={src} className={'kx-slide' + (i === current ? ' on' : '')}>
              <Image src={src} alt={alt} fill sizes="(max-width: 1100px) 100vw, 40vw" />
            </div>
          ))}
        </div>
        <div className="kx-rv">
          <p className="kx-eyebrow" style={{ marginBottom: 20 }}>Our foundation</p>
          <blockquote className="kx-quote">
            &ldquo;At Klocrix, we don&apos;t just build strategies, we create impactful experiences that position your brand ahead of the competition.&rdquo;
          </blockquote>
          <div className="kx-prose">
            <p>Klocrix Business Solution was founded in 2019 by <strong>Mr. Nikhil Saini &amp; Mrs. Reetika Saini</strong>. We are a forward-thinking business consultancy committed to accelerating brand growth across an ever-evolving marketplace.</p>
            <p>With a relentless focus on innovation, data-driven insights, and strategic execution, we empower businesses to stand out. Through comprehensive market analysis and tailored solutions, we ensure every element of your brand aligns seamlessly with your vision and goals.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

// How we think
export function MissionVisionSection() {
  return (
    <Section id="approach" eyebrow="How we think" title="Analysis and creativity, together">
      <Tiles
        cols={2}
        items={[
          { icon: Target, title: 'Analytical Thinking', desc: 'We dive deep into understanding your business landscape, audience behavior, and market dynamics to craft solutions that truly make an impact.' },
          { icon: Eye, title: 'Creative Insight', desc: 'By blending analytical thinking with creative insight, we transform complex challenges into clear, actionable strategies that drive brand visibility and growth.' },
        ]}
      />
    </Section>
  )
}

// Why choose us
export function WhyChooseUsSection() {
  return (
    <Section id="why" eyebrow="Why Klocrix" title="Why leaders choose Klocrix" intro="We combine technical depth with business strategy to deliver outcomes that matter.">
      <Tiles
        cols={4}
        items={[
          { icon: Award, title: '5+ Years of Mastery', desc: 'Years of engineering mastery and successful project deliveries since 2019.' },
          { icon: Users, title: 'Strategic Partnership', desc: "We don't just work for you; we work with you as a long-term strategic ally." },
          { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Systems architected to grow with your business, from startup to enterprise.' },
          { icon: Globe2, title: 'Expert Global Team', desc: 'Access to top-tier talent from across the globe, bringing diverse perspectives.' },
        ]}
      />
    </Section>
  )
}

// Kept for compatibility with older imports
export function TeamSection() { return null }

// Closing call to action
export function CTASection() {
  return (
    <div style={{ marginTop: 112 }}>
      <CtaBand
        title="Ready to architect your digital future?"
        desc="Let's start a conversation about how we can help you achieve your most ambitious business goals."
        actions={[{ href: '/contact', label: 'Get in touch' }, { href: '/work', label: 'View our work', secondary: true }]}
      />
    </div>
  )
}
