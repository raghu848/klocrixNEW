'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowDown, Check, Phone, Zap, Target, TrendingUp, BookOpen, GraduationCap, ArrowRight, Star } from 'lucide-react'
import { cn } from '../../lib/utils'

const features = [
  {
    icon: Zap,
    title: 'Live Training',
    description: 'Interactive Live Training by Industry Experts',
    gradient: 'from-[#F9C74F] to-[#FFC300]',
    stats: '50+ Hours',
  },
  {
    icon: Target,
    title: 'Real Projects',
    description: 'Work on Actual Client Campaigns',
    gradient: 'from-[#00d4ff] to-[#0080ff]',
    stats: '10+ Projects',
  },
  {
    icon: TrendingUp,
    title: 'Job Ready',
    description: 'Get Job Ready Quickly',
    gradient: 'from-[#00ff88] to-[#00cc6a]',
    stats: 'Career Ready',
  },
]

const skills = [
  'Meta Ads (Facebook & Instagram)',
  'Google Ads & PPC',
  'Social Media Marketing',
  'Campaign Strategy & Analytics',
  'Lead Generation & ROI Tracking',
  'Performance Marketing',
  'SEO & Content Marketing',
  'Email Marketing Automation',
]

const floatingKeywords = [
  { text: 'SEO', color: '#00d4ff' },
  { text: 'PPC', color: '#F9C74F' },
  { text: 'Analytics', color: '#00ff88' },
  { text: 'Content', color: '#ff6b9d' },
  { text: 'Social', color: '#00d4ff' },
  { text: 'ROI', color: '#FFC300' },
]

// Enhanced Logical Background Component
function LogicalBackground() {
  const bitstreamColors = ['text-blue-400', 'text-cyan-400', 'text-purple-400', 'text-emerald-400']
  const keywords = ['AI_MODEL_v2.1', 'NEURAL_LINK_ACTIVE', 'DATA_STREAM_ROI', 'ALGO_SYNC_01', 'GROWTH_PROTOCOL']

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#020202]">
      {/* Central Core Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[180px] z-0"
      />

      {/* 3D Perspective Grid (Cyber Horizon) */}
      <div className="absolute inset-0 z-0" style={{ perspective: '1000px' }}>
        <motion.div 
          animate={{ rotateX: [25, 30, 25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] origin-bottom opacity-[0.15]"
          style={{ 
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to top, black, transparent)'
          }} 
        />
      </div>
      
      {/* AI Neural SVG Network - High Visibility */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <pattern id="neural-pattern-v2" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <motion.circle 
              cx="4" cy="4" r="2.5" fill="#3b82f6" 
              filter="url(#glow)"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <path d="M4 4 L120 4 M4 4 L4 120" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" />
            <motion.line 
              x1="4" y1="4" x2="60" y2="60" 
              stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.2"
              animate={{ strokeDashoffset: [0, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ strokeDasharray: '5,5' }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-pattern-v2)" />
      </svg>

      {/* Dynamic Pulsing Data Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[2px] z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.2, 0.8, 0.2],
            boxShadow: ['0 0 10px #22d3ee', '0 0 20px #22d3ee', '0 0 10px #22d3ee']
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Scanner Beam */}
      <motion.div 
        animate={{ top: ['-20%', '120%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-1 blur-[1px]"
      >
        <div className="w-full h-full bg-cyan-400/10" />
      </motion.div>
    </div>
  )
}

// Logical Journey Path Component
function JourneyPath() {
  const steps = [
    { label: 'Learn', icon: BookOpen, color: 'text-blue-400' },
    { label: 'Implement', icon: Target, color: 'text-amber-400' },
    { label: 'Succeed', icon: TrendingUp, color: 'text-emerald-400' },
  ]

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-4 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${step.color} shadow-2xl backdrop-blur-sm`}>
              <step.icon size={28} />
            </div>
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40">{step.label}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.2 }}
              className="text-white/20"
            >
              <ArrowRight size={20} />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function HeroSimple() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const y = useTransform(smoothScrollProgress, [0, 1], [0, -200])
  const opacity = useTransform(smoothScrollProgress, [0, 0.5], [1, 0])
  const scale = useTransform(smoothScrollProgress, [0, 0.5], [1, 0.9])

  const whatsappLink = 'https://wa.me/917508535271?text=Hi%2C%20I%27m%20interested%20in%20Klocrix%20Training'

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#050505]"
    >
      {/* Logical Mesh Background */}
      <LogicalBackground />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />


      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col items-center"
      >
        {/* Step-by-Step Success Path */}
        <JourneyPath />

        {/* Hero Header */}
        <div className="text-center mb-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-blue-500/50" />
            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs">Industry Standard Training</span>
            <div className="h-[1px] w-8 bg-blue-500/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-heading font-black mb-10 leading-[1] tracking-tight text-white uppercase"
          >
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Digital Marketing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            India's most comprehensive curriculum designed to take you from beginner to <span className="text-white font-bold">certified professional</span> in 12 weeks.
          </motion.p>

          {/* Logical CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl font-bold text-lg bg-blue-500 text-white shadow-[0_20px_40px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all flex items-center gap-3"
            >
              <Phone size={20} />
              <span>Book Career Counseling</span>
              <ArrowRight size={20} />
            </motion.a>

            <motion.button
              onClick={() => {
                document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl font-bold text-lg border border-white/10 text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all flex items-center gap-3"
            >
              Syllabus PDF
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Feature Grid - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/10 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-xl`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <div className="text-emerald-400 text-sm font-bold mb-2 flex items-center gap-2">
                <Star size={14} fill="currentColor" />
                {feature.stats}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Logical Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 py-12 border-t border-white/5 w-full max-w-5xl"
        >
          {[
            { label: 'Learners Trained', value: '500+' },
            { label: 'Hiring Partners', value: '150+' },
            { label: 'Success Velocity', value: 'High' },
            { label: 'Course Completion', value: '98%' },
            { label: 'Job Readiness', value: 'Ready' },
            { label: 'Salary Growth', value: 'Proven' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Simple Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover More</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  )
}

