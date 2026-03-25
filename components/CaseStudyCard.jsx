'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { cn } from '../lib/utils'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudyCard({ 
  title, 
  client, 
  clientLogo,
  summary, 
  result, 
  results = [],
  tags = [],
  image,
  link,
  className,
  ...props 
}) {
  return (
    <motion.div
      className={cn(
        "card group cursor-pointer overflow-hidden hover:cosmic-glow transition-all duration-300",
        className
      )}
      whileHover={{ y: -5 }}
      {...props}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {client && (
            <div className="flex items-center space-x-3 mb-2">
              {clientLogo && (
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {clientLogo}
                  </span>
                </div>
              )}
              <span className="text-text-secondary text-sm font-medium">
                {client}
              </span>
            </div>
          )}
          <h3 className="text-xl font-bold font-heading text-text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
            {title}
          </h3>
        </div>
        <motion.div
          className="text-text-secondary group-hover:text-accent transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ExternalLink className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Summary */}
      {summary && (
        <p className="text-text-secondary leading-relaxed mb-4">
          {summary}
        </p>
      )}

      {/* Results */}
      {result && (
        <div className="mb-4">
          <div className="text-accent font-semibold text-lg mb-1">
            {result}
          </div>
        </div>
      )}

      {/* Bullet Results */}
      {results.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-2">
            {results.map((resultItem, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-text-secondary text-sm">
                  {resultItem}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-surface border border-gray-700 rounded text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
        {link ? (
          <Link 
            href={link}
            className="flex items-center space-x-2 text-accent hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
          >
            <span>Read Full Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        ) : (
          <span className="text-text-secondary text-sm">
            Case study coming soon
          </span>
        )}
      </div>
    </motion.div>
  )
}

// Re-export for convenience
export { caseStudies }