'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  Target, 
  TrendingUp, 
  BookOpen, 
  GraduationCap, 
  ArrowRight, 
  Star, 
  Check, 
  Clock, 
  Award,
  Users,
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { cn } from '../lib/utils'
import PremiumHero from './PremiumHero'
import InteractiveWavesBackground from './InteractiveWavesBackground'

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

const COURSES = [
  {
    id: "marketing",
    name: "Digital Marketing",
    shortName: "Marketing",
    heroTitle: "Master Digital Marketing",
    description: "Join Mohali's most practical digital marketing bootcamp. 12 weeks of intensive, hands-on training.",
    modules: [
      { title: "Foundations", items: ["Introduction to Digital Marketing", "Market Research & Analysis", "WordPress Fundamentals", "SEO Basics"] },
      { title: "SEO & Content", items: ["Keyword Research", "On-Page & Technical SEO", "Strategy & Planning", "Content Marketing"] },
      { title: "Paid Media", items: ["Meta Ads Mastery", "Google Ads (PPC/Display)", "LinkedIn Marketing", "Retargeting"] },
      { title: "Analytics", items: ["Google Analytics 4", "Google Tag Manager", "CRO & AB Testing", "Reporting"] }
    ]
  },
  {
    id: "python",
    name: "Python Development",
    shortName: "Python",
    heroTitle: "Python Engineering Mastery",
    description: "Build robust backend systems and data automation tools with the world's most versatile language.",
    modules: [
      { title: "Core Basics", items: ["Advanced Data Structures", "Control Flow & Functions", "Exception Handling", "File I/O & Modules"] },
      { title: "OOP Mastery", items: ["Classes & Objects", "Inheritance & Polymorphism", "Encapsulation", "Decorators & Generators"] },
      { title: "Data & Web", items: ["Pandas & NumPy Basics", "Web Scraping (BS4/Selenium)", "API Integration", "Flask Essentials"] },
      { title: "Django Prof.", items: ["MTV Architecture", "Django REST Framework", "Database (SQL)", "Authentication Systems"] }
    ]
  },
  {
    id: "fullstack",
    name: "Fullstack MERN",
    shortName: "Fullstack",
    heroTitle: "MERN Stack Architecture",
    description: "Become a Fullstack Architect. Build scalable enterprise applications from frontend to cloud deployment.",
    modules: [
      { title: "Frontend Pro", items: ["React JS & Next.js 14", "Tailwind CSS Architecture", "Framer Motion", "State (Zustand/Redux)"] },
      { title: "Backend Eng.", items: ["Node.js Runtime", "Express.js Architecture", "Middleware Design", "JWT & Auth Systems"] },
      { title: "Cloud & DB", items: ["MongoDB / NoSQL", "Mongoose Modeling", "Redis Caching", "PostgreSQL Basics"] },
      { title: "DevOps", items: ["Vercel/AWS Deployment", "CI/CD Pipelines", "System Design", "Unit Testing"] }
    ]
  }
]

// 1. Training Hero
export function TrainingHero() {
  return (
    <PremiumHero 
      title="Elite Industrial Training"
      splitTitle={true}
      subtitle="Job-Ready Programs"
      description="Join Chandigarh's most rigorous industrial training programs. We don't just teach code; we build engineers and architects."
      primaryLink="#curriculum"
      primaryLinkText="Explore Courses"
      secondaryLink="#contact"
      secondaryLinkText="Talk to Advisor"
      bgComponent={<InteractiveWavesBackground className="absolute inset-0 z-0 opacity-80 [mask-image:linear-gradient(to_right,rgba(0,0,0,0.15)_0%,rgba(0,0,0,1)_50%)]" />}
    />
  )
}

