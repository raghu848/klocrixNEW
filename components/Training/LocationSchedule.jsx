'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/animations'
import { MapPin, Clock, Car, Users } from 'lucide-react'

export default function LocationSchedule() {
  return (
    <section id="location" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 flex flex-wrap justify-center gap-4 uppercase tracking-widest">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#243A73] to-[#243A73]/60">Convenient for</span>
            <span style={{ WebkitTextStroke: '1.5px rgba(36, 58, 115, 0.8)', color: 'transparent' }}>Tricity Students</span>
          </h2>
          <p className="text-xl text-[#243A73]/70" style={{ textShadow: 'none' }}>
            Easy to reach from Chandigarh, Mohali, and Zirakpur
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Location */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#FAF7F2] p-8 rounded-3xl shadow-xl border border-[#4CAF50]/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F9C74F]/10 p-3 rounded-xl">
                <MapPin className="text-[#F9C74F]" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#243A73]">Location</h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-[#243A73] font-semibold">
                📍 Industrial Area, Phase 8, Mohali
              </p>
              <p className="text-[#243A73]/70" style={{ textShadow: 'none' }}>
                5 mins from Chandigarh, 20 mins from Zirakpur
              </p>
              <div className="flex items-center gap-2 text-[#243A73]/70 mt-4">
                <Car size={20} />
                <span>Free parking available</span>
              </div>
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#FAF7F2] p-8 rounded-3xl shadow-xl border border-[#4CAF50]/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FFC300]/10 p-3 rounded-xl">
                <Clock className="text-[#FFC300]" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#243A73]">Schedule</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#4CAF50]/20">
                <p className="font-semibold text-[#243A73] mb-2">⏰ Mon-Fri | 7-10 PM</p>
                <p className="text-[#243A73]/70 text-sm" style={{ textShadow: 'none' }}>Perfect for Working Professionals</p>
              </div>
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#4CAF50]/20">
                <p className="font-semibold text-[#243A73] mb-2">⏰ Mon-Fri | 4-7 PM</p>
                <p className="text-[#243A73]/70 text-sm" style={{ textShadow: 'none' }}>Ideal for Students</p>
              </div>
              <div className="flex items-center gap-2 text-[#243A73]/70 mt-4">
                <Users size={20} />
                <span>AC classrooms | Projector setup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

