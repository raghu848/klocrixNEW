'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import CosmicBackground from './SimpleCosmicBackground'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Hero Section
export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CosmicBackground />

      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-bold font-heading mb-6 leading-none tracking-tighter"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">The Void</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>We Exist to Fill</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Engineering the digital future without compromise since 1999
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Our Story Section
export function OurStorySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap items-center justify-center gap-4 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Our</span>
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>Story</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="card text-lg leading-relaxed space-y-6 text-text-secondary"
          >
            <p>
              Klocrix was founded on a simple, frustrating observation: the world is full of software developers, but desperately short of true digital architects. Companies were being sold generic solutions that forced them to compromise their vision and alter their unique processes. We knew there was a better way.
            </p>

            <p>
              Founded in Mohali and operating globally, we are a collective of engineers, designers, and strategists united by a single mission: to become the external strategic partner that visionary companies rely on to build their digital future without compromise.
            </p>

            <p className="text-text-primary font-semibold">
              We don't follow trends; we build the systems that set them.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Mission & Vision Section
export function MissionVisionSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To arm ambitious businesses with the definitive technological advantage by fusing relentless innovation with proven expertise.",
      gradient: "from-[#10CEE4] to-cyan-500"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the undisputed first choice for leaders who refuse to let technology be a limiting factor in their growth.",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="card group hover:cosmic-glow transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-text-primary group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// Why Choose Us Section
export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "25+ years of delivering transformational results across industries, from startups to Fortune 500 companies.",
      stats: "500+ Projects Delivered"
    },
    {
      icon: Users,
      title: "Elite Team",
      description: "Hand-picked specialists in engineering, data science, and strategic design who've worked with the world's most demanding companies.",
      stats: "50+ Expert Engineers"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Operating from Mohali and Luton, we combine local understanding with international best practices.",
      stats: "20+ Countries Served"
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "We don't just build software; we engineer solutions that drive real business value and competitive advantage.",
      stats: "$50M+ Value Generated"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap items-center justify-center gap-4 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Why Visionary Leaders</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Choose Klocrix</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="card group hover:cosmic-glow transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-heading mb-2 text-text-primary group-hover:text-accent transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      {reason.description}
                    </p>
                    <div className="text-accent font-semibold text-sm">
                      {reason.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// Team Section
export function TeamSection() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap items-center justify-center gap-4 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Meet the</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Architects of Innovation</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="card"
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Our team combines decades of experience with cutting-edge expertise. From seasoned architects to brilliant innovators, every member of our team is united by one goal: engineering your digital evolution.
            </p>

            <div className="text-center">
              <Link href="/contact" className="btn-primary">
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="card text-center cosmic-glow max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap items-center justify-center gap-4 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Ready to Join Our</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Success Stories?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Discover how Klocrix can transform your business with 25+ years of proven expertise and cutting-edge innovation.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Start Your Journey
            </Link>
            <Link href="/work" className="btn-secondary text-lg px-10 py-4">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}