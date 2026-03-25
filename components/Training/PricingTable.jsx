'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/animations'
import { Check, Phone, Sparkles, TrendingUp, Award, Users, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: Clock,
    text: '12 Weeks Live Training',
    description: 'Interactive sessions with industry experts',
  },
  {
    icon: TrendingUp,
    text: 'Real Client Projects with Budget',
    description: 'Build portfolio with actual paid work',
  },
  {
    icon: Sparkles,
    text: 'Lifetime Access to Materials',
    description: 'Forever access to all resources & updates',
  },
  {
    icon: Users,
    text: 'Job Placement Assistance',
    description: 'Career support & interview preparation',
  },
  {
    icon: Award,
    text: 'Industry Certification',
    description: 'Recognized credential for your career',
  },
  {
    icon: Shield,
    text: '15-Day Money Back Guarantee',
    description: 'Risk-free enrollment with full refund',
  },
]

const bonuses = [
  'Exclusive Marketing Templates Pack',
  'Access to Alumni Network',
  '1-on-1 Mentorship Sessions',
]

export default function PricingTable() {
  const whatsappLink = 'https://wa.me/917508535271?text=Hi%2C%20I%27m%20interested%20in%20Klocrix%20Training'

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-[#FAF7F2]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF4D8] via-[#FAF7F2] to-[#C7EDE6]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e55a2b]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4"
          >
            <span className="text-[#F9C74F] font-semibold flex items-center gap-2">
              <Sparkles size={18} />
              Limited Time Offer
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 uppercase tracking-widest flex flex-wrap justify-center gap-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#243A73] to-[#243A73]/60">Investment That Pays</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(36, 58, 115, 0.8)', color: 'transparent' }}>Back 10X</span>
          </h2>
          <p className="text-base sm:text-lg text-[#243A73]/70 max-w-2xl mx-auto">
            One-time payment. Lifetime skills. Unlimited earning potential.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-[#FAF7F2]/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border-2 border-[#F9C74F]/10 relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-primary to-[#e55a2b] text-white px-8 py-2 rounded-full shadow-lg font-bold text-sm">
                {/* 🔥 MOST POPULAR PROGRAM */}
              </div>
            </div>

            {/* Header with Gradient */}
            <div className="relative bg-gradient-to-br from-[#1F3C88] via-[#243A73] to-[#FFC300] p-6 sm:p-8 md:p-10 text-white overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2 sm:mb-3">
                  Klocrix Digital Marketing Bootcamp
                </h3>
                <p className="text-white/90 text-base sm:text-lg">Complete 12-week transformation program</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, translateY: -5 }}
                    className="group relative bg-gradient-to-br from-[#FAF7F2] to-[#FFF4D8]/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#F9C74F]/10 hover:border-[#F9C74F]/30 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#F9C74F] to-[#FFC300] p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform">
                        <feature.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-[#243A73] mb-1 flex items-center gap-2">
                          {feature.text}
                          <Check className="text-[#F9C74F] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" size={16} />
                        </h4>
                        <p className="text-xs sm:text-sm text-[#243A73]/60">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bonus Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#F9C74F]/5 to-[#FFC300]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 border-2 border-dashed border-[#F9C74F]/20"
              >
                <h4 className="text-lg sm:text-xl font-bold text-[#243A73] mb-3 sm:mb-4 flex items-center gap-2 justify-center sm:justify-start">
                  <Sparkles className="text-[#F9C74F]" size={20} />
                  FREE Bonuses Worth ₹10,000
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#243A73]/80 justify-center sm:justify-start">
                      <div className="bg-[#F9C74F]/20 p-1 rounded-full flex-shrink-0">
                        <Check className="text-[#F9C74F]" size={14} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-center sm:text-left">{bonus}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Pricing Section */}
              <div className="border-t-2 border-dashed border-[#4CAF50]/20 pt-6 sm:pt-8 md:pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
                  {/* Left: Price */}
                  <div className="text-center md:text-left">
                    <p className="text-[#243A73]/60 text-xs sm:text-sm font-semibold mb-1 uppercase sm:uppercase tracking-wide">
                      Total Investment
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-3 justify-center md:justify-start">
                      <span className="text-[#243A73]/40 text-2xl sm:text-3xl line-through">₹50,000</span>
                      <span className="text-5xl sm:text-6xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F9C74F] to-[#FFC300]">
                        ₹30,000
                      </span>
                    </div>
                    <p className="text-[#F9C74F] font-semibold mt-2 text-base sm:text-lg">
                      Save ₹20,000 • 40% OFF
                    </p>
                    <p className="text-[#243A73]/60 text-xs sm:text-sm mt-1">One-time payment • No hidden fees</p>
                  </div>

                  {/* Right: Batch Info */}
                  <div className="bg-gradient-to-br from-[#F9C74F]/10 to-[#FFC300]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-[#F9C74F]/20">
                    <p className="text-xl sm:text-2xl font-bold text-[#243A73] mb-2">
                      NEXT BATCH: Coming Soon
                    </p>
                    <p className="text-[#243A73]/70 mb-3 text-sm sm:text-base">Limited to 25 Students Only</p>
                    <div className="flex justify-center gap-2">
                      <div className="bg-[#FAF7F2] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-[#F9C74F]">
                        12 Seats Left
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative block w-full bg-gradient-to-r from-[#F9C74F] to-[#FFC300] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-heading font-bold text-lg sm:text-xl hover:shadow-xl sm:hover:shadow-2xl transition-all overflow-hidden"
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                      <Phone size={20} className="sm:w-6 sm:h-6 animate-pulse" />
                      <span className="text-center">Secure Your Seat Now on WhatsApp</span>
                    </span>
                  </motion.a>

                  <p className="text-center text-[#243A73]/60 text-xs sm:text-sm">
                    ✨ Join 500+ successful students • 4.9/5 rating • 90% job placement rate
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#4CAF50]/10 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#243A73]/60"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <Shield className="text-[#F9C74F]" size={14} />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Award className="text-[#F9C74F]" size={14} />
                  <span>Certified Program</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Users className="text-[#F9C74F]" size={14} />
                  <span>500+ Alumni</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <p className="text-[#243A73]/60 mb-3 sm:mb-4 text-sm sm:text-base">Trusted by students from</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-[#243A73]/80 font-semibold">
            <span className="bg-[#FAF7F2] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full shadow text-xs sm:text-sm">Google</span>
            <span className="bg-[#FAF7F2] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full shadow text-xs sm:text-sm">Amazon</span>
            <span className="bg-[#FAF7F2] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full shadow text-xs sm:text-sm">Flipkart</span>
            <span className="bg-[#FAF7F2] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full shadow text-xs sm:text-sm">Zomato</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

