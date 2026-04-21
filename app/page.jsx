'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Smartphone, 
  Palette, 
  BarChart, 
  Cloud, 
  Settings, 
  Users, 
  Star,
  Quote,
  Clock,
  Briefcase,
  Zap,
  Shield,
  TrendingUp,
  ExternalLink,
  Play
} from 'lucide-react'
import { cn } from '../lib/utils'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientLogoMarquee from '../components/ClientLogoMarquee'
import PremiumHero from '../components/PremiumHero'

// Reveal Component for scroll animations
function Reveal({ children, width = "fit-content", delay = 0.2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 },
          visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// 2. Trust Section
function TrustSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-28 bg-[#0B1220] relative border-b border-white/5 shadow-2xl z-20 overflow-hidden"
    >
      {/* Interactive Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient Dark Navy Mesh */}
        <div className="absolute inset-0 bg-[#0B1220]" />
        
        {/* Slow Moving Atmospheric Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-accent/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-accent-secondary/10 blur-[120px] rounded-full"
        />

        {/* Dynamic Mouse Spotlight */}
        <div 
          className="absolute inset-0 opacity-40 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(14, 165, 233, 0.08), transparent 40%)`
          }}
        />

        {/* Subtle Drifting Data Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3
            }}
            animate={{ 
              y: ["-10%", "110%"],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="absolute w-[1px] h-12 bg-gradient-to-b from-transparent via-accent/30 to-transparent"
          />
        ))}

        {/* Very Faint Stationary Grid */}
        <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-center opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10">
        <ClientLogoMarquee />
      </div>
    </section>
  )
}

// 3. Services Section
const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Scalable, high-performance web applications built with the latest frameworks like React and Next.js.",
    colorClass: "bg-[#1E3A8A]", // Deep Blue
    shape: "80% 20% 41% 59% / 46% 62% 38% 54%"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile solutions that provide seamless experiences across all devices.",
    colorClass: "bg-[#833857]", // Plum/Magenta (From Image)
    shape: "31% 69% 51% 49% / 56% 36% 64% 44%"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric design thinking that combines aesthetic beauty with functional excellence.",
    colorClass: "bg-[#92400E]", // Deep Amber
    shape: "62% 38% 28% 72% / 37% 55% 45% 63%"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernizing legacy systems and integrating AI to streamline your business operations.",
    colorClass: "bg-[#065F46]", // Deep Emerald
    shape: "36% 64% 71% 29% / 42% 43% 57% 58%"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud.",
    colorClass: "bg-[#075985]", // Deep Sky
    shape: "43% 57% 41% 59% / 64% 53% 47% 36%"
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "24/7 dedicated support and continuous optimization to ensure your systems never skip a beat.",
    colorClass: "bg-[#5B21B6]", // Deep Violet
    shape: "53% 47% 31% 69% / 47% 65% 35% 53%"
  }
]

function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background relative z-10">
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">Our Expertise</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Comprehensive IT Solutions for Modern Enterprises</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg text-slate-400">
              We offer a wide range of services designed to help your business thrive in an increasingly digital world.
            </p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                className="h-full z-10 group"
                style={{ perspective: "1000px" }}
              >
                {/* Minimalist Dark Card Style - Flip triggered by outer stable group bounds */}
                <div 
                  className="bg-[#13192B] border border-white/5 rounded-3xl p-8 h-full overflow-hidden relative shadow-lg transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-2xl group-hover:shadow-accent/10 group-hover:[transform:rotateY(360deg)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {/* Subtle large glow matching the first reference image */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  <div className="relative z-10 block" style={{ transform: "translateZ(30px)" }}>
                    {/* Solid Organic Icon Shape matching the second reference image */}
                    <div 
                      className={`w-14 h-14 flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110 relative ${service.colorClass}`}
                      style={{ borderRadius: service.shape }}
                    >
                      <service.icon className="w-6 h-6 relative z-10" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-slate-400 mb-2 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// 4. About Section
