'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Download, X } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true)
  const [daysLeft, setDaysLeft] = useState(5)

  useEffect(() => {
    // Calculate days until Feb 12, 2026
    const targetDate = new Date('2026-02-12')
    const today = new Date()
    const diffTime = targetDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysLeft(Math.max(0, diffDays))
  }, [])

  const whatsappLink = 'https://wa.me/917508535271?text=Hi%2C%20I%27m%20interested%20in%20Klocrix%20Training'

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#F9C74F] shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Urgency Message */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg font-heading font-bold text-[#243A73] mb-1">
                🚨 Batch Filling Fast – Only 8 Seats Left!
              </p>
              <p className="text-sm text-[#243A73]/70">
                Starts in {daysLeft} Days (12 Feb 2026)
              </p>
            </div>

            {/* Right: CTAs */}
            <div className="flex items-center gap-3">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#F9C74F] to-[#FFC300] text-[#243A73] px-6 py-3 rounded-full font-heading font-bold hover:shadow-lg transition-all shadow-lg flex items-center gap-2"
              >
                <Phone size={20} />
                Enroll: 7508535271
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1F3C88] text-white px-6 py-3 rounded-full font-heading font-semibold hover:bg-[#243A73] transition-all shadow-lg flex items-center gap-2"
              >
                <Download size={20} />
                Free PPC Checklist
              </motion.button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-[#243A73]/60 hover:text-[#243A73] p-2"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

