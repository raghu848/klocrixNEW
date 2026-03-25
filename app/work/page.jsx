import { Filter } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CosmicBackground from '../../components/SimpleCosmicBackground'
import CaseStudyCard from '../../components/CaseStudyCard'
import { caseStudies } from '../../data/caseStudies'

// Portfolio data - extending the existing case studies
const portfolioProjects = [
  {
    ...caseStudies.baresght,
    category: 'Data Science',
    image: '/images/baresght-portfolio.jpg'
  },
  {
    ...caseStudies.savvyApp,
    category: 'Mobile App',
    image: '/images/savvy-app.jpg'
  },
  {
    ...caseStudies.splore,
    category: 'Web App',
    image: '/images/splore-search.jpg'
  },
  {
    ...caseStudies.finaxar,
    category: 'Data Science',
    image: '/images/finaxar-platform.jpg'
  },
  // Additional projects
  {
    title: "Smart Inventory Management System",
    client: "TechCorp Industries",
    clientLogo: "TC",
    summary: "Built an AI-powered inventory management system that predicts demand and optimizes stock levels.",
    result: "30% reduction in inventory costs",
    results: [
      "Reduced stockouts by 85%",
      "Improved demand forecasting accuracy to 92%",
      "Automated 70% of reordering processes"
    ],
    tags: ["ERP", "AI", "Inventory Management", "Automation"],
    category: "ERP",
    link: "/work/techcorp"
  },
  {
    title: "Healthcare Patient Portal",
    client: "MediCare Plus",
    clientLogo: "MP",
    summary: "Developed a comprehensive patient portal with telemedicine capabilities and health record management.",
    result: "95% patient satisfaction rate",
    results: [
      "Reduced appointment scheduling time by 60%",
      "Increased patient engagement by 45%",
      "Streamlined clinical workflows"
    ],
    tags: ["Healthcare", "Web App", "Telemedicine", "Portal"],
    category: "Web App",
    link: "/work/medicare-plus"
  },
  {
    title: "Real Estate Lead Generation Platform",
    client: "PropertyMax",
    clientLogo: "PM",
    summary: "Created a multi-channel digital marketing platform specifically designed for real estate lead generation.",
    result: "200% increase in qualified leads",
    results: [
      "Generated 5000+ leads per month",
      "Improved conversion rate by 150%",
      "Automated lead nurturing workflows"
    ],
    tags: ["Digital Marketing", "Real Estate", "Lead Generation", "CRM"],
    category: "Digital Marketing",
    link: "/work/propertymax"
  },
  {
    title: "E-commerce Mobile App",
    client: "ShopSmart",
    clientLogo: "SS",
    summary: "Built a feature-rich mobile commerce app with personalized recommendations and social shopping features.",
    result: "300% increase in mobile sales",
    results: [
      "Achieved 4.8/5 app store rating",
      "Increased average order value by 40%",
      "Reduced cart abandonment by 55%"
    ],
    tags: ["E-commerce", "Mobile App", "Personalization", "Social"],
    category: "Mobile App",
    link: "/work/shopsmart"
  }
]

// Hero Section
function WorkHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CosmicBackground />
      
      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-bold font-heading mb-6 leading-none tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Our Portfolio of</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>Engineered Success</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            Don't just take our word for it. Explore the tangible results we've delivered for our clients across industries and technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

// Portfolio Section
function PortfolioSection() {
  const filters = ['All', 'Data Science', 'Web App', 'Mobile App', 'ERP', 'Digital Marketing']
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-surface text-text-secondary hover:text-accent border border-gray-800 hover:border-accent"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <CaseStudyCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: "8", label: "Featured Projects", description: "Showcasing our diverse expertise" },
    { number: "6", label: "Industries Served", description: "From fintech to healthcare" },
    { number: "150%", label: "Average ROI Increase", description: "Measurable business impact" },
    { number: "98%", label: "Client Satisfaction", description: "Long-term partnerships built" }
  ]

  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Our Work</span>
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>By the Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="card group-hover:cosmic-glow transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold font-heading cosmic-text mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-text-primary mb-2">
                  {stat.label}
                </div>
                <div className="text-text-secondary text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Klocrix transformed our data chaos into a strategic advantage. Their predictive models have revolutionized how we make investment decisions.",
      author: "Sarah Chen",
      title: "CTO, Baresght",
      company: "Singapore"
    },
    {
      quote: "The team's expertise in fintech is unmatched. They delivered a platform that exceeded our expectations and drove incredible user engagement.",
      author: "Michael Rodriguez",
      title: "Founder, Savvy App",
      company: "USA"
    },
    {
      quote: "Working with Klocrix felt like having an extension of our own team. Their strategic approach and technical excellence are truly exceptional.",
      author: "David Park",
      title: "Head of Engineering, Splore",
      company: "Canada"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">What Our</span>
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card hover:cosmic-glow transition-all duration-300">
              <div className="mb-6">
                <div className="text-accent text-6xl font-serif leading-none">"</div>
                <p className="text-text-secondary leading-relaxed -mt-2">
                  {testimonial.quote}
                </p>
              </div>
              <div>
                <div className="font-semibold text-text-primary">{testimonial.author}</div>
                <div className="text-text-secondary text-sm">{testimonial.title}</div>
                <div className="text-accent text-sm">{testimonial.company}</div>
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
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="card text-center cosmic-glow max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-widest uppercase flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Ready to Be Our</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>Next Success Story?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Join the ranks of visionary companies that have transformed their businesses with Klocrix. Let's engineer your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-primary text-lg px-10 py-4">
              Start Your Project
            </a>
            <a href="/services" className="btn-secondary text-lg px-10 py-4">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function WorkPage() {
  return (
    <main className="relative">
      <Header />
      <WorkHero />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Our Work',
  description: 'Explore Klocrix\'s portfolio of successful projects. From data science to web development, see how we\'ve transformed businesses across industries.',
}