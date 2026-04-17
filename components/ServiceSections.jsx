'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Database, 
  Settings, 
  TrendingUp, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Shield,
  Layers,
  Cpu
} from 'lucide-react'
import Link from 'next/link'
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

// 1. Services Hero
export function ServicesHero() {
  return (
    <PremiumHero 
      title="Digital Excellence Redefined"
      splitTitle={true}
      subtitle="Our Arsenal"
      description="We provide end-to-end capabilities to own your entire digital transformation journey, from strategy to deployment."
    />
  )
}

// 2. Services Detailed Grid
export function ServicesDetailedGrid() {
  const services = [
    {
      id: 'custom-software',
      icon: Code,
      title: 'Custom Software Development',
      description: 'Bespoke applications engineered to fit your exact business requirements, built with scalability and performance at the core.',
      features: [
        'Enterprise application development',
        'Legacy system modernization',
        'API development & integration',
        'Microservices architecture'
      ]
    },
    {
      id: 'web-mobile',
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      description: 'Cutting-edge web and mobile solutions that deliver exceptional user experiences across all platforms.',
      features: [
        'Progressive Web Apps (PWA)',
        'Native iOS & Android apps',
        'Cross-platform development',
        'Responsive web design'
      ]
    },
    {
      id: 'data-science',
      icon: Database,
      title: 'Data Science & Engineering',
      description: 'Transform data chaos into your unfair advantage with intelligent systems that drive automated decisions.',
      features: [
        'Machine Learning models',
        'Predictive analytics',
        'Data pipeline automation',
        'Business intelligence dashboards'
      ]
    },
    {
      id: 'erp',
      icon: Settings,
      title: 'ERP Solutions',
      description: 'Comprehensive enterprise resource planning systems that streamline operations and boost efficiency.',
      features: [
        'Custom ERP development',
        'ERP implementation & migration',
        'Process automation',
        'Inventory management'
      ]
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure that ensures your business is always online and performing at its peak.',
      features: [
        'Cloud migration strategy',
        'AWS/Azure/GCP management',
        'DevOps & CI/CD pipelines',
        'Cloud security & compliance'
      ]
    },
    {
      id: 'digital-transformation',
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Strategic consulting to modernize your business processes and adopt new technologies for the digital age.',
      features: [
        'Technology audit & roadmap',
        'Agile transformation',
        'Customer experience design',
        'Digital culture shift'
      ]
    }
  ]

  return (
    <section className="section-padding bg-[#FAF7F2]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-slate-500 mb-10 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all">
                Discuss Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 3. CTA Section for Services
export function ServicesCTA() {
  return (
    <section className="section-padding bg-white text-center relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto bg-primary rounded-[4rem] p-16 md:p-24 text-white overflow-hidden relative shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">Have a specific requirement?</h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            Our team of architects is ready to help you define and build the perfect solution for your business.
          </p>
          <Link href="/contact" className="px-12 py-6 bg-white text-primary font-black rounded-2xl shadow-xl hover:bg-slate-50 transition-all text-lg">
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
