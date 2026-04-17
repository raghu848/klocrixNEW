'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Globe,
  MessageSquare,
  ChevronDown,
  Headphones
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '../lib/utils'
import PremiumBackground from './PremiumBackground'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// 1. Contact Hero
export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-24 overflow-hidden bg-white">
      <PremiumBackground />
      
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6">
              Contact Us
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-extrabold leading-tight mb-8 text-primary">
            Let's Start a <span className="text-accent italic">Conversation</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12">
            Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary"
            >
              <Headphones className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// 2. Contact Main Section (Form + Info)
export function ContactMain() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['Mohali, Punjab, India']
    },
    {
      icon: MapPin,
      title: 'UK Office',
      details: ['Luton, United Kingdom']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@klocrix.com', 'careers@klocrix.com']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+44 20 1234 5678']
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-24">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold mb-16 text-primary">Contact Information</h2>
            
            <div className="space-y-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <info.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-500 font-medium">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Connect */}
            <div className="mt-24 pt-16 border-t border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-10">Follow Our Journey</h4>
              <div className="flex flex-wrap gap-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                  <button key={social} className="px-8 py-3 rounded-2xl border border-slate-100 text-slate-600 font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <h2 className="text-4xl font-bold mb-12 text-primary">Send us a Message</h2>
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone</label>
                    <input type="tel" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold" placeholder="+91 00000 00000" />
                  </div>
                  <div className="space-y-3 relative">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Subject</label>
                    <select className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none font-bold">
                      <option>General Inquiry</option>
                      <option>New Project</option>
                      <option>Partnership</option>
                      <option>Careers</option>
                    </select>
                    <ChevronDown className="absolute right-5 bottom-6 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-48 font-bold" placeholder="Tell us about your project or inquiry..."></textarea>
                </div>
                
                <button className="w-full py-6 bg-primary text-white font-black rounded-2xl shadow-xl flex items-center justify-center gap-4 hover:bg-primary-light transition-all text-xl">
                  Send Message
                  <Send className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
