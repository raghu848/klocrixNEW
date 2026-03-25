import { 
  Code, 
  Database, 
  Smartphone, 
  Settings, 
  TrendingUp, 
  Cloud,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CosmicBackground from '../../components/SimpleCosmicBackground'

// Hero Section
function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CosmicBackground />
      
      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-bold font-heading mb-6 leading-none tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Our Arsenal of</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>Digital Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            We offer more than services; we provide end-to-end capabilities to own your entire digital transformation journey.
          </p>
        </div>
      </div>
    </section>
  )
}

// Services Grid Section
function ServicesGridSection() {
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
        'Microservices architecture',
        'Performance optimization'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      link: '/contact'
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
        'Responsive web design',
        'E-commerce solutions'
      ],
      gradient: 'from-purple-500 to-pink-500',
      link: '/contact'
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
        'Business intelligence dashboards',
        'AI-powered insights'
      ],
      gradient: 'from-green-500 to-emerald-500',
      link: '/services/data-science',
      featured: true
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
        'Inventory management',
        'Financial management systems'
      ],
      gradient: 'from-orange-500 to-red-500',
      link: '/contact'
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions specializing in Real Estate & Healthcare industries.',
      features: [
        'Real estate lead generation',
        'Healthcare marketing compliance',
        'SEO & content strategy',
        'Social media management',
        'Performance analytics'
      ],
      gradient: 'from-yellow-500 to-orange-500',
      link: '/contact'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'AWS Cloud Services',
      description: 'Scalable, secure cloud infrastructure solutions that grow with your business needs.',
      features: [
        'Cloud migration & strategy',
        'Infrastructure as Code',
        'DevOps & CI/CD pipelines',
        'Security & compliance',
        'Cost optimization'
      ],
      gradient: 'from-indigo-500 to-purple-500',
      link: '/contact'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`card group hover:cosmic-glow transition-all duration-300 relative ${
                  service.featured ? 'lg:col-span-2 border-accent' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-accent text-background px-3 py-1 rounded text-sm font-semibold">
                    Flagship Service
                  </div>
                )}
                
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-heading mb-3 text-text-primary group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-accent hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      <span>
                        {service.featured ? 'Learn More' : 'Get Started'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business processes, challenges, and goals to architect the perfect solution.'
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Detailed blueprints and user experience designs that ensure every feature drives business value.'
    },
    {
      number: '03',
      title: 'Development & Engineering',
      description: 'Agile development with continuous feedback loops, ensuring rapid iteration and quality delivery.'
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization to ensure your solution exceeds expectations.'
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'Seamless deployment and ongoing support to ensure your success long after launch.'
    }
  ]

  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Our</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Engineering Process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A proven methodology refined over 25+ years of delivering exceptional results
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 card hover:cosmic-glow transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-heading">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-heading mb-2 text-text-primary">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="card text-center cosmic-glow max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Ready to Transform</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Your Business?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can drive your digital transformation and unlock new possibilities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Start Your Project
            </Link>
            <Link href="/work" className="btn-secondary text-lg px-10 py-4">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main className="relative">
      <Header />
      <ServicesHero />
      <ServicesGridSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Services',
  description: 'Explore Klocrix\'s comprehensive digital services: Custom Software Development, Data Science & Engineering, Web & Mobile Apps, ERP Solutions, and more.',
}