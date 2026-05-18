'use client'

import { 
  PenTool, 
  Figma, 
  MousePointer2, 
  Eye,
  Heart,
  Palette,
  ArrowRight,
  CheckCircle,
  LayoutTemplate,
  Wand2,
  Smartphone
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

function UiUxHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-primary">
            World-Class <span className="text-accent">UI UX Design Services</span> That Drive Engagement
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Great products are built on exceptional design. Our UI UX design services combine aesthetic brilliance with behavioral science. As a premier UI UX design agency, we craft digital experiences that users love.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary">
              Discuss Your Design
            </Link>
            <Link href="#services" className="btn-outline">
              Explore Our Process
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function UiUxServices() {
  const services = [
    {
      icon: LayoutTemplate,
      title: "Website UI UX Design",
      desc: "Immersive, accessible, and conversion-focused website designs that capture attention and guide users effortlessly towards your goals."
    },
    {
      icon: Smartphone,
      title: "Mobile App UI UX Design",
      desc: "Intuitive touch interfaces and fluid micro-animations. We are a specialized mobile app ui ux design agency building habit-forming mobile experiences."
    },
    {
      icon: Eye,
      title: "UI UX Consulting Services",
      desc: "Comprehensive UX audits, user journey mapping, and heuristic evaluations to optimize your existing digital products."
    },
    {
      icon: PenTool,
      title: "Wireframing & Prototyping",
      desc: "Rapid, interactive prototypes that allow you to validate concepts and test with real users before writing a single line of code."
    },
    {
      icon: Palette,
      title: "Design Systems",
      desc: "Scalable, reusable component libraries that ensure visual consistency across all your enterprise applications."
    },
    {
      icon: Heart,
      title: "User Research & Testing",
      desc: "Data-driven design decisions based on real user feedback, A/B testing, and deep behavioral analytics."
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">Strategic UI UX Consulting Services & Execution</h2>
          <p className="text-lg text-slate-600">From initial wireframes to pixel-perfect handoffs, we deliver designs that elevate your brand and engage your audience.</p>
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

function UiUxWhyUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-4xl font-bold mb-8 text-primary leading-tight">Partner with an Award-Winning UI UX Design Company</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Working with a specialized UI UX design company ensures your digital touchpoints are both beautiful and highly functional. We transform complex systems into intuitive experiences.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  "Figma-native workflows with seamless developer handoff",
                  "Accessibility-first design (WCAG compliance)",
                  "Conversion rate optimization (CRO) focused layouts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/services/web-development" className="btn-primary">
                Explore Web Development
              </Link>
            </div>
            
            <div className="bg-primary p-12 md:p-16 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="space-y-12 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Design Insights: What is UI UX Design?</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Curious about the UI vs UX design difference or the latest UI UX design trends? Check out our design blog where we break down the psychology behind great interfaces.
                  </p>
                  <Link href="/blog" className="inline-flex items-center gap-2 mt-2 text-accent hover:text-white transition-colors font-medium">
                    Read our design insights <ArrowRight className="w-4 h-4" />
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

export default function UiUxClient() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <UiUxHero />
      <UiUxServices />
      <UiUxWhyUs />
      <Footer />
    </main>
  )
}
