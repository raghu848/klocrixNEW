'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion'
import { cn } from '../lib/utils'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Footer from '../components/Footer'

import PremiumHero from '../components/PremiumHero'

// Dynamically import heavy sections for performance
const TrustSection = dynamic(() => import('../components/sections/TrustSection'), { ssr: false })
const ServicesSection = dynamic(() => import('../components/sections/ServicesSection'), { ssr: false })
const AboutSection = dynamic(() => import('../components/sections/AboutSection'), { ssr: false })
const ProcessSection = dynamic(() => import('../components/sections/ProcessSection'), { ssr: false })
const CaseStudiesSection = dynamic(() => import('../components/sections/CaseStudiesSection'), { ssr: false })
const TestimonialsSection = dynamic(() => import('../components/sections/TestimonialsSection'), { ssr: false })
const CTASection = dynamic(() => import('../components/sections/CTASection'), { ssr: false })

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <PremiumHero
        title={"Transforming\nBusinesses with"}
        rotatingPhrases={[
          "Scalable IT Solutions.",
          "Digital Evolution.",
          "Enterprise Software.",
          "Cloud Innovation."
        ]}
        subtitle="Empowering the Future of Business"
        description="We empower ambitious companies with cutting-edge technology, strategic consulting, and bespoke software that drives real-world growth."
      />
      <TrustSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
