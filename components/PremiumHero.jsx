'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Code, Shield, Activity, Database } from 'lucide-react'
import dynamic from 'next/dynamic'
const TubesBackground = dynamic(() => import('./TubesBackground'), { ssr: false })

// Premium 3D Geometric Background
const Elegant3DBackground = () => {
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 })
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100])

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }
    checkMobile()
    
    const handleResize = () => checkMobile()
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [mouseX, mouseY])

  if (!mounted) {
    return <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]" />
  }

  if (isMobile) {
    return (
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div className="absolute w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
        <div className="relative z-10 w-48 h-48 rounded-[2rem] border border-white/20 backdrop-blur-xl bg-white/5 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
           <Database className="w-10 h-10 text-accent mb-4" />
           <p className="text-white font-bold">Cloud Ready</p>
           <p className="text-slate-400 text-[10px] mt-2">Enterprise Infrastructure</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000">
      
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          y: parallaxY,
          transformStyle: "preserve-3d" 
        }}
        className="relative w-full max-w-[280px] md:max-w-lg"
      >
        {/* Soft Depth Layer 1 - Outer Mesh Glow */}
        <div 
          className="absolute inset-0 m-auto w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/5 opacity-50 animate-spin-slow"
          style={{ transform: "translateZ(-100px)", background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)", animationDuration: '100s' }}
        />

        {/* Floating Glass Plate 1 - Code/Data Component */}
        <div 
          className="absolute inset-0 m-auto w-48 h-48 md:w-72 md:h-72 z-10 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-[0_0_80px_rgba(14,165,233,0.15)] backdrop-blur-3xl bg-transparent flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 animate-float"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <div 
            className="absolute m-auto w-40 h-40 bg-[#0EA5E9] rounded-full blur-[60px] pointer-events-none animate-pulse"
            style={{ animationDuration: '6s' }}
          />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md">
              <Database className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Cloud Infrastructure</h3>
            <p className="text-slate-400 text-xs">Scaling 10M+ Operations</p>
            
            <div className="w-full mt-6 space-y-2">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent rounded-full w-4/5" 
                />
              </div>
              <div className="h-2 w-3/4 mx-auto bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#14B8A6] rounded-full w-full" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Glass Plate 2 - Security */}
        <div 
          className="absolute -bottom-10 -left-4 md:-bottom-16 md:-left-8 w-32 h-32 md:w-48 md:h-48 z-20 rounded-[1.5rem] md:rounded-[2rem] border border-white/20 shadow-[0_30px_60px_rgba(20,184,166,0.15)] backdrop-blur-2xl bg-transparent flex flex-col items-center justify-center animate-float"
          style={{ transform: "translateZ(120px)", animationDelay: '1s', animationDuration: '10s' }}
        >
          <div className="absolute inset-0 w-full h-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#14B8A6]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <div 
              className="text-[#14B8A6] mb-3 animate-spin-slow"
              style={{ animationDuration: '8s' }}
            >
              <Shield className="w-10 h-10 mx-auto" />
            </div>
            <p className="text-white font-black tracking-widest text-xl">99.99%</p>
            <p className="text-slate-400 uppercase text-[10px] font-bold tracking-widest mt-1">Uptime</p>
          </div>
        </div>

        {/* Small floating particles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#0EA5E9]/40 blur-[2px] animate-float"
            style={{
              width: ((i * 3) % 10) + 4 + "px",
              height: ((i * 3) % 10) + 4 + "px",
              left: ((i * 21) % 100) + "%",
              top: ((i * 37) % 100) + "%",
              transform: `translateZ(${((i * 41) % 150) + 50}px)`,
              animationDuration: `${((i * 7) % 5) + 5}s`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

        {/* Floating Glass Plate 3 - Performance */}
        <div 
          className="absolute top-0 -right-2 md:-right-4 w-24 h-24 md:w-32 md:h-32 z-30 rounded-[1rem] md:rounded-[1.5rem] border border-white/20 shadow-2xl backdrop-blur-xl bg-transparent flex items-center justify-center overflow-hidden animate-float"
          style={{ transform: "translateZ(180px)", animationDuration: '7s', animationDelay: '2s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/20 to-transparent rounded-[1.5rem] pointer-events-none" />
          <div className="relative z-10 flex items-center justify-center">
            <div
               className="p-3 bg-white/10 rounded-full animate-pulse"
               style={{ animationDuration: '2s' }}
            >
              <Activity className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default function PremiumHero({ 
  title, 
  rotatingPhrases = [],
  subtitle, 
  description, 
  primaryLink = "/contact", 
  primaryLinkText = "Start Project", 
  secondaryLink = "/services", 
  secondaryLinkText = "Our Capabilities",
  children,
  splitTitle = false,
  bgComponent
}) {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 50])

  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    if (rotatingPhrases.length > 0) {
      const interval = setInterval(() => {
        setCurrentPhrase((prev) => (prev + 1) % rotatingPhrases.length)
      }, 5000) // Change 5 seconds
      return () => clearInterval(interval)
    }
  }, [rotatingPhrases.length])

  const titleWords = typeof title === 'string' ? title.split(" ") : []

  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 md:pt-32 lg:pt-32 pb-12 overflow-hidden bg-[#0B1220]">
      {/* Dynamic Background Layer */}
      {bgComponent ? bgComponent : <TubesBackground className="absolute inset-0 z-0 !bg-transparent" />}
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B1220]/70 via-[#0B1220]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10 pointer-events-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            style={{ opacity, y }}
            className="flex flex-col items-start"
          >
            {/* Subtitle Badge */}
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-slate-300 text-xs font-bold tracking-[0.2em] uppercase mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                {subtitle}
              </motion.div>
            )}
            
            {/* Main Title using Manrope */}
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] md:leading-[1.05] tracking-tight mb-8 text-white font-[family-name:var(--font-manrope)]">
              {rotatingPhrases.length > 0 ? (
                <>
                  <span className="block mb-4 text-2xl md:text-4xl lg:text-5xl text-slate-200 whitespace-pre-line">{title}</span>
                  <span className="block relative text-accent min-h-[3em] lg:min-h-[1.5em] overflow-visible">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPhrase}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block w-full"
                      >
                        {rotatingPhrases[currentPhrase]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </>
              ) : splitTitle ? (
                titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "20%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`inline-block mr-3 ${['Scalable', 'IT', 'Solutions', 'Excellence', 'Digital', 'Evolution'].includes(word) ? "text-accent" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))
              ) : (
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block"
                >
                  {title}
                </motion.span>
              )}
            </h1>

            {/* Description */}
            {description && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-light"
              >
                {description}
              </motion.p>
            )}

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Link href={primaryLink} className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(14,165,233,0.4)] transition-all hover:bg-accent/90 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  {primaryLinkText}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link href={secondaryLink} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-white/20 font-bold rounded-xl hover:bg-white/5 hover:border-white/40 transition-all active:scale-95">
                {secondaryLinkText}
                <ChevronRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
          </motion.div>
          
          {/* Right Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="block relative mt-12 lg:mt-0 w-full"
          >
            {children ? children : <Elegant3DBackground />}
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
