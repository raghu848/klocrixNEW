'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'App Development', href: '/services#app-development' },
      { name: 'UI/UX Design', href: '/services#ui-ux' },
      { name: 'Digital Transformation', href: '/services#digital' },
      { name: 'Cloud Solutions', href: '/services#cloud' },
      { name: 'Maintenance & Support', href: '/services#support' },
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
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'py-4 bg-[#0B1220]/80 backdrop-blur-md border-b border-white/10 shadow-sm'
        : 'py-6 bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center group">
          <img
            src="/case-studies/Asset 2.png"
            alt="Klocrix Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 brightness-0 invert"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer py-2"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className={cn(
                      'text-[15px] font-medium transition-colors',
                      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                    )}>
                      {item.name}
                    </span>
                    <ChevronDown className={cn('w-4 h-4 text-slate-400 transition-transform duration-300', activeDropdown === index ? 'rotate-180' : '')} />

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-64 pt-4"
                        >
                          <div className="bg-surface rounded-xl shadow-xl border border-white/10 p-4 overflow-hidden">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-[14px] text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.highlight ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-flex items-center rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-300 border uppercase tracking-widest',
                      isActive
                        ? 'bg-accent text-white border-accent shadow-[0_0_20px_rgba(14,165,233,0.3)]'
                        : 'bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white hover:border-accent'
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-[15px] font-medium transition-colors py-2',
                      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            )
          })}
        </nav>



        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1220] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="flex flex-col gap-4">
                      <button
                        className="flex items-center justify-between text-lg font-semibold text-white"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        {item.name}
                        <ChevronDown className={cn('w-5 h-5 transition-transform text-slate-400', activeDropdown === index ? 'rotate-180' : '')} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col gap-3 pl-4 border-l-2 border-white/10"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="text-slate-300 hover:text-white transition-colors"
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'text-lg font-semibold transition-colors',
                        item.highlight
                          ? 'text-accent'
                          : 'text-white hover:text-accent'
                      )}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
