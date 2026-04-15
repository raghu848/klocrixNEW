'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users } from 'lucide-react'
import { cn } from '../lib/utils'
import Link from 'next/link'
import CosmicBackground from '../components/SimpleCosmicBackground'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientLogoMarquee from '../components/ClientLogoMarquee'
import CaseStudyCard from '../components/CaseStudyCard'
import { caseStudies } from '../data/caseStudies'


// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-36 lg:pt-48 pb-20 mt-10 lg:mt-0">
      <CosmicBackground />

      {/* Subtle scanline texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,209,255,0.015) 3px, rgba(0,209,255,0.015) 4px)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">

        {/* ── Headline ── */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-bold font-heading mb-6 leading-none tracking-tighter">
            <span
              className="block text-white"
              style={{ textShadow: '0 0 60px rgba(0,209,255,0.25)' }}
            >
              BEYOND CODE.
            </span>
            <span
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.12) 100%)',
              }}
            >
              BEYOND CUSTOM.
            </span>
            <span
              className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4"
              style={{
                WebkitTextStroke: '1.5px rgba(0,209,255,0.75)',
                color: 'transparent',
                textShadow: '0 0 35px rgba(0,209,255,0.2)',
              }}
            >
              ENGINEER DIGITAL DNA.
            </span>
          </h1>
        </div>

        {/* ── Main card ── */}
        <div className="relative w-full max-w-6xl group">

          {/* Glow halo */}
          <div
            className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,209,255,0.4) 0%, transparent 40%, rgba(57,255,20,0.3) 100%)',
              filter: 'blur(12px)',
            }}
          />

          {/* Card shell */}
          <div
            className="relative p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16"
            style={{
              background:
                'linear-gradient(135deg, rgba(2,8,20,0.97) 0%, rgba(0,16,36,0.95) 100%)',
              border: '1px solid rgba(0,209,255,0.18)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 1px rgba(0,0,0,0.4), 0 40px 80px rgba(0,0,0,0.7)',
            }}
          >
            {/* Corner brackets */}
            {[
              'top-0 left-0 border-t border-l',
              'top-0 right-0 border-t border-r',
              'bottom-0 left-0 border-b border-l',
              'bottom-0 right-0 border-b border-r',
            ].map((cls, i) => (
              <span
                key={i}
                className={`absolute ${cls} w-5 h-5`}
                style={{ borderColor: 'rgba(0,209,255,0.45)' }}
              />
            ))}

            {/* ── Left content ── */}
            <div className="flex-1 text-left">
              <h2 className="text-2xl md:text-3xl font-heading text-white mb-6 tracking-wide leading-snug">
                ELEVATE BUSINESS INTELLIGENCE WITH{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #00D1FF 0%, #f62727 100%)',
                  }}
                >
                  AI-DRIVEN SOLUTIONS
                </span>
              </h2>

              <p className="text-lg md:text-xl text-white/45 mb-10 leading-relaxed font-light max-w-lg">
                Klocrix doesn't just build software; we architect the foundational systems that
                transform ambitious companies into market leaders. We fuse 25 years of mastery
                with cutting-edge innovation to deliver bespoke solutions that are as unique as
                your ambition.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link
                  href="/services"
                  className="relative group px-12 py-5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,209,255,0.25)]"
                >
                  {/* Subtle glass effect base */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                  
                  {/* Neon border trace */}
                  <div className="absolute inset-0 border border-[#00D1FF]/40 group-hover:border-[#00D1FF] transition-colors duration-500" />
                  
                  {/* Filling background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00D1FF]/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                  
                  <span className="relative z-10 flex items-center gap-4 text-[#00D1FF] text-[13px] font-bold tracking-[0.4em] uppercase transition-all duration-500 group-hover:gap-6">
                    EXPLORE PLATFORM
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00D1FF]" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00D1FF]" />
                </Link>

                <div className="hidden sm:flex items-center space-x-2 font-mono text-xs tracking-widest text-white/25">
                  <span
                    className="w-8 h-px"
                    style={{ background: 'rgba(0,209,255,0.4)' }}
                  />
                  <span>SYSTEMONLINE: VERSION4.0</span>
                </div>
              </div>
            </div>

            {/* ── Right visualization ── */}
            <div className="flex-1 w-full max-w-[400px]">
              <div
                className="aspect-square relative p-4 flex items-center justify-center overflow-hidden"
                style={{
                  background: 'rgba(0,8,20,0.7)',
                  border: '1px solid rgba(0,209,255,0.1)',
                  boxShadow: 'inset 0 0 50px rgba(0,209,255,0.03)',
                }}
              >
                {/* Corner ticks on chart */}
                {[
                  'top-2 left-2 border-t border-l',
                  'top-2 right-2 border-t border-r',
                  'bottom-2 left-2 border-b border-l',
                  'bottom-2 right-2 border-b border-r',
                ].map((cls, i) => (
                  <span
                    key={i}
                    className={`absolute ${cls} w-3 h-3`}
                    style={{ borderColor: 'rgba(0,209,255,0.3)' }}
                  />
                ))}

                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(0,209,255,0.4))' }}
                >
                  <defs>
                    <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00D1FF" />
                      <stop offset="100%" stopColor="#f62727" />
                    </linearGradient>
                    <linearGradient id="lg2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid */}
                  {[25, 50, 75].map((v) => (
                    <g key={v}>
                      <line x1="10" y1={v} x2="90" y2={v} stroke="rgba(0,209,255,0.07)" strokeWidth="0.5" />
                      <line x1={v + 5} y1="10" x2={v + 5} y2="90" stroke="rgba(0,209,255,0.07)" strokeWidth="0.5" />
                    </g>
                  ))}

                  {/* Axes */}
                  <line x1="10" y1="10" x2="10" y2="90" stroke="rgba(0,209,255,0.2)" strokeWidth="0.5" />
                  <line x1="10" y1="90" x2="90" y2="90" stroke="rgba(0,209,255,0.2)" strokeWidth="0.5" />

                  {/* Area fill */}
                  <path
                    d="M 10 90 L 30 70 L 50 80 L 70 40 L 90 20 L 90 90 Z"
                    fill="url(#lg2)"
                  />

                  {/* Main line */}
                  <path
                    d="M 10 90 L 30 70 L 50 80 L 70 40 L 90 20"
                    fill="none"
                    stroke="url(#lg1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {[[10, 90], [30, 70], [50, 80], [70, 40]].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="2" fill="#00D1FF" />
                  ))}

                  {/* Live endpoint */}
                  <circle cx="90" cy="20" r="2.5" fill="#f62727">
                    <animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="90" cy="20" r="5" fill="none" stroke="#f62727" strokeWidth="0.6" opacity="0.5">
                    <animate attributeName="r" values="5;9;5" dur="1.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="1.4s" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* Scanline sweep */}
                <div
                  className="absolute inset-x-0 h-[22%] pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 0%, rgba(0,209,255,0.06) 50%, transparent 100%)',
                    animation: 'scanSweep 3.5s linear infinite',
                    top: '-22%',
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanSweep {
          0%   { top: -22%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  )
}

