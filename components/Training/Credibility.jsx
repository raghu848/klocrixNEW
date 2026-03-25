'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { Star, Award, Users } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Freelance Digital Marketer',
    content: 'Got my first freelance gig in just a few months after completing the course. The real client projects gave me the confidence to pitch directly.',
    rating: 5,
  },
  {
    name: 'Priya Kaur',
    role: 'Digital Marketing Executive',
    content: 'Landed a job at a top Chandigarh agency right after graduation. The live training and industry connections made all the difference.',
    rating: 5,
  },
  {
    name: 'Arjun Singh',
    role: 'Business Owner',
    content: 'Applied what I learned to my family business. Significantly increased leads in the first month. Worth every rupee!',
    rating: 5,
  },
]

const trustMarkers = [
  { icon: Award, text: 'Google Partner' },
  { icon: Award, text: 'Meta Blueprint' },
  { icon: Award, text: 'GA4 Certified' },
]

export default function Credibility() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 flex flex-wrap justify-center gap-4 uppercase tracking-widest text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#243A73] to-[#243A73]/60">Trusted by</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(36, 58, 115, 0.8)', color: 'transparent' }}>Tricity Professionals</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-[#243A73]/80 font-semibold">
              Klocrix Business Solutions - Engineering Digital Evolution since 2020
            </p>
            <p className="text-lg text-[#243A73]/70">
              Multiple client campaigns | Local agency expertise | Mohali-based
            </p>
          </div>
        </motion.div>

        {/* Trust Markers */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          {trustMarkers.map((marker, index) => {
            const Icon = marker.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3 bg-[#FAF7F2] px-6 py-4 rounded-2xl shadow-lg border border-[#4CAF50]/30"
              >
                <Icon className="text-[#F9C74F]" size={24} />
                <span className="font-semibold text-[#243A73]">{marker.text}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#FAF7F2] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-[#4CAF50]/20"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#F9C74F] fill-[#F9C74F]" size={20} />
                ))}
              </div>
              <p className="text-[#243A73]/80 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-heading font-bold text-[#243A73]">{testimonial.name}</p>
                <p className="text-[#243A73]/60 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

