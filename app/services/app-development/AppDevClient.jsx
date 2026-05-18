'use client'

import { 
  Smartphone, 
  Apple, 
  Play, 
  Layers,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Cpu,
  RefreshCw
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

function AppDevHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-primary">
            Transform Your Vision with a Leading <span className="text-accent">Mobile App Development Company</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Partner with a visionary mobile app development company to build scalable, high-performance applications. We specialize in seamless iOS and Android app development that delights users and drives revenue.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary">
              Build Your App
            </Link>
            <Link href="#services" className="btn-outline">
              View Capabilities
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AppDevServices() {
  const services = [
    {
      icon: Apple,
      title: "iOS App Development",
      desc: "Native Swift and Objective-C development ensuring high performance and a premium feel aligned with Apple's human interface guidelines."
    },
    {
      icon: Play,
      title: "Android App Development",
      desc: "Kotlin-based Android app development crafted for the massive Android ecosystem, ensuring compatibility across thousands of device types."
    },
    {
      icon: Layers,
      title: "Cross-Platform Apps",
      desc: "React Native and Flutter solutions to deploy your app on both platforms simultaneously, reducing time-to-market and costs."
    },
    {
      icon: Cpu,
      title: "Custom Mobile App Development",
      desc: "Enterprise-grade architecture and bespoke features built entirely around your business logic and operational needs."
    },
    {
      icon: RefreshCw,
      title: "App Modernization",
      desc: "Rewrite and refactor aging legacy apps into modern, maintainable codebases with improved UX and performance."
    },
    {
      icon: Zap,
      title: "App Strategy & Consulting",
      desc: "Strategic guidance from top app development experts to help you validate, plan, and architect your mobile product."
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">End-to-End App Development Services</h2>
          <p className="text-lg text-slate-600">As a dedicated app development company, we handle everything from architecture design to app store deployment.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <srv.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{srv.title}</h3>
              <p className="text-slate-600 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AppDevWhyUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-4xl font-bold mb-8 text-primary leading-tight">What Makes Us the Best Mobile App Development Company?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a custom mobile app development company, we bridge the gap between stunning UI/UX and robust, crash-free engineering. We build apps that people actually want to use.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  "Native performance with seamless animations",
                  "Offline capabilities and secure local storage",
                  "Rigorous automated testing and QA"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/services/ui-ux-design" className="btn-primary">
                Explore our UI/UX Process
              </Link>
            </div>
            
            <div className="bg-primary p-12 md:p-16 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="space-y-12 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Mobile Strategy: Native vs Hybrid Apps</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Wondering which path to take? Our latest guide on App Development Trends explores the pros and cons to help you make data-driven decisions.
                  </p>
                  <Link href="/blog" className="inline-flex items-center gap-2 mt-2 text-accent hover:text-white transition-colors font-medium">
                    Read the guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AppDevClient() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AppDevHero />
      <AppDevServices />
      <AppDevWhyUs />
      <Footer />
    </main>
  )
}
