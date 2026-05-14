'use client'

import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const clients = [
  { name: 'GDPL', logo: 'GDPL' },
  { name: 'Prestige Realty', logo: 'Prestige Realty' },
  { name: 'Gulfin Valley', logo: 'Gulfin Valley' },
  { name: 'Amayra Trillium', logo: 'Amayra Trillium' },
  { name: 'The Grand Sky', logo: 'The Grand Sky' },
  { name: 'Monga Toyota', logo: 'Monga Toyota' },
  { name: 'Fineness Australia', logo: 'Fineness Australia' },
  { name: 'Fine Cabinets', logo: 'Fine Cabinets' },
  { name: 'WorkVEU', logo: 'WorkVEU' },
]

// Duplicate for seamless infinite scroll
const infiniteClients = [...clients, ...clients, ...clients]

export default function ClientLogoMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient fade effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#111827] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111827] to-transparent z-10" />
      
      <div className="flex select-none overflow-hidden">
        <div
          className="flex space-x-12 items-center flex-shrink-0 px-10 animate-marquee"
        >
          {/* Leading Text that flows with the logos */}
          <div className="flex items-center gap-8 mr-8">
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Trusted by Industry Leaders Worldwide
            </span>
            <div className="w-8 h-[1px] bg-white/10" />
          </div>

          {infiniteClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center opacity-70 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-500"
            >
              <span className="text-lg md:text-xl font-black tracking-tighter text-white/90 hover:text-accent transition-colors duration-300">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
