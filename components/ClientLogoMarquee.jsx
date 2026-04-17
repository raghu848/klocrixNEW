'use client'

import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const clients = [
  { name: 'Savvy App', logo: 'SavvyApp' },
  { name: 'Splore', logo: 'Splore' },
  { name: 'Finaxar', logo: 'Finaxar' },
  { name: 'Baresght', logo: 'Baresght' },
  { name: 'TechCorp', logo: 'TechCorp' },
  { name: 'DataFlow', logo: 'DataFlow' },
  { name: 'GlobalSystems', logo: 'Global' },
  { name: 'Innovate', logo: 'Innovate' },
]

// Duplicate for seamless infinite scroll
const infiniteClients = [...clients, ...clients, ...clients]

export default function ClientLogoMarquee() {
  return (
    <div className="relative overflow-hidden py-12">
      {/* Gradient fade effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#111827] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111827] to-transparent z-10" />
      
      <div className="flex select-none">
        <motion.div
          className="flex space-x-20 items-center flex-shrink-0 px-10"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {/* Leading Text that flows with the logos */}
          <div className="flex items-center gap-12 mr-10">
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Trusted by Industry Leaders Worldwide
            </span>
            <div className="w-12 h-[1px] bg-white/10" />
          </div>

          {infiniteClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center opacity-70 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-500"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white/90 hover:text-accent transition-colors duration-300">
                {client.logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
