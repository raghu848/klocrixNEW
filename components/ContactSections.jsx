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
import { getWhatsAppUrl, WHATSAPP_NUMBERS } from '../lib/whatsapp'

// 1. Contact Hero
export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 overflow-hidden bg-white">
      <PremiumBackground />

      <div className="container-custom relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-hero-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6">
              Contact Us
            </span>
          </div>

          <h1 className="animate-hero-in [animation-delay:100ms] text-4xl sm:text-5xl md:text-8xl font-extrabold leading-tight mb-8 text-primary">
            Let's Start a <span className="text-accent italic">Conversation</span>
          </h1>

          <p className="animate-hero-in [animation-delay:200ms] text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help.
          </p>

          <div className="animate-hero-in [animation-delay:300ms] flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary"
            >
              <Headphones className="w-8 h-8" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 2. Contact Main Section (Form + Info)
export function ContactMain() {
  const [sent, setSent] = useState(false)

  // No mail backend yet: hand the enquiry to WhatsApp as a pre-filled message
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text = [
      `New enquiry from the website (${data.get('subject')})`,
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      data.get('phone') ? `Phone: ${data.get('phone')}` : null,
      '',
      data.get('message'),
    ].filter((line) => line !== null).join('\n')

    window.open(getWhatsAppUrl(WHATSAPP_NUMBERS.MAIN, text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['E 68, Shrinivasan building, Phase-8, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 140308, India.']
    },

    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@klocrix.com', 'careers@klocrix.com']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 81463 30346']
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-primary">Contact Information</h2>

            <div className="space-y-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <info.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => {
                        const isEmail = detail.includes('@')
                        const isPhone = detail.includes('+')
                        return (
                          <p key={idx} className="text-slate-500 font-medium">
                            {isEmail ? (
                              <a href={`mailto:${detail}`} className="hover:text-accent transition-colors">{detail}</a>
                            ) : isPhone ? (
                              <a href={`tel:${detail.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">{detail}</a>
                            ) : (
                              detail
                            )}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-24 pt-10 md:pt-16 border-t border-slate-100">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-10">Follow Our Journey</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/klocrix-business-solution-4454a5237' },
                  { name: 'Facebook', href: 'https://www.facebook.com/Klocrix' },
                  { name: 'Instagram', href: 'https://www.instagram.com/klocrixbusinesssolution?igsh=MWwyZDJ1ams5a3Uydw%3D%3D&utm_source=qr' }
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-2xl border border-slate-100 text-slate-600 font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 inline-block"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label htmlFor="contact-name" className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input id="contact-name" name="name" type="text" required autoComplete="name" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-slate-900" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="contact-email" className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                    <input id="contact-email" name="email" type="email" required autoComplete="email" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-slate-900" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label htmlFor="contact-phone" className="text-xs font-black text-slate-500 uppercase tracking-widest">Phone</label>
                    <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-slate-900" placeholder="+91 00000 00000" />
                  </div>
                  <div className="space-y-3 relative">
                    <label htmlFor="contact-subject" className="text-xs font-black text-slate-500 uppercase tracking-widest">Subject</label>
                    <select id="contact-subject" name="subject" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none font-bold text-slate-900">
                      <option>General Inquiry</option>
                      <option>New Project</option>
                      <option>Partnership</option>
                      <option>Careers</option>
                    </select>
                    <ChevronDown className="absolute right-5 bottom-6 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="contact-message" className="text-xs font-black text-slate-500 uppercase tracking-widest">Message</label>
                  <textarea id="contact-message" name="message" required className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-48 font-bold text-slate-900" placeholder="Tell us about your project or inquiry..."></textarea>
                </div>

                <button type="submit" className="w-full py-6 bg-primary text-white font-black rounded-2xl shadow-xl flex items-center justify-center gap-4 hover:bg-primary-light transition-all text-xl">
                  Send Message
                  <Send className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                {sent && (
                  <p role="status" className="text-center text-slate-600 font-medium">
                    WhatsApp opened with your message — just press send. Prefer email? Write to{' '}
                    <a href="mailto:hello@klocrix.com" className="text-primary underline">hello@klocrix.com</a>.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
