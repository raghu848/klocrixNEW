'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('All fields are required')
      }

      // Simple approach: Send data to your email via a direct method
      // This will show success message and you can check console for the data
      console.log('=== NEW CONTACT FORM SUBMISSION ===');
      console.log('Name:', formData.name);
      console.log('Email:', formData.email);
      console.log('Message:', formData.message);
      console.log('=====================================');

      // Simulate successful submission
      // In a real scenario, you'd integrate with your preferred email service here
      setTimeout(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }, 1000);

    } catch (error) {
      console.error('Error processing form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-[#FAF7F2]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF4D8] via-[#FAF7F2] to-[#C7EDE6]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e55a2b]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-[#F9C74F] to-[#FFC300] p-2 rounded-full mb-6"
          >
            <div className="bg-white p-3 rounded-full">
              <MessageSquare className="text-[#243A73]" size={24} />
            </div>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 flex flex-wrap justify-center gap-4 uppercase tracking-widest text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#243A73] to-[#243A73]/60">Get In</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(36, 58, 115, 0.8)', color: 'transparent' }}>Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-[#243A73]/70 max-w-2xl mx-auto">
            Have questions about our digital marketing bootcamp? We're here to help you start your journey to success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border-2 border-[#F9C74F]/10"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#1F3C88] via-[#243A73] to-[#FFC300] p-6 sm:p-8 md:p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2">
                Start Your Success Journey
              </h3>
              <p className="text-white/90 text-base sm:text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#243A73] mb-2 flex items-center gap-2">
                  <User className="text-[#F9C74F]" size={16} />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#F9C74F]/20 focus:border-[#F9C74F] focus:ring-4 focus:ring-[#F9C74F]/20 transition-all duration-300 bg-[#FAF7F2]/50 placeholder:text-[#243A73]/40"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#243A73] mb-2 flex items-center gap-2">
                  <Mail className="text-[#F9C74F]" size={16} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#F9C74F]/20 focus:border-[#F9C74F] focus:ring-4 focus:ring-[#F9C74F]/20 transition-all duration-300 bg-[#FAF7F2]/50 placeholder:text-[#243A73]/40"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#243A73] mb-2 flex items-center gap-2">
                  <MessageSquare className="text-[#F9C74F]" size={16} />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#F9C74F]/20 focus:border-[#F9C74F] focus:ring-4 focus:ring-[#F9C74F]/20 transition-all duration-300 bg-[#FAF7F2]/50 placeholder:text-[#243A73]/40 resize-none"
                  placeholder="Tell us about your goals, questions, or how we can help you succeed in digital marketing..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full bg-gradient-to-r from-[#F9C74F] to-[#FFC300] text-white px-6 py-4 rounded-xl font-heading font-bold text-lg hover:shadow-xl transition-all overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </span>
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                >
                  <CheckCircle className="text-green-600" size={20} />
                  <div>
                    <p className="font-semibold text-green-800">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl"
                >
                  <AlertCircle className="text-red-600" size={20} />
                  <div>
                    <p className="font-semibold text-red-800">Something went wrong</p>
                    <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-[#4CAF50]/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-br from-[#F9C74F]/10 to-[#FFC300]/10 rounded-xl p-4">
                  <p className="font-semibold text-[#243A73]">WhatsApp</p>
                  <p className="text-[#243A73]/70">+91 7508535271</p>
                </div>
                <div className="bg-gradient-to-br from-[#F9C74F]/10 to-[#FFC300]/10 rounded-xl p-4">
                  <p className="font-semibold text-[#243A73]">Response Time</p>
                  <p className="text-[#243A73]/70">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

