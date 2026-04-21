'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Globe, TrendingUp, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import PremiumHero from './PremiumHero'

// Animation variants
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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

// Hero Section
export function AboutHero() {
  return (
    <PremiumHero 
      title="Architecting Digital Evolution"
      splitTitle={true}
      subtitle="Our Journey"
      description="We are a team of architects, engineers, and visionaries dedicated to building the foundational systems of the future since 2019."
    />
  )
}

// Our Story Section
export function OurStorySection() {
  return (
    <section className="section-padding bg-[#F4FAFF] relative overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Story" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-primary uppercase tracking-tighter">
            Our Foundation
          </motion.h2>
          <motion.div variants={fadeInUp} className="space-y-8 text-lg text-slate-500 leading-relaxed">
            <p className="font-medium text-slate-900 italic border-l-4 border-accent pl-6">
              "At Klocrix, we don't just build strategies, we create impactful experiences that position your brand ahead of the competition."
            </p>
            <p>
              Klocrix Business Solution was founded in 2019 by **Mr. Nikhil Saini & Mrs. Reetika Saini**. We are a forward-thinking business consultancy committed to accelerating brand growth across an ever-evolving marketplace. 
            </p>
            <p>
              With a relentless focus on innovation, data-driven insights, and strategic execution, we empower businesses to stand out. Through comprehensive market analysis and tailored solutions, we ensure every element of your brand aligns seamlessly with your vision and goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Mission & Vision Section
export function MissionVisionSection() {
  const items = [
    {
      icon: Target,
      title: "Analytical Thinking",
      description: "We dive deep into understanding your business landscape, audience behavior, and market dynamics to craft solutions that truly make an impact."
    },
    {
      icon: Eye,
      title: "Creative Insight",
      description: "By blending analytical thinking with creative insight, we transform complex challenges into clear, actionable strategies that drive brand visibility and growth."
    }
  ]

  return (
    <section className="section-padding bg-[#FAF7F2]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-primary">{item.title}</h3>
              <p className="text-xl text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section
export function WhyChooseUsSection() {
  const reasons = [
    {
      title: "5+ Years of Mastery",
      desc: "Years of engineering mastery and successful project deliveries since 2019."
    },
    {
      title: "Strategic Partnership",
      desc: "We don't just work for you; we work with you as a long-term strategic ally."
    },
    {
      title: "Scalable Solutions",
      desc: "Systems architected to grow with your business, from startup to enterprise."
    },
    {
      title: "Expert Global Team",
      desc: "Access to top-tier talent from across the globe, bringing diverse perspectives."
    }
  ]

  return (
    <section className="section-padding bg-[#F4FAFF]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Why Leaders Choose Klocrix</h2>
          <p className="text-lg text-slate-500">We combine technical depth with business strategy to deliver outcomes that matter.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">{reason.title}</h4>
              <p className="text-slate-500 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section
export function TeamSection() {
  return (
    <section className="section-padding bg-[#FAF7F2]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Leadership</h2>
          <p className="text-lg text-slate-500">The minds behind our engineering excellence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Nikhil Saini", role: "Founder & CEO", image: "https://i.pravatar.cc/300?u=nikhil" },
            { name: "Reetika Saini", role: "Co-Founder", image: "https://i.pravatar.cc/300?u=reetika" },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="relative mb-10 rounded-[3rem] overflow-hidden aspect-square shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">{member.name}</h4>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
export function CTASection() {
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
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">Ready to architect your digital future?</h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
            Let's start a conversation about how we can help you achieve your most ambitious business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/contact" className="px-12 py-6 bg-white text-primary font-black rounded-2xl shadow-xl hover:bg-slate-50 transition-all text-lg">
              Get in Touch
            </Link>
            <Link href="/work" className="px-12 py-6 bg-white/10 text-white border border-white/20 font-black rounded-2xl backdrop-blur-md hover:bg-white/20 transition-all text-lg">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
