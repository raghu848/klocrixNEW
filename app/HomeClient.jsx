'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion'
import { cn } from '../lib/utils'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Footer from '../components/Footer'

import PremiumHero from '../components/PremiumHero'

// Below-the-fold sections are code-split but still server-rendered so their content is in the HTML for search engines
const TrustSection = dynamic(() => import('../components/sections/TrustSection'))
const ServicesSection = dynamic(() => import('../components/sections/ServicesSection'))
const AboutSection = dynamic(() => import('../components/sections/AboutSection'))
const ProcessSection = dynamic(() => import('../components/sections/ProcessSection'))
const CaseStudiesSection = dynamic(() => import('../components/sections/CaseStudiesSection'))
const TestimonialsSection = dynamic(() => import('../components/sections/TestimonialsSection'))
const CTASection = dynamic(() => import('../components/sections/CTASection'))

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