// Trusted By Section
function TrustedBySection() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            The Proof is in the Performance: <br />
            <span className="cosmic-text">Partnering with Global Innovators</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Trusted by forward-thinking companies to deliver transformational results
          </p>
        </div>

        <ClientLogoMarquee />
      </div>
    </section>
  )
}

// Solutions Section Component (Futuristic Redesign)
function SolutionsGridSection() {
  const solutions = [
    {
      icon: Shield,
      title: "BESPOKE ARCHITECTURE",
      description: "Your business processes are a fingerprint—utterly unique. We deconstruct your operations and engineer a perfect digital counterpart.",
      index: "SYS.01 // NODE_ARCH",
      stat: "ACTIVE PROTOCOL",
      variant: "cyan"
    },
    {
      icon: Users,
      title: "FULL-FUNNEL OWNERSHIP",
      description: "Elite-level strategy, design, development, and data science under one roof. This seamless integration eliminates miscommunication.",
      index: "SYS.02 // FULL_STACK",
      stat: "SYNC ENGAGED",
      variant: "green"
    },
    {
      icon: Zap,
      title: "25+ YEARS OF MASTERY",
      description: "Our experience is your insurance policy. We've navigated every technological shift and solved every complex business problem.",
      index: "SYS.03 // CHRONO_DEPTH",
      stat: "9125 DAYS LIVE",
      variant: "cyan"
    },
    {
      icon: TrendingUp,
      title: "ROI OBSESSED",
      description: "We are ruthlessly focused on your bottom line. Every feature is scrutinized: Will this drive value for your business?",
      index: "SYS.04 // ROI_ENGINE",
      stat: "RETURNS MAXIMIZED",
      variant: "green"
    }
  ]

  return (
    <section className="relative overflow-hidden bg-[#050508] py-20 pb-32">

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-50"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)' }}
      />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,209,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,209,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridShift 20s linear infinite'
        }}
      />

      {/* Floating orbs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(0,209,255,0.07)', filter: 'blur(100px)', animation: 'orbFloat 12s ease-in-out infinite alternate' }} />
      <div className="absolute -bottom-20 -left-16 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(0,255,136,0.06)', filter: 'blur(100px)', animation: 'orbFloat 12s ease-in-out infinite alternate-reverse' }} />

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap');
        @keyframes gridShift { 0%{background-position:0 0} 100%{background-position:60px 60px} }
        @keyframes orbFloat { from{transform:translate(0,0) scale(1)} to{transform:translate(30px,20px) scale(1.1)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.15} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,209,255,0.4)} 50%{box-shadow:0 0 0 6px rgba(0,209,255,0)} }
        @keyframes sweep { 0%{background-position:200% 0%} 100%{background-position:-200% 0%} }
        @keyframes radarExpand { 0%{opacity:0.6;transform:scale(0.8)} 100%{opacity:0;transform:scale(1.4)} }
        @keyframes glitch1 { 0%,90%,100%{transform:translate(0)} 92%{transform:translate(-3px,1px)} 96%{transform:translate(3px,-1px)} }
        @keyframes glitch2 { 0%,88%,100%{transform:translate(0)} 90%{transform:translate(3px,-2px)} 94%{transform:translate(-3px,2px)} }
        .glitch { position:relative; display:inline-block; }
        .glitch::before,.glitch::after { content:attr(data-text); position:absolute; top:0; left:0; width:100%; height:100%; }
        .glitch::before { color:#00D1FF; text-shadow:-2px 0 #00D1FF; clip-path:polygon(0 30%,100% 30%,100% 50%,0 50%); animation:glitch1 4s infinite step-start; }
        .glitch::after { color:#00FF88; text-shadow:2px 0 #00FF88; clip-path:polygon(0 60%,100% 60%,100% 75%,0 75%); animation:glitch2 4s infinite step-start; }
        .card-sweep-cyan { background: linear-gradient(125deg,rgba(0,209,255,0) 40%,rgba(0,209,255,0.07) 60%,rgba(0,209,255,0) 80%); background-size:300% 300%; }
        .card-sweep-green { background: linear-gradient(125deg,rgba(0,255,136,0) 40%,rgba(0,255,136,0.07) 60%,rgba(0,255,136,0) 80%); background-size:300% 300%; }
        .card-hover-sweep:hover .sweep-layer { opacity:1; animation: sweep 1.8s linear infinite; }
        .blink-dot { animation: blink 1.4s step-start infinite; }
        .diamond-pulse { animation: pulse 2s ease-in-out infinite; }
        .radar-ring { position:absolute; border-radius:50%; border:1px solid rgba(0,209,255,0.06); animation:radarExpand 4s linear infinite; }
      ` }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="text-center px-4 mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #00D1FF)' }} />
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '11px', letterSpacing: '4px', color: '#00D1FF', opacity: 0.7 }}>
              SYSTEM // KLOCRIX DIFFERENTIAL
            </span>
            <div className="w-16 h-px" style={{ background: 'linear-gradient(-90deg, transparent, #00D1FF)' }} />
          </div>

          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,5vw,4.2rem)', letterSpacing: '0.05em', lineHeight: 1.05, marginBottom: '20px' }}>
            <span className="text-white glitch" data-text="FEELING">FEELING</span>{' '}
            <span style={{ WebkitTextStroke: '1px rgba(0,209,255,0.7)', color: 'transparent' }}>THE GAP?</span>
          </h2>

          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '1.05rem', color: 'rgba(200,220,255,0.55)', letterSpacing: '0.06em', fontWeight: 300, maxWidth: '500px', margin: '0 auto 30px' }}>
            Why your vision and your technology haven't converged — until now.
          </p>

          {/* HUD divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex-1 max-w-[160px] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,209,255,0.5))' }} />
            <div className="w-1 h-1 rounded-full bg-[#00D1FF] opacity-50" />
            <div className="w-2 h-2 border border-[#00D1FF] rotate-45 diamond-pulse" />
            <div className="w-1 h-1 rounded-full bg-[#00D1FF] opacity-50" />
            <div className="flex-1 max-w-[160px] h-px" style={{ background: 'linear-gradient(-90deg, transparent, rgba(0,209,255,0.5))' }} />
          </div>
        </div>

        {/* Cyber Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12">
          {solutions.map((item, index) => {
            const Icon = item.icon
            const isCyan = item.variant === 'cyan'
            const accentColor = isCyan ? '#00D1FF' : '#00FF88'
            return (
              <div
                key={index}
                className="card-hover-sweep group w-full relative overflow-hidden flex flex-col p-8 sm:p-10"
                style={{
                  background: 'rgba(10,14,28,0.92)',
                  border: `1px solid ${isCyan ? 'rgba(0,209,255,0.18)' : 'rgba(0,255,136,0.15)'}`,
                  clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))',
                  transition: 'transform 0.4s cubic-bezier(.2,.8,.3,1), border-color 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.borderColor = isCyan ? 'rgba(0,209,255,0.45)' : 'rgba(0,255,136,0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.borderColor = isCyan ? 'rgba(0,209,255,0.18)' : 'rgba(0,255,136,0.15)'
                }}
              >
                {/* Sweep layer */}
                <div className={cn("sweep-layer absolute inset-0 opacity-0 pointer-events-none transition-opacity", isCyan ? "card-sweep-cyan" : "card-sweep-green")} />

                {/* Corner notches */}
                <div className="absolute top-0 right-0 w-6 h-6 opacity-50"
                  style={{ borderLeft: `1px solid ${accentColor}`, borderBottom: `1px solid ${accentColor}` }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 opacity-50"
                  style={{ borderRight: `1px solid ${accentColor}`, borderTop: `1px solid ${accentColor}` }} />

                {/* Index */}
                <div className="mb-4" style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '3px', color: accentColor, opacity: 0.5 }}>
                  {item.index}
                </div>

                {/* Icon */}
                <div className="relative w-14 h-14 flex items-center justify-center mb-7"
                  style={{ border: `1px solid ${accentColor}30` }}>
                  <div className="absolute -inset-1 opacity-20 group-hover:opacity-100 transition-opacity"
                    style={{ border: `1px solid ${accentColor}40` }} />
                  <Icon className="w-6 h-6 relative z-10" style={{ stroke: accentColor, fill: 'none', strokeWidth: 1.5 }} />
                </div>

                {/* Title */}
                <h3 className="text-white mb-4" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', lineHeight: 1.4 }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="flex-1" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '0.88rem', color: 'rgba(180,210,240,0.6)', lineHeight: 1.75, fontWeight: 300 }}>
                  {item.description}
                </p>

                {/* Stat chip */}
                <div className="flex items-center justify-between mt-auto pt-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1"
                    style={{ border: `1px solid ${accentColor}25`, background: `${accentColor}08`, fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '2px', color: `${accentColor}B0` }}>
                    <div className="w-1.5 h-1.5 rounded-full blink-dot" style={{ background: accentColor }} />
                    {item.stat}
                  </div>
                  
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] transition-all group-hover:gap-4" style={{ color: accentColor, fontFamily: "'Roboto Mono', monospace" }}>
                    EXPLORE_NODE
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-5 h-px origin-left transition-transform duration-500 opacity-30 group-hover:opacity-70 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)`, transform: 'scaleX(0.25)' }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Success Gallery Section Component (Redesigned from Case Files)
function SuccessGallery() {
  const features = [
    {
      tag: "STRATEGIC // REAL ESTATE AI",
      title: "BRAIN FOR A BILLION-DOLLAR PORTFOLIO",
      description: "We architected a centralized data warehouse and custom machine learning models to predict asset performance and tenant churn with surgical precision. A total operational command system for modern real estate moguls.",
      metrics: [
        { val: "75%", label: "PROCESSING REDUCE", color: "text-blue-400" },
        { val: "94%", label: "PREDICTION ACCURACY", color: "text-emerald-400" }
      ],
      client: "Baresght",
      image: "/case-studies/real_estate.png",
      align: "right"
    },
    {
      tag: "FINTECH // HYPER-PERSONALIZATION",
      title: "REDEFINING THE DIGITAL WALLET EXPERIENCE",
      description: "Engineered a cutting-edge financial dashboard using AI-powered behavioral analytics. We rewired user engagement at the product level, creating a hyper-personalized journey for millions of active traders.",
      metrics: [
        { val: "60%", label: "CHURN REDUCTION", color: "text-blue-400" },
        { val: "35%", label: "DAU INCREASE", color: "text-emerald-400" }
      ],
      client: "Savvy App",
      image: "/case-studies/fintech.png",
      align: "left"
    },
    {
      tag: "INFRASTRUCTURE // SEMANTIC SEARCH",
      title: "SUB-100MS SEMANTIC INTELLIGENCE",
      description: "Built enterprise-grade semantic search infrastructure processing millions of complex queries. By leveraging language as a search medium, we achieved sub-100ms response times for a global user base.",
      metrics: [
        { val: "10M+", label: "DAILY QUERIES", color: "text-blue-400" },
        { val: "<100ms", label: "LATENCY", color: "text-emerald-400" }
      ],
      client: "Splore",
      image: "/case-studies/semantic.png",
      align: "right"
    }
  ]

  return (
    <section className="relative bg-[#050508] py-32 overflow-hidden">
      {/* Decorative background label */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none whitespace-nowrap select-none">
        <span className="text-[20vw] font-black font-heading tracking-tighter">SUCCESS</span>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-xs">Proven Impact</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-heading text-center text-white mb-6 uppercase tracking-tight">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Stories</span>
          </h2>
          <p className="text-gray-500 text-center max-w-xl font-light tracking-wide uppercase text-sm">
            Deconstructing complex business challenges into elegant digital victories.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-col gap-32">
          {features.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn(
                "flex flex-col lg:items-center gap-12 lg:gap-20",
                item.align === 'left' ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              {/* Visual Side */}
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating ID Tag */}
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] tracking-widest text-blue-400">
                    PRJ_ID: {i + 1} // ACTIVE
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1">
                <div className="flex flex-col gap-6">
                  <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-[10px] border-l-2 border-emerald-500 pl-4">
                    {item.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-12 mt-4">
                    {item.metrics.map((m, mi) => (
                      <div key={mi} className="flex flex-col">
                        <span className={cn("text-4xl font-black font-heading mb-1", m.color)}>
                          {m.val}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-white/20 font-bold tracking-[0.2em] text-xs uppercase">
                      Client: <span className="text-white/40">{item.client}</span>
                    </span>
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 text-blue-400 font-bold text-sm uppercase tracking-widest group"
                    >
                      Analyze Case
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



// Stats Section Component
function StatsSection() {
  const stats = [
    { number: "25+", label: "YEARS_OF_EXCELLENCE", description: "Engineering digital solutions since 1999" },
    { number: "500+", label: "PROJECTS_DELIVERED", description: "Successful transformations across industries" },
    { number: "98%", label: "CLIENT_SATISFACTION", description: "Building lasting partnerships" },
    { number: "$50M+", label: "$_VALUE_GENERATED", description: "Measurable business impact for our clients" }
  ]

  return (
    <section className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-widest uppercase flex flex-wrap items-center justify-center gap-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">MEASURABLE</span>
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>IMPACT</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="glass-card p-10 border border-white/5 group-hover:glow-edge-blue transition-all duration-500">
                <div
                  className="text-4xl md:text-5xl font-bold font-heading mb-2 tracking-tighter"
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)', color: 'transparent' }}
                >
                  {stat.number}
                </div>
                <div className="text-[10px] font-mono tracking-[0.3em] text-white opacity-60 mb-4 uppercase">
                  {stat.label}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed font-light">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact/CTA Section Component (Futuristic Contact Form)
function FuturisticContactSection() {
  return (
    <section className="relative py-32 md:py-48 mt-12 md:mt-24 overflow-hidden bg-[#050505]">
      {/* Vortex Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(0,209,255,0.1)_0%,_transparent_70%)] animate-[spin_20s_linear_infinite]" />
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row glass-effect overflow-hidden border border-white/10">

          {/* Left: Geometric Portal */}
          <div className="flex-1 bg-gradient-to-br from-primary/20 to-primary/5 p-12 md:p-20 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 blur-[80px] rounded-full" />

            <div className="relative z-10">
              <div className="w-12 h-1 bg-accent mb-8"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-8 tracking-wide flex flex-wrap gap-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">READY TO ENGINEER YOUR</span>
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>EVOLUTION?</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed font-light mb-8">
                Don't let technology be the bottleneck in your growth story. Let's architect the digital future your business deserves.
              </p>
              <p className="text-primary/70 font-mono tracking-widest text-xs uppercase mb-12">
                ESTABLISHING_SECURE_NODE_COMMUNICATION...
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-accent font-mono text-sm uppercase tracking-widest">Link Active</span>
              </div>
            </div>
          </div>

          {/* Right: Frosted Form */}
          <div className="flex-1 p-12 md:p-20 bg-surface/40 backdrop-blur-xl border-l border-white/10 flex flex-col justify-center relative">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <h3 className="text-xl md:text-2xl font-heading text-white tracking-[0.2em] uppercase">
                  Initialize Transmission
                </h3>
              </div>
              <p className="text-text-secondary font-mono text-xs tracking-widest opacity-60">
                SECURE_ENCRYPTED_CHANNEL // 256-BIT
              </p>
              <div className="w-full h-px mt-6 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="IDENTIFIER (NAME)"
                  className="w-full bg-transparent border-b border-white/20 py-4 font-mono text-xs tracking-[0.2em] focus:border-primary focus:outline-none transition-colors uppercase"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="COMM_CHANNEL (EMAIL)"
                  className="w-full bg-transparent border-b border-white/20 py-4 font-mono text-xs tracking-[0.2em] focus:border-primary focus:outline-none transition-colors uppercase"
                />
              </div>
              <div>
                <textarea
                  rows="3"
                  placeholder="TRANSMISSION_DATA (MESSAGE)"
                  className="w-full bg-transparent border-b border-white/20 py-4 font-mono text-xs tracking-[0.2em] focus:border-primary focus:outline-none transition-colors uppercase resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative w-full h-14 mt-8 overflow-hidden transition-all duration-500 active:scale-95"
              >
                {/* Neon core background */}
                <div className="absolute inset-0 bg-[#00D1FF] transition-all duration-500 group-hover:bg-[#00FF88]" />
                
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                
                {/* Border line */}
                <div className="absolute inset-[1px] border border-black/10 group-hover:border-white/20 transition-colors" />

                <span className="relative z-10 flex items-center justify-center gap-3 text-black text-[12px] font-bold tracking-[0.4em] uppercase">
                  SUBMIT_TRANSMISSION
                  <Zap className="w-3.5 h-3.5 group-hover:animate-pulse" />
                </span>

                {/* Corner highlights */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-white/30 rotate-45 translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-black/20 rotate-45 -translate-x-1 translate-y-1" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

// Main Homepage Component
export default function HomePage() {
  return (
    <main className="relative bg-[#050505]">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <SolutionsGridSection />
      <StatsSection />
      <SuccessGallery />
      <FuturisticContactSection />
      <Footer />
    </main>
  )
}
