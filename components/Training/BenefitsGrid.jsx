'use client'

import { useState, useEffect, useRef } from 'react'
import { Video, Briefcase, Target, TrendingUp, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '../../lib/utils'

const benefits = [
  {
    id: 1,
    title: "LIVE Training Only",
    icon: Video,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    glowColor: "shadow-blue-500/20",
    borderColor: "border-blue-400/20",
    gradient: "from-blue-500/20 to-transparent",
    description: "No recorded boring lectures. Real-time interaction with industry experts. Get your questions answered instantly and participate in live coding sessions.",
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
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    glowColor: "shadow-purple-500/20",
    borderColor: "border-purple-400/20",
    gradient: "from-purple-500/20 to-transparent",
    description: "Work on actual live projects, not dummy data. Build a real portfolio. Experience the pressure and thrill of delivering for actual stakeholders.",
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
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    glowColor: "shadow-emerald-500/20",
    borderColor: "border-emerald-400/20",
    gradient: "from-emerald-500/20 to-transparent",
    description: "Our 90% Practical Training methodology ensures you are JOB READY from day one. Learn by doing with real-world case studies and live campaigns.",
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
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    glowColor: "shadow-orange-500/20",
    borderColor: "border-orange-400/20",
    gradient: "from-orange-500/20 to-transparent",
    description: "Our graduates are working in top agencies and companies globally. Join a thriving alumni network that opens doors to exclusive opportunities.",
    features: [
      "Comprehensive Placement Ecosystem",
      "Freelancing Guidance",
      "Agency Launchpad"
    ]
  }
]

export default function BenefitsGrid() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0-1 progress to 0, 1, 2, 3
    const index = Math.min(
      Math.floor(latest * benefits.length),
      benefits.length - 1
    )
    if (index !== activeSection) {
      setActiveSection(index)
    }
  })

  const scrollToSection = (index) => {
    const scrollAmount = (index / (benefits.length - 1)) * (containerRef.current.offsetHeight - window.innerHeight)
    window.scrollTo({
      top: containerRef.current.offsetTop + scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#050505] font-sans"
      style={{ height: `${benefits.length * 100}vh` }}
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Left Column - Sticky Image & Nav Overlay */}
        <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full overflow-hidden z-0">
          {/* Animated Background Image */}
          <motion.div 
            className="absolute inset-0"
            animate={{ scale: 1 + (activeSection * 0.05) }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src="/training-benefits-bg.jpeg"
              alt="Developer Workspace"
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
          </motion.div>
          
          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />
          
          {/* Dynamic Color Gradient Overlay based on active section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={cn("absolute inset-0 bg-gradient-to-br mix-blend-color z-10 mix-blend-overlay", benefits[activeSection]?.gradient)}
            />
          </AnimatePresence>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-16 xl:p-24 flex flex-col justify-center z-20 w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                  <Sparkles className="w-5 h-5" />
                </span>
                <span className="text-yellow-400 font-medium tracking-widest uppercase text-xs md:text-sm">The Klocrix Advantage</span>
              </div>
              
              <h2 className="font-heading text-6xl xl:text-[5rem] font-bold mb-8 max-w-xl leading-[1.1] tracking-tight uppercase">
                <span className="text-white block mb-2 opacity-90 drop-shadow-lg">Why Choose</span> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 block drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">Klocrix?</span>
              </h2>
              
              <p className="text-gray-400 text-lg xl:text-xl max-w-lg leading-relaxed font-light">
                We don't just teach theory; we build careers. Our hands-on approach ensures you're ready for the industry from day one.
              </p>
            </motion.div>
          </div>

          {/* Floating Indicator */}
          <div className="absolute left-16 xl:left-24 bottom-16 z-20 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-white"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeSection + 1) / benefits.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-white/60 text-sm font-medium tracking-widest">SCROLL</span>
          </div>
        </div>

        {/* Right Column - Content Overlay */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none no-scrollbar">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isActive = activeSection === index

            return (
              <div
                key={benefit.id}
                className={cn(
                  "absolute inset-0 w-full h-full flex flex-col lg:flex-row transition-all duration-700 ease-in-out",
                  isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
                )}
              >
                {/* Left transparent spacer */}
                <div className="hidden lg:block lg:w-1/2 h-full" />

                {/* Right side content */}
                <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center p-6 sm:p-10 md:p-16 relative">
                  {/* Background gradient for mobile */}
                  <div className={cn("absolute inset-0 opacity-10 lg:hidden bg-gradient-to-b", benefit.gradient)} />
                  
                  <div className="max-w-xl w-full relative z-10">
                    <motion.div
                      initial={false}
                      animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="relative"
                    >
                      {/* Decorative Number */}
                      <motion.div 
                        initial={false}
                        animate={isActive ? { opacity: 0.05, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="absolute -top-6 -right-2 md:-right-10 text-[8rem] md:text-[14rem] font-bold text-white select-none font-serif leading-none z-0 pointer-events-none"
                      >
                        0{index + 1}
                      </motion.div>

                      {/* Glassmorphic Card */}
                      <div className={cn(
                        "relative z-10 bg-[#0A0A0A]/60 backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-[2rem] overflow-hidden transition-all duration-700",
                        isActive ? `shadow-2xl ${benefit.glowColor}` : "shadow-none border-transparent"
                      )}>
                        
                        {/* Glow effect behind icon */}
                        <div className={cn("absolute top-0 left-0 w-40 h-40 blur-[100px] rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700", benefit.bgColor, isActive ? "opacity-60" : "opacity-0")} />

                        {/* Header Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                          <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center border relative z-10 transition-colors duration-500", 
                            isActive ? cn(benefit.bgColor, benefit.borderColor) : "bg-white/5 border-white/10"
                          )}>
                            <Icon className={cn("w-8 h-8 transition-colors duration-500", isActive ? benefit.color : "text-gray-500")} />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className={cn("text-2xl md:text-3xl font-heading font-bold mb-3 uppercase tracking-wide transition-colors duration-500",
                              isActive ? "text-white" : "text-gray-500"
                            )}>
                              {benefit.title}
                            </h3>
                            {/* Animated Divider */}
                            <div className="h-1 bg-white/5 rounded-full overflow-hidden w-full max-w-[200px]">
                              <motion.div 
                                initial={false}
                                animate={{ width: isActive ? "100%" : "0%" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={cn("h-full rounded-full bg-gradient-to-r", benefit.gradient)} 
                              />
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className={cn("text-lg leading-relaxed mb-10 transition-colors duration-500",
                          isActive ? "text-gray-300" : "text-gray-600"
                        )}>
                          {benefit.description}
                        </p>

                        {/* Features List Base */}
                        <ul className="space-y-4 mb-2">
                          {benefit.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              initial={false}
                              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.4, delay: isActive ? 0.3 + (idx * 0.1) : 0 }}
                              className="flex items-center gap-4 group cursor-default"
                            >
                              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300", 
                                isActive ? benefit.bgColor : "bg-white/5"
                              )}>
                                <CheckCircle className={cn("w-4 h-4", isActive ? benefit.color : "text-gray-600")} />
                              </div>
                              <span className={cn("font-medium transition-colors duration-300",
                                isActive ? "text-gray-200" : "text-gray-600"
                              )}>
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Step Counter & Interactions */}
                      <div className="mt-8 flex items-center justify-between px-2">
                        <div className="flex items-center gap-4 text-sm font-medium tracking-widest">
                          <span className={cn(isActive ? benefit.color : "text-gray-600", "transition-colors duration-300")}>
                            0{index + 1}
                          </span>
                          <div className="w-12 h-[1px] bg-white/10" />
                          <span className="text-gray-600">0{benefits.length}</span>
                        </div>

                        <button 
                          onClick={() => {
                            if (index < benefits.length - 1) scrollToSection(index + 1)
                          }}
                          className={cn("flex items-center gap-2 text-sm font-medium transition-all duration-300 pointer-events-auto", 
                            index === benefits.length - 1 ? "opacity-0 pointer-events-none" : "text-gray-400 hover:text-white hover:translate-x-1"
                          )}
                        >
                          Next <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </motion.div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Visual Scroll Indicator (Right Nav Dots) - Hidden on Mobile */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
          {benefits.map((benefit, index) => {
            const isActive = activeSection === index
            const activeDotColor = benefit.color.replace('text-', 'bg-')
            
            return (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className="relative group p-2 flex items-center justify-center outline-none"
                aria-label={`Go to section ${index + 1}`}
              >
                <motion.div 
                  animate={{ 
                    scale: isActive ? 1 : 0, 
                    opacity: isActive ? 1 : 0 
                  }}
                  className={cn("absolute w-6 h-6 rounded-full border-2", benefit.borderColor)}
                />
                <div className={cn(
                  "w-2 h-2 rounded-full transition-all duration-500 relative z-10",
                  isActive ? activeDotColor : "bg-white/20 group-hover:bg-white/50"
                )} />
                <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#111] border border-white/10 text-white text-xs py-2 px-4 rounded-lg pointer-events-none drop-shadow-xl font-medium tracking-wide">
                  {benefit.title}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
