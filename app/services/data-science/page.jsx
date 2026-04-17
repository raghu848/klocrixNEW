'use client'

import { 
  Database, 
  Brain, 
  BarChart3, 
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Cpu,
  LineChart,
  Search,
  PieChart
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
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// 1. Data Science Hero
function DataScienceHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6">
            Data Science & AI
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-primary">
            Transform Data Into Your <span className="text-accent">Strategic Asset</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            In the new economy, data is the ultimate currency. Klocrix engineers the intelligent systems that refine raw data into your most strategic advantage.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary">
              Discuss AI Strategy
            </Link>
            <Link href="#capabilities" className="btn-outline">
              Explore Capabilities
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// 2. Capabilities Section
function DataCapabilities() {
  const capabilities = [
    {
      icon: Brain,
      title: "Machine Learning",
      desc: "Custom ML models designed to solve complex business problems and automate decision-making processes."
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      desc: "Anticipate market trends, customer behavior, and operational shifts before they happen."
    },
    {
      icon: Database,
      title: "Data Engineering",
      desc: "Robust data pipelines and architectures that ensure your data is clean, accessible, and secure."
    },
    {
      icon: PieChart,
      title: "Business Intelligence",
      desc: "Interactive dashboards and reporting tools that provide real-time visibility into your business metrics."
    },
    {
      icon: Cpu,
      title: "AI Integration",
      desc: "Seamlessly integrate artificial intelligence into your existing workflows and legacy systems."
    },
    {
      icon: Search,
      title: "Semantic Search",
      desc: "Advanced search infrastructure that understands intent and context for more accurate results."
    }
  ]

  return (
    <section id="capabilities" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Core Capabilities</h2>
          <p className="text-lg text-slate-600">We provide the technical expertise and strategic vision needed to succeed in an AI-first world.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <cap.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{cap.title}</h3>
              <p className="text-slate-600 leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 3. Success Story Section
function FeaturedSuccessStory() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Case Study</span>
              <h2 className="text-4xl font-bold mb-8 text-primary leading-tight">Baresght Portfolio Intelligence</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Architected a centralized data warehouse and custom ML models to predict asset performance and tenant churn for a billion-dollar real estate portfolio in Singapore.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  "Processed 10TB+ of historical real estate data",
                  "Built predictive models with 94% accuracy",
                  "Automated 80% of manual reporting processes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/work" className="btn-primary">
                View All Case Studies
              </Link>
            </div>
            
            <div className="bg-primary p-12 md:p-16 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="space-y-12 relative z-10">
                <div>
                  <p className="text-6xl font-black text-accent mb-2">22%</p>
                  <p className="text-xl font-medium text-slate-300">Operational Efficiency Increase</p>
                </div>
                <div>
                  <p className="text-6xl font-black text-accent mb-2">$2M+</p>
                  <p className="text-xl font-medium text-slate-300">Annual Savings Identified</p>
                </div>
                <div>
                  <p className="text-6xl font-black text-accent mb-2">94%</p>
                  <p className="text-xl font-medium text-slate-300">Prediction Accuracy Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function DataSciencePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <DataScienceHero />
      <DataCapabilities />
      <FeaturedSuccessStory />
      <Footer />
    </main>
  )
}
