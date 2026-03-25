'use client'

import { useRef, useState } from 'react'
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

      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">
        {/* Futuristic Headline Container */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-bold font-heading mb-6 leading-none tracking-tighter">
            <span className="block text-white">BEYOND CODE.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">BEYOND CUSTOM.</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>ENGINEER DIGITAL DNA.</span>
          </h1>
        </div>

        {/* Glassmorphic UI Card (Macro-View) */}
        <div className="relative w-full max-w-6xl group">
          <div className="absolute -inset-1 lg:-inset-2 bg-gradient-to-r from-primary to-accent rounded-none blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-effect glow-edge-blue p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 backdrop-blur-xl">

            {/* Left Content */}
            <div className="flex-1 text-left">
              <h2 className="text-2xl md:text-3xl font-heading text-white mb-6 tracking-wide">
                ELEVATE BUSINESS INTELLIGENCE WITH <span className="text-accent">AI-DRIVEN SOLUTIONS</span>
              </h2>
              <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed font-light">
                Klocrix doesn't just build software; we architect the foundational systems that transform ambitious companies into market leaders. We fuse 25 years of mastery with cutting-edge innovation to deliver bespoke solutions that are as unique as your ambition.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/services" className="btn-futuristic text-lg py-4 px-10">
                  EXPLORE PLATFORM
                </Link>
                <div className="hidden sm:flex items-center space-x-2 text-primary font-mono text-sm tracking-widest">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  <span>SYSTEM_ONLINE: VERSION_4.0</span>
                </div>
              </div>
            </div>

            {/* Right Visualization (Data Dash Mockup) */}
            <div className="flex-1 w-full max-w-[400px]">
              <div className="aspect-square border border-white/10 relative p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                {/* Simulated Data Visualization */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                  <path
                    d="M 10 90 L 30 70 L 50 80 L 70 40 L 90 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(0,209,255,0.8)]"
                  />
                  <circle cx="10" cy="90" r="2" fill="currentColor" />
                  <circle cx="30" cy="70" r="2" fill="currentColor" />
                  <circle cx="50" cy="80" r="2" fill="currentColor" />
                  <circle cx="70" cy="40" r="2" fill="currentColor" />
                  <circle cx="90" cy="20" r="2" fill="#39FF14" className="animate-pulse" />

                  {/* Grid lines */}
                  <line x1="10" y1="10" x2="10" y2="90" stroke="white" strokeWidth="0.2" opacity="0.3" />
                  <line x1="10" y1="90" x2="90" y2="90" stroke="white" strokeWidth="0.2" opacity="0.3" />
                </svg>
                {/* Floating scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[20%] w-full animate-scan" style={{ top: '-100%' }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
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
                <div className="inline-flex items-center gap-2 mt-6 px-3 py-1 self-start"
                  style={{ border: `1px solid ${accentColor}25`, background: `${accentColor}08`, fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '2px', color: `${accentColor}B0` }}>
                  <div className="w-1.5 h-1.5 rounded-full blink-dot" style={{ background: accentColor }} />
                  {item.stat}
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

// Feature Showcase Section Component
function FeatureShowcaseSection() {
  const features = [
    {
      tag: "CASE.01 // REAL ESTATE INTELLIGENCE",
      title: "BRAIN FOR A BILLION-DOLLAR PORTFOLIO",
      description: "Architected a centralized data warehouse and custom ML models to predict asset performance and tenant churn. A total operational command system.",
      metrics: [
        { val: "75%", label: "PROCESSING REDUCTION" },
        { val: "94%", label: "PREDICTION ACCURACY", green: true }
      ],
      client: "Baresght",
      badge: "PORTFOLIO INTELLIGENCE",
      align: "left"
    },
    {
      tag: "CASE.02 // FINTECH PERSONALIZATION",
      title: "HYPER-PERSONALIZED FINANCIAL DASHBOARD",
      description: "Engineered a cutting-edge financial dashboard with AI-powered personalization and real-time analytics. User behaviour rewired at the product level.",
      metrics: [
        { val: "60%", label: "CHURN REDUCTION" },
        { val: "35%", label: "DAU INCREASE", green: true }
      ],
      client: "Savvy App",
      badge: "FINTECH DASHBOARD",
      align: "right"
    },
    {
      tag: "CASE.03 // SEMANTIC INFRASTRUCTURE",
      title: "AI-POWERED SEMANTIC SEARCH ENGINE",
      description: "Built enterprise-grade semantic search infrastructure processing millions of complex queries with sub-100ms response. Language as a search medium.",
      metrics: [
        { val: "10M+", label: "DAILY QUERIES" },
        { val: "<100ms", label: "QUERY RESPONSE", green: true }
      ],
      client: "Splore",
      badge: "SEMANTIC SEARCH ENGINE",
      align: "left"
    }
  ]

  return (
    <section className="relative bg-[#050508] pb-24">

      {/* Section label */}
      <div className="flex items-center justify-center gap-6 mb-16 px-8">
        <div className="flex-1 max-w-[200px] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08))' }} />
        <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)' }}>CASE FILES</span>
        <div className="flex-1 max-w-[200px] h-px" style={{ background: 'linear-gradient(-90deg, transparent, rgba(255,255,255,0.08))' }} />
      </div>

      {features.map((feature, i) => {
        const isLeft = feature.align === 'left'
        const ContentBlock = (
          <div key="content" className="relative overflow-hidden p-14"
            style={{ background: 'rgba(8,12,22,0.8)', border: '1px solid rgba(0,209,255,0.12)' }}>
            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-px opacity-40"
              style={{ background: 'linear-gradient(90deg, transparent, #00D1FF, transparent)' }} />
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '4px', color: '#00D1FF', opacity: 0.6, marginBottom: '18px' }}>
              {feature.tag}
            </div>
            <h3 className="text-white mb-5" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(0.85rem,1.4vw,1rem)', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1.5 }}>
              {feature.title}
            </h3>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '0.92rem', color: 'rgba(180,210,240,0.6)', lineHeight: 1.8, fontWeight: 300 }}>
              {feature.description}
            </p>
            <div className="flex gap-8 mt-9">
              {feature.metrics.map((m, mi) => (
                <div key={mi} className="flex flex-col gap-1">
                  <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 900, color: m.green ? '#00FF88' : '#00D1FF', lineHeight: 1 }}>
                    {m.val}
                  </span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '3px', color: 'rgba(255,255,255,0.3)' }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )

        const VisualBlock = (
          <div key="visual" className="relative flex items-center justify-center overflow-hidden"
            style={{ background: 'rgba(4,8,18,0.95)', border: '1px solid rgba(0,209,255,0.1)', minHeight: '320px' }}>
            {/* Radar rings */}
            {[60, 120, 200, 300].map((size, ri) => (
              <div key={ri} className="radar-ring absolute"
                style={{ width: size, height: size, animationDelay: `${-ri}s` }} />
            ))}
            {/* Brackets */}
            {[
              { top: '16px', left: '16px', borderTop: '1.5px solid rgba(0,209,255,0.5)', borderLeft: '1.5px solid rgba(0,209,255,0.5)' },
              { top: '16px', right: '16px', borderTop: '1.5px solid rgba(0,209,255,0.5)', borderRight: '1.5px solid rgba(0,209,255,0.5)' },
              { bottom: '16px', left: '16px', borderBottom: '1.5px solid rgba(0,209,255,0.5)', borderLeft: '1.5px solid rgba(0,209,255,0.5)' },
              { bottom: '16px', right: '16px', borderBottom: '1.5px solid rgba(0,209,255,0.5)', borderRight: '1.5px solid rgba(0,209,255,0.5)' },
            ].map((s, bi) => <div key={bi} className="absolute w-8 h-8" style={s} />)}
            <div className="relative z-10 text-center">
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 900, color: 'rgba(255,255,255,0.07)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                {feature.client}
              </div>
              <div className="inline-block mt-4 px-4 py-1.5"
                style={{ border: '1px solid rgba(0,209,255,0.25)', fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '3px', color: 'rgba(0,209,255,0.5)' }}>
                {feature.badge}
              </div>
            </div>
          </div>
        )

        return (
          <div key={i} className="grid grid-cols-2 mb-px" style={{ opacity: 1 }}>
            {isLeft ? [ContentBlock, VisualBlock] : [VisualBlock, ContentBlock]}
          </div>
        )
      })}
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
                <div className="text-text-secondary text-sm leading-relaxed font-light">
                  {stat.description}
                </div>
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
                className="w-full btn-futuristic mt-8"
              >
                SUBMIT_TRANSMISSION
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
      <FeatureShowcaseSection />
      <FuturisticContactSection />
      <Footer />
    </main>
  )
}
