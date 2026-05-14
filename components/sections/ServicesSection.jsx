'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Cloud,
  Settings
} from 'lucide-react'
import Reveal from '../Reveal'
import TypingHeading from '../TypingHeading'

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

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background relative z-10 scroll-mt-20 md:scroll-mt-32">
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal delay={0.1}>
            <span className="glass-badge mb-6 inline-block">Our Expertise</span>
          </Reveal>
            <TypingHeading
            text="Comprehensive IT Solutions for Modern Enterprises"
            className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
            delay={0.2}
          />
          <Reveal delay={0.3}>
            <p className="text-lg text-slate-400">
              We offer a wide range of services designed to help your business thrive in an increasingly digital world.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