// 2. Benefits Grid (Unchanged)
export function TrainingBenefits() {
  const benefits = [
    { icon: Zap, title: "Live Training", desc: "Interactive sessions with industry veterans who manage real client budgets." },
    { icon: Target, title: "Real Projects", desc: "Work on live campaigns and gain practical experience that matters." },
    { icon: TrendingUp, title: "90% Practical", desc: "Less theory, more implementation. We focus on ROI-driven marketing." },
    { icon: Award, title: "Certification", desc: "Get industry-recognized certifications to boost your career profile." },
    { icon: Users, title: "Small Batches", desc: "Personalized attention with limited students per batch for better learning." },
    { icon: GraduationCap, title: "Job Ready", desc: "Exit the bootcamp with a portfolio of real work and interview skills." }
  ]

  return (
    <section className="section-padding bg-[#FAF7F2]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Why Choose Klocrix Training?</h2>
          <p className="text-lg text-slate-500">Our bootcamp is designed to bridge the gap between academic learning and industry requirements.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 3. Curriculum Section
export function TrainingCurriculum() {
  const [activeCourse, setActiveCourse] = useState(0)
  const [activeModule, setActiveModule] = useState(0)
  
  const currentCourse = COURSES[activeCourse]

  return (
    <section id="curriculum" className="section-padding bg-[#F4FAFF] overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-black tracking-widest uppercase text-sm mb-4 block">Our Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">Expert-Led Learning Paths</h2>
        </div>

        {/* Course Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {COURSES.map((course, i) => (
            <button
              key={course.id}
              onClick={() => {
                setActiveCourse(i)
                setActiveModule(0)
              }}
              className={cn(
                "px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300",
                activeCourse === i 
                  ? "bg-primary text-white shadow-xl scale-105" 
                  : "bg-white text-slate-400 border border-slate-100 hover:border-primary/40"
              )}
            >
              {course.name}
            </button>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-6">
            {currentCourse.modules.map((m, i) => (
              <button 
                key={i} 
                onClick={() => setActiveModule(i)}
                className={cn(
                  "text-left p-8 rounded-3xl border transition-all duration-500 shadow-sm relative group overflow-hidden",
                  activeModule === i 
                    ? "bg-primary text-white border-primary shadow-xl z-10" 
                    : "bg-white text-slate-500 border-slate-100 hover:border-primary/30"
                )}
              >
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-500",
                  activeModule === i ? "scale-150" : "scale-0"
                )} />
                <span className="text-xs font-black uppercase tracking-[0.2em] mb-2 block opacity-60">Module 0{i+1}</span>
                <span className="text-2xl font-black relative z-10">{m.title}</span>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-8 bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCourse}-${activeModule}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-4xl font-black mb-12 text-primary">{currentCourse.modules[activeModule].title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {currentCourse.modules[activeModule].items.map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-accent transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// 4. Pricing & Details
export function TrainingPricing() {
  return (
    <section className="section-padding bg-[#FAF7F2]">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto bg-primary rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-12 md:p-20 flex-1 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-5xl font-black mb-10 leading-tight">Program Details</h2>
            <div className="space-y-10 mb-16">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent shadow-lg backdrop-blur-md">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Duration</p>
                  <p className="text-2xl font-bold">12 Weeks Mastery</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent shadow-lg backdrop-blur-md">
                  <Calendar className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Next Batch</p>
                  <p className="text-2xl font-bold">Starts Soon</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent shadow-lg backdrop-blur-md">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-2xl font-bold">Mohali / Online Hybrid</p>
                </div>
              </div>
            </div>
            <p className="text-white/60 text-lg font-medium bg-white/5 p-6 rounded-2xl border border-white/10">Limited to 15 seats per program to ensure personalized architectural guidance.</p>
          </div>
          
          <div className="p-12 md:p-20 bg-slate-50 flex-1 flex flex-col justify-center items-center text-center">
            <p className="text-slate-400 font-black uppercase tracking-[0.2em] mb-6">Course Investment</p>
            <div className="mb-12">
              <span className="text-8xl font-black text-primary tracking-tighter">₹30,000</span>
              <p className="text-slate-400 mt-2 font-bold uppercase text-sm tracking-widest">All Industrial Tracks</p>
            </div>
            <ul className="space-y-6 mb-16 text-left w-full max-w-sm">
              {["Corporate Project Access", "1-on-1 Mentorship", "Placement Assistance", "Industry Certifications"].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-slate-600 font-bold">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="w-full py-6 bg-primary text-white font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(11,18,32,0.4)] hover:scale-[1.02] transition-all text-xl">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// 5. Contact Form Section (Unchanged)
export function TrainingContact() {
  return (
    <section id="contact" className="section-padding bg-[#F4FAFF]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-primary leading-tight">Ready to start your journey?</h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Have questions about the bootcamp? Our advisors are here to help you decide if this is the right path for your career goals.
            </p>
            
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Call Advisor</p>
                  <p className="text-2xl font-black text-primary">+91 75085 35271</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold" placeholder="john@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Message</label>
                <textarea className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-40 font-bold" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button className="w-full py-6 bg-primary text-white font-black rounded-2xl shadow-xl hover:bg-primary-light transition-all text-xl">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

