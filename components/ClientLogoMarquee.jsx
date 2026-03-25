'use client'

import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const clients = [
  {
    name: 'Savvy App',
    logo: 'SA',
    description: 'Engineered a hyper-personalized financial dashboard, increasing user retention by 47%.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Splore',
    logo: 'SP',
    description: 'Built the AI-powered semantic search infrastructure processing millions of complex queries.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Finaxar',
    logo: 'FX',
    description: 'Delivered a proprietary, automated risk-assessment platform that unlocked over $15M in working capital for SMEs.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Baresght',
    logo: 'BG',
    description: 'Ongoing strategic partnership to design the predictive analytics engine for a billion-dollar asset portfolio.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'TechCorp',
    logo: 'TC',
    description: 'Transformed legacy systems into modern, scalable cloud infrastructure.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'DataFlow',
    logo: 'DF',
    description: 'Built enterprise-grade data pipelines processing 100TB+ daily.',
    gradient: 'from-teal-500 to-cyan-500'
  }
]

// Duplicate the array for seamless infinite scroll
const infiniteClients = [...clients, ...clients]

export default function ClientLogoMarquee() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade effects */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex space-x-8">
        <motion.div
          className="flex space-x-8 flex-shrink-0"
          animate={{
            x: [0, -100 * clients.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {infiniteClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="group relative flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              {/* Client logo */}
              <div className={cn(
                "w-24 h-24 rounded-xl bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
                client.gradient
              )}>
                <span className="text-white font-bold text-lg font-heading">
                  {client.logo}
                </span>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium text-center px-2">
                    {client.name}
                  </span>
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-surface border border-gray-700 rounded-lg p-3 max-w-xs shadow-xl">
                  <h4 className="font-semibold text-text-primary mb-1 text-sm">
                    {client.name}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {client.description}
                  </p>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}