'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, BookOpen } from 'lucide-react'
import { fadeInUp } from '../../lib/animations'

const modules = [
  {
    id: 1,
    title: 'Meta Ads Mastery',
    duration: 'Week 1-3',
    topics: [
      'Facebook Ads Manager 2026',
      'Instagram Shopping Ads',
      'WhatsApp Catalog Ads',
      'Pixel tracking setup',
      'Audience targeting & retargeting',
      'Creative optimization',
    ],
  },
  {
    id: 2,
    title: 'Google Ads Complete',
    duration: 'Week 4-6',
    topics: [
      'Search, Display, Shopping, YouTube',
      'Smart Bidding strategies',
      'Negative keywords mastery',
      'Small to large campaign scaling',
      'Quality Score optimization',
      'Landing page optimization',
    ],
  },
  {
    id: 3,
    title: 'Analytics + Tracking',
    duration: 'Week 7-9',
    topics: [
      'GA4 implementation',
      'Google Tag Manager',
      'Attribution modeling',
      'Custom dashboards',
      'Conversion tracking',
      'ROI measurement',
    ],
  },
  {
    id: 4,
    title: 'Advanced + Freelancing',
    duration: 'Week 10-12',
    topics: [
      'Email/SMS automation',
      'Sales funnel design',
      'Client pitching',
      'Freelance business setup',
      'Portfolio creation',
      'Agency partnerships',
    ],
  },
]

export default function CurriculumAccordion() {
  const [openModule, setOpenModule] = useState(1)

  return (
    <section id="curriculum" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 flex flex-wrap justify-center gap-4 uppercase tracking-widest">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#243A73] to-[#243A73]/60">12-Week Industry-Ready</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(36, 58, 115, 0.8)', color: 'transparent' }}>Curriculum</span>
          </h2>
          <p className="text-xl text-[#243A73]/70 max-w-2xl mx-auto">
            From basics to advanced freelancing - everything you need to land your dream job
          </p>
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {modules.map((module) => (
            <motion.div
              key={module.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#4CAF50]/20"
            >
              <button
                onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#FAF7F2]/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#F9C74F]/10 p-3 rounded-xl">
                    <BookOpen className="text-[#F9C74F]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[#243A73] uppercase tracking-wider">
                      MODULE {module.id}: {module.title}
                    </h3>
                    <p className="text-[#243A73]/60 mt-1">{module.duration}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openModule === module.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-[#243A73]/60" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        {module.topics.map((topic, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-2 text-[#243A73]/80"
                          >
                            <span className="text-[#F9C74F] font-bold">•</span>
                            <span>{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

