'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
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

// Contact form component
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      })
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      })
    }

    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      className="card max-w-2xl"
    >
      <h3 className="text-2xl font-bold font-heading mb-6 text-text-primary">
        Let's Discuss Your Project
      </h3>

      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center space-x-2 p-4 rounded-lg mb-6 ${status.type === 'success'
              ? 'bg-green-500/20 border border-green-500/50 text-green-400'
              : 'bg-red-500/20 border border-red-500/50 text-red-400'
            }`}
        >
          {status.type === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <span className="text-sm">{status.message}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-secondary transition-all duration-200"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-secondary transition-all duration-200"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-secondary transition-all duration-200"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-secondary transition-all duration-200"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder-text-secondary transition-all duration-200 resize-none"
            placeholder="Tell us about your project, challenges, and goals. The more details you provide, the better we can help you."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}

// Hero Section
export function ContactHero() {
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Ready to Engineer</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>Your Evolution?</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Tell us about your vision. We'll handle the technology.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Interactive FAQ Section
export function InteractiveFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple projects can take 4-8 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with startups or only large companies?",
      answer: "We work with businesses of all sizes, from innovative startups to Fortune 500 companies. Our scalable approach ensures we deliver value regardless of your company size."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies (React, Next.js), mobile development (React Native, Flutter), cloud platforms (AWS, Azure), and data science tools (Python, TensorFlow). We always choose the best technology for your specific needs."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, and feature enhancements. We believe in long-term partnerships with our clients."
    },
    {
      question: "Can you work with our existing development team?",
      answer: "Absolutely! We often collaborate with in-house teams, providing expertise in specific areas or augmenting your development capacity during critical periods."
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Frequently Asked</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="card hover:cosmic-glow transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${openFAQ === index ? 'rotate-45' : ''
                  }`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-0.5 bg-accent"></div>
                    <div className="w-0.5 h-4 bg-accent absolute"></div>
                  </div>
                </div>
              </button>

              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-800"
                >
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}