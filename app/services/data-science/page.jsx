import { 
  Database, 
  Brain, 
  BarChart3, 
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CosmicBackground from '../../../components/SimpleCosmicBackground'
import CaseStudyCard from '../../../components/CaseStudyCard'
import { caseStudies } from '../../../data/caseStudies'

// Hero Section
function DataScienceHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CosmicBackground />
      
      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-bold font-heading mb-6 leading-none tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Transform Data Chaos</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 max-w-5xl mx-auto" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent', lineHeight: '1.1' }}>Into Your Unfair Advantage</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            In the new economy, data is the ultimate currency. But raw data is a liability. Klocrix engineers the intelligent systems that refine it into your most strategic asset—driving automated decisions, predicting market shifts, and creating unbreachable competitive moats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Unlock Your Data's Power
            </Link>
            <Link href="#case-study" className="btn-secondary text-lg px-10 py-4">
              See Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Featured Case Study Section
function FeaturedCaseStudySection() {
  return (
    <section id="case-study" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Featured</span>
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>Success Story</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card cosmic-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">BG</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-text-primary">
                      Baresght Portfolio Intelligence
                    </h3>
                    <p className="text-text-secondary">Singapore</p>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-6">
                  Architected a centralized data warehouse and custom ML models to predict asset performance and tenant churn for a billion-dollar real estate portfolio.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-text-secondary">Processed 10TB+ of historical real estate data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-text-secondary">Built predictive models with 94% accuracy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-text-secondary">Automated 80% of manual reporting processes</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card bg-background border-accent/30">
                  <div className="text-3xl font-bold cosmic-text mb-1">22%</div>
                  <div className="text-text-primary font-semibold">Operational Efficiency Increase</div>
                </div>
                <div className="card bg-background border-accent/30">
                  <div className="text-3xl font-bold cosmic-text mb-1">75%</div>
                  <div className="text-text-primary font-semibold">Reduction in Data Processing Time</div>
                </div>
                <div className="card bg-background border-accent/30">
                  <div className="text-3xl font-bold cosmic-text mb-1">$2M+</div>
                  <div className="text-text-primary font-semibold">Annual Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Our Process Section
function ProcessSection() {
  const steps = [
    {
      icon: Database,
      title: 'Diagnose & Architect',
      description: 'We audit your data landscape and design a target architecture that turns fragmentation into a single source of truth.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Ingest & Cleanse',
      description: 'We build robust pipelines to automate the flow of clean, trustworthy data from all sources.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Model & Predict',
      description: 'Our team develops custom machine learning models tailored to your specific business questions.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Visualize & Act',
      description: 'We deliver intuitive, powerful dashboards that transform complex insights into actionable commands.',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Our</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Data Engineering Process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A systematic approach to transforming your data into competitive intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="card group hover:cosmic-glow transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-text-primary group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Capabilities Section
function CapabilitiesSection() {
  const capabilities = [
    {
      category: 'Machine Learning & AI',
      items: [
        'Predictive analytics & forecasting',
        'Natural language processing',
        'Computer vision & image recognition',
        'Recommendation systems',
        'Anomaly detection'
      ]
    },
    {
      category: 'Data Engineering',
      items: [
        'Real-time data pipelines',
        'Data warehouse architecture',
        'ETL/ELT processes',
        'Big data processing (Spark, Hadoop)',
        'Cloud data platforms (AWS, Azure, GCP)'
      ]
    },
    {
      category: 'Analytics & Visualization',
      items: [
        'Interactive dashboards',
        'Business intelligence reporting',
        'Statistical analysis',
        'A/B testing frameworks',
        'Performance monitoring'
      ]
    },
    {
      category: 'Industry Expertise',
      items: [
        'Real estate & property management',
        'Financial services & fintech',
        'Healthcare & life sciences',
        'E-commerce & retail',
        'Manufacturing & logistics'
      ]
    }
  ]

  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Our</span>
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>Data Science Capabilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="card hover:cosmic-glow transition-all duration-300">
              <h3 className="text-xl font-bold font-heading mb-4 text-text-primary">
                {capability.category}
              </h3>
              <ul className="space-y-3">
                {capability.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Related Case Studies Section
function RelatedCaseStudiesSection() {
  const relatedCases = [caseStudies.savvyApp, caseStudies.finaxar]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">More</span>
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>Data Science Success Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {relatedCases.map((project, index) => (
            <CaseStudyCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/work" className="btn-primary">
            View All Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="card text-center cosmic-glow max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Ready to Unlock</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Your Data's Potential?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Transform your data from a cost center into your most valuable strategic asset. Let's engineer your competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Start Your Data Journey
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-10 py-4">
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function DataSciencePage() {
  return (
    <main className="relative">
      <Header />
      <DataScienceHero />
      <FeaturedCaseStudySection />
      <ProcessSection />
      <CapabilitiesSection />
      <RelatedCaseStudiesSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Data Science & Engineering',
  description: 'Transform data chaos into your unfair advantage with Klocrix\'s AI and machine learning solutions. Custom predictive analytics and intelligent systems.',
}