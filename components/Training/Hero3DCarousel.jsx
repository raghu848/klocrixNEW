'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ArrowDown, Check, Phone, Zap, Target, TrendingUp, Sparkles, BookOpen, Laptop, FileText, Award, GraduationCap } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Live Training',
    description: '100% Live Sessions by Industry Experts',
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
    stats: '90% Placement',
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

// Study Materials 3D Scene
function StudyMaterialsScene() {
  const canvasRef = useRef(null)
  const itemsRef = useRef([])
  const animationRef = useRef()
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const timeRef = useRef(0)
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })
    if (!ctx) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    // Initialize 3D study items
    const isMobile = window.innerWidth < 768
    const itemCount = isMobile ? 8 : 12
    const items = []

    const types = ['book', 'laptop', 'notebook', 'certificate', 'note']
    const colors = ['#F9C74F', '#00d4ff', '#00ff88', '#ff6b9d', '#FFC300']

    for (let i = 0; i < itemCount; i++) {
      items.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 1000,
        rotateX: Math.random() * 30 - 15,
        rotateY: Math.random() * 30 - 15,
        rotateZ: Math.random() * 20 - 10,
        type: types[i % types.length],
        speed: 0.3 + Math.random() * 0.5,
        scale: 0.7 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        color: colors[i % colors.length],
      })
    }
    itemsRef.current = items

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }

    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    // Render 3D study materials
    let lastTime = 0
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime
      if (deltaTime < 16.67) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastTime = currentTime
      timeRef.current += 0.01

      // Dynamic gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight)
      gradient.addColorStop(0, '#1a1a2e')
      gradient.addColorStop(0.5, '#16213e')
      gradient.addColorStop(1, '#0f3460')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Animated radial glow
      const glowGradient = ctx.createRadialGradient(
        window.innerWidth * 0.5,
        window.innerHeight * 0.3,
        0,
        window.innerWidth * 0.5,
        window.innerHeight * 0.3,
        window.innerWidth * 0.8
      )
      glowGradient.addColorStop(0, 'rgba(15, 159, 255, 0.08)')
      glowGradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.04)')
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Sort items by z-index for proper layering
      const sortedItems = [...items].sort((a, b) => b.z - a.z)

      sortedItems.forEach((item) => {
        // Floating animation
        item.phase += 0.02 * item.speed
        item.y += Math.sin(item.phase) * 0.5
        item.rotateY += 0.3
        item.rotateX += 0.1

        // Parallax effect
        const parallaxX = (mouseRef.current.x - 0.5) * 100 * (1 - item.z / 1000)
        const parallaxY = (mouseRef.current.y - 0.5) * 100 * (1 - item.z / 1000)

        // 3D projection
        const scale = 1000 / (1000 + item.z)
        const x = (item.x - window.innerWidth / 2) * scale + window.innerWidth / 2 + parallaxX
        const y = (item.y - window.innerHeight / 2) * scale + window.innerHeight / 2 + parallaxY
        const size = item.scale * 100 * scale

        const opacity = Math.max(0.3, 1 - item.z / 1000)

        ctx.save()
        ctx.translate(x, y)
        
        // Apply 3D rotations simulation
        const rotateEffect = Math.cos(item.rotateY * Math.PI / 180) * 0.3 + 0.7

        // Draw different study materials
        ctx.globalAlpha = opacity

        if (item.type === 'book') {
          // Draw book
          const bookWidth = size * 1.2 * rotateEffect
          const bookHeight = size * 0.8

          // Shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
          ctx.fillRect(-bookWidth/2 + 5, -bookHeight/2 + 5, bookWidth, bookHeight)

          // Book cover
          const bookGradient = ctx.createLinearGradient(-bookWidth/2, 0, bookWidth/2, 0)
          bookGradient.addColorStop(0, item.color)
          bookGradient.addColorStop(0.5, item.color + 'dd')
          bookGradient.addColorStop(1, item.color)
          ctx.fillStyle = bookGradient
          ctx.fillRect(-bookWidth/2, -bookHeight/2, bookWidth, bookHeight)

          // Book spine
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
          ctx.fillRect(-bookWidth/2, -bookHeight/2, bookWidth * 0.08, bookHeight)

          // Pages effect
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
          ctx.fillRect(bookWidth/2 - 3, -bookHeight/2 + 2, 3, bookHeight - 4)

          // Title decoration
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.font = `${size * 0.15}px Arial`
          ctx.textAlign = 'center'
          ctx.fillText('DIGITAL', 0, -size * 0.1)
          ctx.fillText('MARKETING', 0, size * 0.1)

        } else if (item.type === 'laptop') {
          // Draw laptop
          const laptopWidth = size * 1.5 * rotateEffect
          const laptopHeight = size

          // Laptop base
          ctx.fillStyle = '#2d3436'
          ctx.fillRect(-laptopWidth/2, 0, laptopWidth, laptopHeight * 0.3)

          // Screen
          const screenGradient = ctx.createLinearGradient(0, -laptopHeight, 0, 0)
          screenGradient.addColorStop(0, '#1a1a1a')
          screenGradient.addColorStop(1, '#2d2d2d')
          ctx.fillStyle = screenGradient
          ctx.fillRect(-laptopWidth/2 + 10, -laptopHeight * 0.9, laptopWidth - 20, laptopHeight * 0.85)

          // Screen glow
          ctx.fillStyle = item.color + '40'
          ctx.fillRect(-laptopWidth/2 + 15, -laptopHeight * 0.85, laptopWidth - 30, laptopHeight * 0.75)

          // Dashboard graphics
          ctx.strokeStyle = item.color
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(-laptopWidth/4, -laptopHeight * 0.5)
          ctx.lineTo(-laptopWidth/8, -laptopHeight * 0.3)
          ctx.lineTo(0, -laptopHeight * 0.6)
          ctx.lineTo(laptopWidth/8, -laptopHeight * 0.35)
          ctx.lineTo(laptopWidth/4, -laptopHeight * 0.25)
          ctx.stroke()

        } else if (item.type === 'notebook') {
          // Draw notebook
          const noteWidth = size * 0.9 * rotateEffect
          const noteHeight = size * 1.1

          // Notebook cover
          ctx.fillStyle = item.color + 'cc'
          ctx.fillRect(-noteWidth/2, -noteHeight/2, noteWidth, noteHeight)

          // Spiral binding
          for (let i = 0; i < 10; i++) {
            ctx.fillStyle = '#888'
            ctx.beginPath()
            ctx.arc(-noteWidth/2, -noteHeight/2 + (i * noteHeight/10) + noteHeight/20, 2, 0, Math.PI * 2)
            ctx.fill()
          }

          // Notes lines
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
          ctx.lineWidth = 1
          for (let i = 1; i < 6; i++) {
            ctx.beginPath()
            ctx.moveTo(-noteWidth/2 + 10, -noteHeight/2 + (i * noteHeight/7))
            ctx.lineTo(noteWidth/2 - 10, -noteHeight/2 + (i * noteHeight/7))
            ctx.stroke()
          }

        } else if (item.type === 'certificate') {
          // Draw certificate
          const certWidth = size * 1.4 * rotateEffect
          const certHeight = size

          // Certificate background
          ctx.fillStyle = '#fffef0'
          ctx.fillRect(-certWidth/2, -certHeight/2, certWidth, certHeight)

          // Border
          ctx.strokeStyle = item.color
          ctx.lineWidth = 3
          ctx.strokeRect(-certWidth/2 + 5, -certHeight/2 + 5, certWidth - 10, certHeight - 10)

          // Seal
          ctx.fillStyle = item.color + '80'
          ctx.beginPath()
          ctx.arc(certWidth/3, certHeight/3, size * 0.15, 0, Math.PI * 2)
          ctx.fill()

        } else if (item.type === 'note') {
          // Draw sticky note
          const noteSize = size * 0.7

          // Note background
          ctx.fillStyle = item.color
          ctx.fillRect(-noteSize/2, -noteSize/2, noteSize, noteSize)

          // Keyword
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
          ctx.font = `bold ${noteSize * 0.2}px Arial`
          ctx.textAlign = 'center'
          const keywords = ['SEO', 'PPC', 'ROI', 'CTA', 'KPI']
          ctx.fillText(keywords[Math.floor(item.phase) % keywords.length], 0, size * 0.05)

          // Fold corner
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
          ctx.beginPath()
          ctx.moveTo(noteSize/2, -noteSize/2)
          ctx.lineTo(noteSize/2, -noteSize/2 + noteSize * 0.2)
          ctx.lineTo(noteSize/2 - noteSize * 0.2, -noteSize/2)
          ctx.closePath()
          ctx.fill()
        }

        ctx.restore()

        // Depth-based movement
        if (item.y < -size) {
          item.y = window.innerHeight + size
          item.x = Math.random() * window.innerWidth
        }
        if (item.y > window.innerHeight + size) {
          item.y = -size
          item.x = Math.random() * window.innerWidth
        }
      })

      // Floating keywords overlay
      ctx.font = 'bold 14px Arial'
      ctx.fillStyle = 'rgba(0, 212, 255, 0.15)'
      floatingKeywords.forEach((keyword, i) => {
        const x = 50 + (i * 150) + Math.sin(timeRef.current + i) * 20
        const y = 30 + Math.cos(timeRef.current * 0.5 + i) * 10
        ctx.fillText(keyword.text, x, y)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    window.addEventListener('resize', resize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

// Decorative Elements
function FloatingStudyIcons() {
  const icons = [
    { Icon: BookOpen, color: '#F9C74F', delay: 0 },
    { Icon: Laptop, color: '#00d4ff', delay: 1 },
    { Icon: FileText, color: '#00ff88', delay: 2 },
    { Icon: Award, color: '#ff6b9d', delay: 3 },
    { Icon: GraduationCap, color: '#FFC300', delay: 4 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${15 + index * 18}%`,
            top: `${20 + (index % 2) * 40}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          <item.Icon size={60} style={{ color: item.color, opacity: 0.2 }} />
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero3DFuturistic() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const y = useTransform(smoothScrollProgress, [0, 1], [0, -200])
  const opacity = useTransform(smoothScrollProgress, [0, 0.5], [1, 0])
  const scale = useTransform(smoothScrollProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x, y })
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const whatsappLink = 'https://wa.me/917508535271?text=Hi%2C%20I%27m%20interested%20in%20Klocrix%20Training'

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#1a1a2e]"
    >
      {/* 3D Study Materials Scene */}
      <StudyMaterialsScene />

      {/* Floating Study Icons */}
      <FloatingStudyIcons />

      {/* Bokeh Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#F9C74F', '#00d4ff', '#00ff88'][i % 3]
              }20, transparent)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a2e]/40 to-[#1a1a2e]/70 backdrop-blur-[3px]" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20"
      >
        {/* Hero Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="inline-block mt-10 md:mt-12 mb-6"
          >
            <div className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#00d4ff]/15 to-[#00ff88]/15 border-2 border-[#00d4ff]/40 backdrop-blur-xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/30 to-[#00ff88]/30"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <p className="relative text-[#00d4ff] font-bold text-sm sm:text-base flex items-center gap-2">
                <BookOpen size={18} className="animate-pulse flex-shrink-0" />
                <span>Next Batch Starts Soon - Only 5 Seats Remaining!</span>
                <GraduationCap size={18} className="animate-pulse flex-shrink-0" />
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[1.1] uppercase tracking-tighter"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Master Digital</span>
            <span className="block" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)', color: 'transparent' }}>Marketing</span>
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#F9C74F] to-[#00ff88] mt-4 text-3xl md:text-4xl lg:text-5xl tracking-widest"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              style={{
                backgroundSize: '300% 300%',
                filter: 'drop-shadow(0 0 30px rgba(249, 199, 79, 0.3))',
                WebkitTextStroke: '0px'
              }}
            >
              From Expert Training
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/90 mb-4 max-w-4xl mx-auto font-semibold"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
          >
            India's Most Comprehensive Digital Marketing Course
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
          >
            Live sessions • Real projects • Industry certifications • Job placement support
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 rounded-full font-black text-xl overflow-hidden shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F9C74F] via-[#FFC300] to-[#F9C74F]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              <div className="relative flex items-center gap-3 text-[#1a1a2e]">
                <Phone size={24} />
                <span>Start Learning - ₹30,000</span>
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-2xl"
                >
                  →
                </motion.span>
              </div>
            </motion.a>

            <motion.button
              onClick={() => {
                document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full font-bold text-xl border-3 border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl transition-all duration-300 flex items-center gap-3"
            >
              View Course Syllabus
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.6 + index * 0.15,
                type: 'spring',
                stiffness: 80,
              }}
              whileHover={{
                y: -20,
                scale: 1.05,
              }}
              className="relative group cursor-pointer"
            >
              <div className="relative h-full p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-500">
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>

                <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mb-4`}>
                  <span className="text-white text-sm font-bold">{feature.stats}</span>
                </div>

                <h3 className="text-3xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 flex flex-wrap justify-center gap-4 uppercase tracking-widest">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Complete Course</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Curriculum</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.08,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-[#00d4ff]/60 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <Check className="text-[#00ff88]" size={24} />
                  <p className="text-white/90 text-sm font-bold">{skill}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-white/70 text-sm font-semibold">Scroll to explore</p>
          <div className="w-7 h-11 rounded-full border-3 border-[#00d4ff]/60 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#00d4ff]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

