'use client'

import { 
  Code2, 
  ShoppingCart, 
  Layout, 
  Smartphone,
  Server,
  Shield,
  ArrowRight,
  CheckCircle,
  Database,
  Globe
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

function WebDevHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-primary">
            The Premier <span className="text-accent">Web Development Company in Mohali</span> for Ambitious Brands
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            As a leading web development company in Mohali, we engineer dynamic, high-performance web experiences. From intuitive interfaces to robust backends, our full stack web development company builds digital assets that drive real business growth.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link href="#services" className="btn-outline">
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function WebDevServices() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      desc: "Bespoke architectures built with modern frameworks like React and Next.js. We translate complex requirements into seamless digital solutions."
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Web Development",
      desc: "Scalable ecommerce web development solutions designed to maximize conversions, optimize user flows, and integrate seamlessly with your inventory systems."
    },
    {
      icon: Server,
      title: "Full Stack Development",
      desc: "End-to-end full stack web development from database design to API development and reactive frontend interfaces."
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      desc: "App-like experiences in the browser that work offline, load instantly, and keep users engaged across all devices."
    },
    {
      icon: Layout,
      title: "CMS Integrations",
      desc: "Empower your team with headless CMS solutions that allow effortless content management and unmatched frontend flexibility."
    },
    {
      icon: Globe,
      title: "Web App Modernization",
      desc: "Upgrade legacy applications to modern tech stacks, improving performance, security, and developer velocity."
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">Comprehensive Website Development Services</h2>
          <p className="text-lg text-slate-600">Your website is your digital storefront. Our website development services ensure it performs beautifully.</p>
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

function WebDevWhyUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-4xl font-bold mb-8 text-primary leading-tight">Why Choose Our Web Development Company in Chandigarh & Mohali?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are a business website development company dedicated to ROI. We don't just write code; we align our technical strategy with your commercial objectives.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  "Performance-optimized Next.js architectures",
                  "SEO-first development practices",
                  "Scalable microservices and robust APIs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="btn-primary">
                Ready to Partner?
              </Link>
            </div>
            
            <div className="bg-primary p-12 md:p-16 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="space-y-12 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Latest Insights: Web Development Trends 2026</h3>
                  <p className="text-slate-300 leading-relaxed">
                    The web is evolving. From Edge computing to Server Actions and WebAssembly, we stay ahead of the curve so your platform remains future-proof.
                  </p>
                  <Link href="/blog" className="inline-flex items-center gap-2 mt-6 text-accent hover:text-white transition-colors font-medium">
                    Read our insights <ArrowRight className="w-4 h-4" />
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

export default function WebDevClient() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <WebDevHero />
      <WebDevServices />
      <WebDevWhyUs />
      <Footer />
    </main>
  )
}
