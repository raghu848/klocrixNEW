'use client'

import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  ArrowRight, 
  CheckCircle,
  Briefcase,
  TrendingUp,
  Target,
  Rocket
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '../lib/utils'
import PremiumHero from './PremiumHero'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const portfolioProjects = [
  {
    title: "GDPL (Gill Developers)",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    summary: "A prestigious residential development in Mohali. We manage their social media presence and execute result-driven advertising.",
    result: "Consistent High-Quality Lead Generation",
    tags: ["Social Media", "Meta Ads", "Real Estate"]
  },
  {
    title: "WorkVEU CRM",
    category: "PropTech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    summary: "Specialized real estate CRM platform designed to streamline sales and client management through strategic digital execution.",
    result: "Optimized Conversions & Growth",
    tags: ["CRM", "SaaS", "Digital Strategy"]
  },
  {
    title: "Monga Toyota",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
    summary: "Authorized Toyota dealership in Ludhiana. We handle end-to-end social media and brand communication.",
    result: "Strengthened Market Presence",
    tags: ["Automotive", "Branding", "Social Media"]
  },
  {
    title: "Fineness Australia",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
    summary: "Leading manufacturer of high-pressure laminates based in Melbourne. We manage their overall digital performance.",
    result: "Global Brand Expansion",
    tags: ["Manufacturing", "International", "Advertising"]
  },
  {
    title: "The Grand Sky",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
    summary: "Premium residential development in Greater Mohali. We execute result-driven advertising to enhance visibility.",
    result: "3x Increase in Engagement",
    tags: ["Google Ads", "Meta Ads", "Real Estate"]
  },
  {
    title: "Gulfin Valley",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    summary: "Premium villa-based project in Himachal Pradesh focused on serene and modern living experiences.",
    result: "Premium Brand Positioning",
    tags: ["Hospitality", "Tourism", "Social Media"]
  },
  {
    title: "Dr. Gaurav Saini",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000",
    summary: "Leading Orthopedic Surgeon. We execute targeted digital campaigns to increase patient footfall and manage online reputation.",
    result: "Increased Patient Consultations",
    tags: ["Healthcare", "Digital Strategy", "Social Media"]
  },
  {
    title: "Dr. Jasleen Mavi",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000",
    summary: "Experienced Gynaecologist & Obstetrician. Comprehensive social media marketing to establish authority and trust among patients.",
    result: "Enhanced Brand Trust",
    tags: ["Healthcare", "Brand Building", "Meta Ads"]
  }
]

// 1. Work Hero
export function WorkHero() {
  return (
    <PremiumHero 
      title="Engineering Success Stories"
      splitTitle={true}
      subtitle="Case Studies"
      description="A selection of our most impactful projects that transformed businesses across industries through technical mastery."
    />
  )
}

// 2. Work Grid
export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'Real Estate', 'PropTech', 'Automotive', 'Manufacturing', 'Hospitality', 'Healthcare']
  
  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter)

  return (
    <section className="section-padding bg-[#F4FAFF]">
      <div className="container-custom">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border",
                activeFilter === cat 
                  ? "bg-primary text-white border-primary shadow-xl" 
                  : "bg-slate-50 text-slate-500 border-slate-100 hover:border-primary/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                <h3 className="text-3xl font-bold text-primary mb-6 group-hover:text-accent transition-colors">{project.title}</h3>
                
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                  {project.summary}
                </p>
                
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Key Result</p>
                    <p className="text-xl font-black text-primary">{project.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-xl border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
