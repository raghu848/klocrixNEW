'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
  ChevronRight,
  Instagram,
  Facebook
} from 'lucide-react'
import { cn } from '../lib/utils'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'App Development', href: '/services#app-development' },
    { name: 'UI/UX Design', href: '/services#ui-ux' },
    { name: 'Digital Transformation', href: '/services#digital' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Support Center', href: '/support' },
  ]
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/klocrix', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/klocrix', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/klocrix', icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com/klocrix', icon: Facebook },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-[#0B1220] border-t border-white/10 text-white pt-24 pb-12 overflow-hidden">
      <div className="container-custom px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <img
                src="/case-studies/Asset 2.png"
                alt="Klocrix Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-sm">
              Transforming businesses with scalable IT solutions. We architect the foundational systems that empower ambitious companies to lead in the digital era.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-8">Get in Touch</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 text-slate-400">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <p className="text-slate-400 leading-snug">
                  Mohali, Punjab, India<br />
                  Luton, United Kingdom
                </p>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <a href="mailto:hello@klocrix.com" className="hover:text-white transition-colors">hello@klocrix.com</a>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Phone className="w-6 h-6 text-accent shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Klocrix. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
