'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Web Development', href: '/services#web-development', desc: 'Custom websites & platforms' },
      { name: 'App Development', href: '/services#app-development', desc: 'iOS, Android & cross-platform' },
      { name: 'UI/UX Design', href: '/services#ui-ux', desc: 'Interfaces people love' },
      { name: 'Digital Transformation', href: '/services#digital', desc: 'Modernise your operations' },
      { name: 'Cloud Solutions', href: '/services#cloud', desc: 'Scale with confidence' },
      { name: 'Maintenance & Support', href: '/services#support', desc: '24/7 peace of mind' },
    ]
  },
  { name: 'Work', href: '/work' },
  { name: 'Training', href: '/training', highlight: true },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .header-root {
          font-family: 'Syne', sans-serif;
        }

        /* Pill container */
        .nav-pill {
          background: rgba(11, 18, 32, 0.55);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 999px;
          transition: background 0.4s, box-shadow 0.4s, border-color 0.4s;
        }
        .nav-pill.scrolled {
          background: rgba(11, 18, 32, 0.85);
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(14,165,233,0.06);
        }

        /* Animated underline on nav links */
        .nav-link-wrap {
          position: relative;
        }
        .nav-link-wrap::after {
          content: '';
          position: absolute;
          left: 0; bottom: -3px;
          width: 0; height: 1.5px;
          background: #0ea5e9;
          border-radius: 99px;
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link-wrap:hover::after,
        .nav-link-wrap.active::after {
          width: 100%;
        }

        /* Dot accent on active */
        .active-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #0ea5e9;
          position: absolute;
          bottom: -8px; left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 6px #0ea5e9;
        }

        /* Highlight / CTA button */
        .cta-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
          border: none;
          border-radius: 999px;
          padding: 8px 20px;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 0 0 rgba(14,165,233,0);
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 24px rgba(14,165,233,0.45);
        }
        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:active { transform: translateY(0); }

        /* Logo shimmer */
        .logo-img {
          transition: filter 0.3s, transform 0.3s;
        }
        .logo-img:hover {
          filter: brightness(1.15) drop-shadow(0 0 8px rgba(14,165,233,0.4));
          transform: scale(1.03);
        }

        /* Hamburger */
        .ham-btn {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #94a3b8;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .ham-btn:hover {
          background: rgba(14,165,233,0.1);
          border-color: rgba(14,165,233,0.3);
          color: #fff;
        }

        /* Dropdown card */
        .dropdown-card {
          background: rgba(11, 18, 32, 0.95);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 16px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(14,165,233,0.05);
          overflow: hidden;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          transition: background 0.18s;
          cursor: pointer;
          text-decoration: none;
        }
        .dropdown-item:hover {
          background: rgba(14,165,233,0.08);
        }
        .dropdown-item:hover .arrow-icon {
          opacity: 1;
          transform: translate(1px, -1px);
        }
        .arrow-icon {
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          color: #0ea5e9;
        }

        /* Mobile menu */
        .mobile-nav {
          background: rgba(8, 14, 26, 0.98);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .mobile-link {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #e2e8f0;
          letter-spacing: -0.01em;
          transition: color 0.2s;
          display: flex; align-items: center; justify-content: space-between;
        }
        .mobile-link:hover { color: #fff; }
        .mobile-sub-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #64748b;
          transition: color 0.2s;
          text-decoration: none;
          display: block;
          padding: 5px 0;
        }
        .mobile-sub-link:hover { color: #94a3b8; }

        /* Number tag (decorative) */
        .nav-number {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 300;
          color: #334155;
          letter-spacing: 0.05em;
          margin-right: 6px;
        }
      ` }} />

      <header className={cn('header-root fixed top-0 left-0 right-0 z-50 transition-all duration-500', isScrolled ? 'pt-3 pb-3' : 'pt-5 pb-5')}>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="relative z-50 flex-shrink-0 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg border border-white/10">
            <img
              src="/case-studies/Asset 2.png"
              alt="Klocrix"
              className="logo-img h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop pill nav ── */}
          <nav className={cn('hidden lg:flex items-center gap-1 px-3 py-2 nav-pill', isScrolled ? 'scrolled' : '')}>
            {navigation.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

              if (item.submenu) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-full group transition-colors hover:bg-white/5">
                      <span className={cn('text-[14px] font-500 tracking-wide transition-colors', isActive ? 'text-white' : 'text-slate-400 group-hover:text-white')}>
                        {item.name}
                      </span>
                      <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-300 text-slate-500', activeDropdown === index ? 'rotate-180 text-sky-400' : '')} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                        >
                          <div className="dropdown-card p-2">
                            {item.submenu.map((sub) => (
                              <Link key={sub.name} href={sub.href} className="dropdown-item">
                                <div>
                                  <p className="text-[13.5px] font-600 text-slate-200 leading-tight" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>{sub.name}</p>
                                  {sub.desc && <p className="text-[11.5px] text-slate-500 mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>{sub.desc}</p>}
                                </div>
                                <ArrowUpRight className="arrow-icon w-4 h-4 flex-shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              if (item.highlight) {
                return (
                  <Link key={item.name} href={item.href} className="cta-btn ml-1">
                    {item.name}
                  </Link>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 rounded-full group transition-colors hover:bg-white/5"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className={cn('nav-link-wrap text-[14px] font-500 tracking-wide transition-colors', isActive ? 'text-white active' : 'text-slate-400 group-hover:text-white')}>
                    {item.name}
                  </span>
                  {isActive && <span className="active-dot" />}
                </Link>
              )
            })}
          </nav>

          {/* ── Desktop right slot removed ── */}

          {/* ── Hamburger ── */}
          <button
            className="ham-btn ml-auto flex lg:hidden items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden mobile-nav overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-1">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  if (item.submenu) {
                    return (
                      <div key={item.name} className="py-3 border-b border-white/5">
                        <button
                          className="mobile-link w-full text-left"
                          onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        >
                          <span className="flex items-center gap-2">
                            <span className="nav-number">0{index + 1}</span>
                            {item.name}
                          </span>
                          <ChevronDown className={cn('w-4 h-4 text-slate-600 transition-transform duration-300', activeDropdown === index ? 'rotate-180 text-sky-400' : '')} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 pl-5 border-l border-sky-400/20 flex flex-col gap-1">
                                {item.submenu.map((sub) => (
                                  <Link key={sub.name} href={sub.href} className="mobile-sub-link" onClick={closeMobileMenu}>
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <div key={item.name} className="py-3 border-b border-white/5">
                      <Link
                        href={item.href}
                        className={cn('mobile-link', item.highlight ? 'text-sky-400' : isActive ? 'text-white' : '')}
                        onClick={closeMobileMenu}
                      >
                        <span className="flex items-center gap-2">
                          <span className="nav-number">0{index + 1}</span>
                          {item.name}
                        </span>
                        {item.highlight && <ArrowUpRight className="w-4 h-4 text-sky-400" />}
                      </Link>
                    </div>
                  )
                })}

                {/* Mobile status row removed */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}