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
  ChevronRight
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
    { name: 'Custom Software Development', href: '/services#custom-software' },
    { name: 'Data Science & Engineering', href: '/services/data-science' },
    { name: 'Web & Mobile Development', href: '/services#web-mobile' },
    { name: 'ERP Solutions', href: '/services#erp' },
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
  { name: 'GitHub', href: 'https://github.com/klocrix', icon: Github },
]

const contactInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    content: 'Mohali, Punjab, India'
  },
  {
    icon: MapPin,
    title: 'Office',
    content: 'Luton, United Kingdom'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@klocrix.com',
    href: 'mailto:hello@klocrix.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 98765 43210',
    href: 'tel:+919876543210'
  }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative z-10 bg-[#050508] border-t border-[#00D1FF]/20 pt-24 pb-12 overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap');
        .cyber-link { position: relative; transition: all 0.3s ease; }
        .cyber-link::before { content: '>'; position: absolute; left: -16px; opacity: 0; color: #00D1FF; font-family: 'Share Tech Mono', monospace; transition: all 0.3s ease; transform: translateX(-5px); }
        .cyber-link:hover::before { opacity: 1; transform: translateX(0); }
        .cyber-link:hover { color: #00D1FF; text-shadow: 0 0 8px rgba(0,209,255,0.6); transform: translateX(4px); }
        @keyframes pulse-dot { 0%, 100% { opacity: 1; box-shadow: 0 0 8px #00D1FF; } 50% { opacity: 0.4; box-shadow: 0 0 2px #00D1FF; } }
        .animate-pulse-dot { animation: pulse-dot 2s infinite; }
        .footer-bg-sweep { background: linear-gradient(90deg, transparent, rgba(0,209,255,0.05), transparent); background-size: 200% 100%; animation: sweep 8s linear infinite; }
      ` }} />

      {/* Futuristic Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00D1FF 1px, transparent 1px), linear-gradient(90deg, #00D1FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top Sweep Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] footer-bg-sweep mix-blend-screen" />

      {/* Floating Orbs (Subtle) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D1FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#00FF88]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

          {/* Company Info - Data Fortress Block */}
          <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00D1FF]/10 to-[#00FF88]/5 opacity-50 blur-md group-hover:opacity-100 transition duration-500"></div>
            <div className="relative h-full bg-[#0A0E1C]/90 backdrop-blur-xl border border-[#00D1FF]/20 p-8 lg:p-10 flex flex-col"
              style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}>

              <Link href="/" className="inline-block mb-10 group/logo">
                <img
                  src="/Rectangle 1.png"
                  alt="Klocrix Logo"
                  className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover/logo:scale-[1.03]"
                />
              </Link>

              <div className="flex-1">
                <p style={{ fontFamily: "'Rajdhani', sans-serif" }} className="text-[#A0B0C0] text-[1.05rem] mb-10 leading-relaxed font-light">
                  Architecting the digital foundations of future market leaders. Our proprietary systems are secure, adaptive, and engineered for infinite scale.
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <span style={{ fontFamily: "'Share Tech Mono', monospace" }} className="text-[#00D1FF]/50 text-[10px] tracking-[0.2em] mr-2">LINK_NET:</span>
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-10 h-10 flex items-center justify-center text-[#00D1FF]/70 transition-colors duration-300 overflow-hidden group/social"
                      style={{ border: '1px solid rgba(0,209,255,0.2)', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
                    >
                      <div className="absolute inset-0 bg-[#00D1FF]/10 translate-y-[100%] group-hover/social:translate-y-0 transition-transform duration-300" />
                      <Icon className="w-4 h-4 relative z-10 group-hover/social:text-[#00FF88] transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Links Sections - Portals */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:pl-10 pt-4">

            {/* COMPANY */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse-dot" />
                <h3 style={{ fontFamily: "'Share Tech Mono', monospace" }} className="text-xs tracking-[0.3em] text-white uppercase">
                  /COMPANY
                </h3>
              </div>
              <ul className="space-y-4 pl-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                      className="text-[1.05rem] text-[#8090A0] cyber-link font-medium block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
                <h3 style={{ fontFamily: "'Share Tech Mono', monospace" }} className="text-xs tracking-[0.3em] text-white uppercase">
                  /SERVICES
                </h3>
              </div>
              <ul className="space-y-4 pl-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                      className="text-[1.05rem] text-[#8090A0] cyber-link font-medium block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse-dot" />
                <h3 style={{ fontFamily: "'Share Tech Mono', monospace" }} className="text-xs tracking-[0.3em] text-white uppercase">
                  /RESOURCES
                </h3>
              </div>
              <ul className="space-y-4 pl-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                      className="text-[1.05rem] text-[#8090A0] cyber-link font-medium block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1 h-3 bg-[#00D1FF]" />
                <h3 style={{ fontFamily: "'Share Tech Mono', monospace" }} className="text-xs tracking-[0.3em] text-white uppercase">
                  /CONTACT
                </h3>
              </div>
              <div className="space-y-6">
                {contactInfo.slice(2).map((contact) => (
                  <div key={contact.title} className="group/contact">
                    <div style={{ fontFamily: "'Share Tech Mono', monospace" }} className="text-[10px] text-[#00D1FF]/60 mb-1.5 uppercase tracking-widest flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#00D1FF] opacity-0 group-hover/contact:opacity-100 transition-opacity -ml-4 absolute" />
                      [{contact.title}]
                    </div>
                    {contact.href ? (
                      <a href={contact.href} style={{ fontFamily: "'Rajdhani', sans-serif" }} className="text-[1.05rem] text-[#E0E5EC] hover:text-[#00FF88] transition-colors font-medium block">
                        {contact.content}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "'Rajdhani', sans-serif" }} className="text-[1.05rem] text-[#E0E5EC] font-medium block">
                        {contact.content}
                      </span>
                    )}
                  </div>
                ))}

                {/* Cyber Return to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="mt-8 group relative w-full h-10 flex items-center justify-center text-[#00D1FF] overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_10px_rgba(0,209,255,0.05)] hover:shadow-[0_0_15px_rgba(0,209,255,0.2)]"
                  style={{ background: 'rgba(0,209,255,0.05)', border: '1px solid rgba(0,209,255,0.3)', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                >
                  <div className="absolute inset-0 bg-[#00D1FF]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                  <div className="relative z-10 flex items-center gap-2" style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '2px' }}>
                    <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                    INIT_SCROLL_TOP
                  </div>
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 border-l border-b border-[#00D1FF] opacity-50" />
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-r border-t border-[#00D1FF] opacity-50" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar - Data Stream */}
        <div className="border-t border-[#00D1FF]/20 pt-8 mt-8 relative">
          {/* Subtle glowing center highlight on border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/50 to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div style={{ fontFamily: "'Share Tech Mono', monospace" }} className="text-[10px] text-[#00D1FF]/50 uppercase tracking-[0.2em] relative">
              © {new Date().getFullYear()} KLOCRIX_B_S_P_LTD_ // ALL_RIGHTS_RESERVED
            </div>

            <div className="flex items-center space-x-6">
              <div style={{ fontFamily: "'Share Tech Mono', monospace" }} className="flex items-center space-x-2 text-[10px] text-[#00FF88] tracking-widest border border-[#00FF88]/20 bg-[#00FF88]/5 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] shadow-[0_0_5px_#00FF88] animate-pulse"></span>
                <span>STATUS: ONLINE</span>
              </div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace" }} className="text-[10px] text-[#00D1FF]/50 tracking-widest hidden sm:block">
                GEO_LOC: [MOHALI_IN] [LUTON_UK]
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}