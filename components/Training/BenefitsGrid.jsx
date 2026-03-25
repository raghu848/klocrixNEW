'use client'

import { useState, useEffect, useRef } from 'react'
import { Video, Briefcase, Target, TrendingUp, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const benefits = [
  {
    id: 1,
    title: "LIVE Training Only",
    icon: Video,
    color: "text-yellow-400",
    description: "No recorded boring lectures. Real-time interaction with industry experts.",
    features: [
      "Daily Live Sessions",
      "Instant Doubt Clearance",
      "Interactive Workshops"
    ]
  },
  {
    id: 2,
    title: "Real Client Projects",
    icon: Briefcase,
    color: "text-amber-400",
    description: "Work on actual live projects, not dummy data. Build a real portfolio.",
    features: [
      "Live Budget Management",
      "Real Analytics Data",
      "Client Communication"
    ]
  },
  {
    id: 3,
    title: "Job-Ready Skills",
    icon: Target,
    color: "text-green-400",
    description: "Curriculum designed by hiring managers to make you instantly employable.",
    features: [
      "Resume Building",
      "Mock Interviews",
      "LinkedIn Optimization"
    ]
  },
  {
    id: 4,
    title: "Proven Results",
    icon: TrendingUp,
    color: "text-amber-300",
    description: "Our graduates are working in top agencies and companies globally.",
    features: [
      "100% Placement Support",
      "Freelancing Guidance",
      "Agency Launchpad"
    ]
  }
]

export default function BenefitsGrid() {
  const [activeSection, setActiveSection] = useState(0)
  const observer = useRef(null)
  const sectionRefs = useRef([])

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveSection(index)
          }
        })
      },
      {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
      }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.current.observe(ref)
    })

    return () => {
      if (observer.current) observer.current.disconnect()
    }
  }, [])

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full flex overflow-hidden bg-[#0A0A0A]">
      {/* Left Column - Sticky Image & Nav */}
      <div className="hidden lg:block w-1/2 h-full relative">
        <div className="absolute inset-0">
          <img
            src="/training-benefits-bg.jpeg"
            alt="Developer Workspace"
            className="w-full h-full object-cover"
          />
          {/* Dark Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#1e1b4b]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 max-w-lg leading-tight tracking-wide uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 block mb-2">Why Choose</span> 
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)', color: 'transparent' }} className="block text-7xl md:text-8xl drop-shadow-lg">Klocrix?</span>
          </h2>
        </div>

        {/* Vertical Dot Navigation */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                activeSection === index
                  ? "w-1 h-8 bg-yellow-400"
                  : "w-1 h-3 bg-white/30 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Column - Scrollable Content */}
      <div className="w-full lg:w-1/2 h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <div
              key={benefit.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className="h-full w-full snap-start flex items-center justify-center p-8 md:p-16 bg-[#0B0F19] relative border-b border-gray-800 lg:border-none"
            >
              {/* Decorative Number */}
              <div className="absolute top-10 right-10 text-[12rem] font-bold text-white/5 select-none font-serif leading-none">
                0{index + 1}
              </div>

              <div className="max-w-md relative z-10">
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
                  <Icon className={cn("w-8 h-8", benefit.color)} />
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-6 uppercase tracking-wider">
                  {benefit.title}
                </h3>

                {/* Divider */}
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-transparent mb-8" />

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {benefit.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-12">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors">
                        <CheckCircle className="w-4 h-4 text-yellow-400" />
                      </div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Step Counter */}
                <div className="text-sm font-medium text-gray-500 tracking-widest">
                  <span className={cn(activeSection === index ? "text-yellow-400" : "")}>0{index + 1}</span>
                  <span className="mx-4 text-gray-700">———</span>
                  <span>0{benefits.length}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
