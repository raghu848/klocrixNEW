'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Terminal } from 'lucide-react'
import { cn } from '../lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Custom Software Development', href: '/services#custom-software' },
      { name: 'Data Science & Engineering', href: '/services/data-science' },
      { name: 'Web & Mobile Development', href: '/services#web-mobile' },
      { name: 'ERP Solutions', href: '/services#erp' },
      { name: 'Digital Marketing', href: '/services#digital-marketing' },
      { name: 'AWS Cloud Services', href: '/services#cloud' },
    ]
  },
  { name: 'Our Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
  { name: 'Training', href: '/training', highlight: true },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .nav-link-hover {
          position: relative;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 1px;
          background: #00D1FF;
          transition: width 0.3s ease;
          box-shadow: 0 0 8px #00D1FF;
        }
        .nav-link-hover:hover::after, .nav-link-active::after {
          width: 100%;
        }
        .glitch-logo {
          position: relative;
        }
        .glitch-logo::after {
          content: 'KLOCRIX';
          position: absolute;
          left: 2px;
          text-shadow: -1px 0 #00D1FF;
          top: 0;
          color: white;
          background: transparent;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0); 
          animation: noise-anim 2s infinite linear alternate-reverse;
        }
        @keyframes noise-anim {
          0% { clip: rect(21px, 9999px, 12px, 0); }
          5% { clip: rect(6px, 9999px, 20px, 0); }
          10% { clip: rect(10px, 9999px, 8px, 0); }
          15% { clip: rect(2px, 9999px, 2px, 0); }
          20% { clip: rect(14px, 9999px, 8px, 0); }
          25% { clip: rect(22px, 9999px, 5px, 0); }
          30% { clip: rect(1px, 9999px, 11px, 0); }
          35% { clip: rect(8px, 9999px, 2px, 0); }
          40% { clip: rect(15px, 9999px, 10px, 0); }
          45% { clip: rect(11px, 9999px, 14px, 0); }
          50% { clip: rect(5px, 9999px, 19px, 0); }
          55% { clip: rect(13px, 9999px, 6px, 0); }
        }
        .hud-border {
          position: absolute;
          width: 8px;
          height: 8px;
          border: 1px solid #00D1FF;
        }
      ` }} />
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-2 bg-[#050508]/85 backdrop-blur-xl border-b border-[rgba(0,209,255,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      )}>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D1FF]/30 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="relative z-50 flex items-center group">
            <img
              src="/Rectangle 1.png"
              alt="Klocrix Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <div key={item.name} className="relative group/nav">
                  {item.submenu ? (
                    <div
                      className="flex items-center gap-1 cursor-pointer py-2"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      <span className={cn(
                        "text-[15px] tracking-[0.1em] transition-colors nav-link-hover",
                        isActive ? "text-[#00D1FF] nav-link-active" : "text-gray-300 hover:text-white"
                      )} style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, textTransform: 'uppercase' }}>
                        {item.name}
                      </span>
                      <ChevronDown className={cn("w-3.5 h-3.5 text-gray-400 transition-transform duration-300", activeDropdown === index ? "rotate-180 text-[#00D1FF]" : "")} />
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-[15px] tracking-[0.1em] transition-colors nav-link-hover relative",
                        isActive ? "text-[#00D1FF] nav-link-active" : "text-gray-300 hover:text-white",
                        item.highlight ? "text-[#00FF88] hover:text-[#00FF88]" : ""
                      )}
                      style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, textTransform: 'uppercase' }}
                    >
                      {item.highlight && <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-[#00FF88] border border-black rounded-full animate-ping" />}
                      {item.name}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, rotateX: -10 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          exit={{ opacity: 0, y: 10, rotateX: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 w-64 bg-[#050508]/95 backdrop-blur-md border border-[rgba(0,209,255,0.2)] shadow-[0_10px_40px_rgba(0,209,255,0.15)] origin-top z-50 overflow-hidden"
                        >
                          {/* Decorative header */}
                          <div className="bg-[rgba(0,209,255,0.05)] px-4 py-2 border-b border-[rgba(0,209,255,0.2)] flex items-center gap-2">
                            <Terminal className="w-3 h-3 text-[#00D1FF]" />
                            <span className="text-[#00D1FF] text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Share Tech Mono', monospace" }}>Directory Access</span>
                          </div>
                          <div className="p-2 flex flex-col">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="group/sub block px-4 py-3 relative overflow-hidden"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,209,255,0.1)] to-transparent opacity-0 translate-x-[-100%] transition-all duration-300 group-hover/sub:opacity-100 group-hover/sub:translate-x-0" />
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-[#00D1FF] transition-all duration-300 group-hover/sub:h-4" />
                                <span className="relative z-10 text-[13px] text-gray-300 group-hover/sub:text-white transition-colors" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, letterSpacing: '0.05em' }}>
                                  {subItem.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA / Terminal Login */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="h-6 w-px bg-white/10" />
            <Link
              href="/contact"
              className="relative group px-8 py-3 overflow-hidden"
            >
              <div className="absolute inset-0 border border-[#00D1FF]/30 transition-all duration-300 group-hover:border-[#00D1FF]" />
              <div className="absolute inset-0 bg-[#00D1FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-[#00D1FF] group-hover:text-black text-[11px] font-bold tracking-[0.3em] uppercase transition-colors duration-300" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                INIT.PROJECT
              </span>
              <div className="absolute -left-1 -top-1 w-2 h-2 bg-[#050505] rotate-45 border-r border-[#00D1FF]/40" />
              <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-[#050505] rotate-45 border-l border-[#00D1FF]/40" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-white hover:text-[#00D1FF] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full lg:hidden bg-[#050508]/95 backdrop-blur-xl border-b border-[rgba(0,209,255,0.2)] shadow-2xl h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <div className="text-[10px] text-[rgba(0,209,255,0.5)] tracking-[0.3em] font-mono border-b border-white/5 pb-2 mb-2">
                  // NAVIGATION_MATRIX
                </div>
                {navigation.map((item, index) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={cn(
                          "text-xl tracking-[0.1em] uppercase transition-colors",
                          pathname === item.href ? "text-[#00D1FF]" : "text-gray-200"
                        )}
                        style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}
                        onClick={item.submenu ? undefined : closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <button
                          className="p-2 text-gray-400 focus:outline-none"
                          onClick={() => handleDropdownToggle(index)}
                        >
                          <ChevronDown className={cn("w-6 h-6 transition-transform", activeDropdown === index ? "rotate-180 text-[#00D1FF]" : "")} />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu Dropdown */}
                    {item.submenu && (
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-l-2 border-[#00D1FF]/30 ml-2 pl-4 mt-2 flex flex-col gap-4 py-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="text-[14px] text-gray-400 hover:text-white tracking-[0.05em]"
                                style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500 }}
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                <div className="mt-8 pt-8 border-t border-white/5">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="group relative w-full h-14 overflow-hidden flex items-center justify-center transition-all active:scale-95"
                  >
                    <div className="absolute inset-0 border border-[#00D1FF]/30 transition-all group-hover:border-[#00D1FF]" />
                    <div className="absolute inset-0 bg-[#00D1FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 text-[#00D1FF] group-hover:text-black font-bold tracking-[0.3em] uppercase transition-colors duration-300 text-sm" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                      INITIATE_PROJECT
                    </span>
                    <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-[#050505] rotate-45 border-r border-[#00D1FF]/40" />
                    <div className="absolute -right-1 -bottom-1 w-2.5 h-2.5 bg-[#050505] rotate-45 border-l border-[#00D1FF]/40" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}