function AboutSection() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="about" className="section-padding bg-[#111827] overflow-hidden relative border-t border-white/5">
      <motion.div style={{ y: yParallax }} className="absolute -top-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container-custom grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative z-10">
          <Reveal delay={0.2}>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-[#0B1220]/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              <img 
                src="/case-studies/team-hero.jpeg" 
                alt="Our Team" 
                className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-4 md:-right-10 p-10 bg-surface/90 backdrop-blur-2xl border border-white/10 text-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              <p className="text-6xl font-black mb-1 text-accent">5+</p>
              <p className="text-slate-300 font-bold uppercase tracking-widest text-xs">Years of Excellence</p>
            </motion.div>
          </Reveal>
        </div>
        
        <div className="relative z-10">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">About Klocrix</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">Accelerating Brand Growth Since 2019</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Klocrix is a forward-thinking business consultancy founded by Mr. Nikhil Saini & Mrs. Reetika Saini. We are committed to accelerating your brand's growth through innovation, data-driven insights, and strategic execution.
            </p>
          </Reveal>
          
          <div className="space-y-8 mb-12">
            {[
              { title: "Strategic Mastery", desc: "Decades of experience in high-stakes digital environments." },
              { title: "Bespoke Innovation", desc: "No generic templates. Only custom-engineered excellence." },
              { title: "Global Impact", desc: "Empowering businesses across 30+ countries worldwide." }
            ].map((item, i) => (
              <Reveal key={i} delay={0.4 + (i * 0.1)}>
                <div className="flex gap-6 group">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 shadow-inner flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={0.7}>
            <Link href="/about" className="glass-button-premium mt-4 group">
              Our Full Story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// 5. Process Section
const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Deep dive into business goals, mapping out the precise architecture needed to solve complex challenges."
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We define constraints, select the perfect technology stack, and establish a robust timeline for delivery."
  },
  {
    number: "03",
    title: "Engineering",
    desc: "Agile development employing elite coding standards, rigorous testing, and continuous integration."
  },
  {
    number: "04",
    title: "Launch",
    desc: "Seamless deployment with zero downtime, paired with continuous scale support to guarantee ongoing performance."
  }
]

function ProcessSection() {
  return (
    <section className="section-padding bg-background relative border-y border-white/5 py-24 pb-48">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 bg-[url('/grid-dark.svg')] bg-center opacity-[0.03]" />
      
      <div className="container-custom relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">Our Process</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Translating Vision into Reality</h2>
          </Reveal>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="sticky w-full"
              style={{ top: `calc(10rem + ${index * 2}rem)`, zIndex: index }}
            >
              <div className="p-10 md:p-14 rounded-[2.5rem] bg-surface/90 backdrop-blur-3xl border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-colors min-h-[350px] flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                  <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 6. Case Studies Section
function CaseStudiesSection() {
  return (
    <section className="section-padding bg-[#111827] relative z-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <span className="glass-badge mb-6 inline-block">Case Studies</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Success Stories</h2>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Link href="/work" className="glass-button-premium h-14 group">
              Explore Portfolio
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {[
            {
              title: "GDPL (Gill Developers)",
              category: "Real Estate",
              image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
              problem: "Need for high-quality leads in the Mohali residential market.",
              result: "Consistent delivery of premium leads via Meta & Google Ads."
            },
            {
              title: "WorkVEU CRM",
              category: "PropTech",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
              problem: "Manual lead management slowing down real estate sales.",
              result: "Streamlined sales operations and 2x conversion rate."
            }
          ].map((project, i) => (
            <Reveal key={i} delay={0.2 + (i * 0.1)}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[2.5rem] border border-white/10 overflow-hidden mb-10 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0B1220]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-20 h-20 rounded-full bg-accent/20 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(14,165,233,0.5)] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ExternalLink className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                
                <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Challenge</p>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Outcome</p>
                    <p className="text-xl font-black text-white">{project.result}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// 7. Testimonials Section
const testimonials = [
  {
    name: "Vikram Malhotra",
    role: "Director, Real Estate Group",
    content: "Klocrix transformed our lead generation process. Their expertise in Meta and Google advertising has been instrumental in our project sales.",
    image: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    name: "Anjali Sharma",
    role: "Marketing Manager, Automotive",
    content: "The team at Klocrix handles our brand communication with exceptional precision. They delivered a consistent digital presence that resonates with our customers.",
    image: "https://i.pravatar.cc/150?u=anjali"
  },
  {
    name: "Robert Thompson",
    role: "CEO, International Manufacturing",
    content: "Working with Klocrix helped us expand our reach internationally. Their strategic digital execution is truly world-class.",
    image: "https://i.pravatar.cc/150?u=robert"
  }
]

function TestimonialsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[url('/grid-dark.svg')] bg-center bg-fixed opacity-[0.03]" />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">Testimonials</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Trusted by CEOs & Founders</h2>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="bg-surface/50 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-white/5 h-full flex flex-col hover:border-white/20 hover:-translate-y-2 hover:bg-surface/80 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                <div className="mb-10 text-accent text-opacity-30">
                  <Quote className="w-12 h-12" />
                </div>
                <p className="text-lg text-slate-300 mb-10 italic flex-1 leading-relaxed font-light">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-2xl object-cover shadow-lg border border-white/10" />
                  <div>
                    <p className="text-lg font-bold text-white">{t.name}</p>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// 8. CTA Section
function CTASection() {
  return (
    <section className="section-padding bg-[#111827]">
      <div className="container-custom gap-8">
        <div className="relative rounded-[3rem] bg-surface border border-white/10 overflow-hidden p-16 md:p-32 text-center shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-tight">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">legendary</span> together
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-slate-400 mb-16 leading-relaxed font-light">
                Ready to take your business to the next level? Our team of architects is here to help you navigate the digital landscape.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="glass-button-premium text-lg px-12 h-16 w-full sm:w-auto">
                  Start a Project
                </Link>
                <Link href="/services" className="btn-outline border-white/20 text-white hover:border-white/40 hover:bg-white/5 text-lg px-12 h-16 w-full sm:w-auto inline-flex justify-center items-center">
                  Our Capabilities
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PremiumHero 
        title="Transforming Businesses with"
        rotatingPhrases={[
          "Scalable IT Solutions.", 
          "Digital Evolution.", 
          "Enterprise Software.", 
          "Cloud Innovation."
        ]}
        subtitle="Empowering the Future of Business"
        description="We empower ambitious companies with cutting-edge technology, strategic consulting, and bespoke software that drives real-world growth."
      />
      <TrustSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
