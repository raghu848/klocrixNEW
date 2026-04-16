'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/animations'
import { MapPin, Clock, Car, Users, ArrowRight } from 'lucide-react'

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side: Info cards */}
          <div className="space-y-8">
            {/* Location Card */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500/10 p-3 rounded-2xl">
                  <MapPin className="text-[#243A73]" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#243A73]">Our Office</h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-[#243A73] font-bold leading-tight uppercase tracking-tight">
                  E 68, Shrinivasan building, Phase-8, <br />
                  Industrial Area, SAS Nagar, <br />
                  Punjab 140308, India
                </p>
                <p className="text-[#243A73]/60 font-medium" style={{ textShadow: 'none' }}>
                  Strategic location in the heart of Mohali's Industrial Hub.
                </p>
                <div className="flex items-center gap-3 text-[#243A73]/70 mt-6 bg-[#FAF7F2] p-4 rounded-2xl border border-blue-500/5">
                  <Car size={20} className="text-blue-500" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Free parking & 5 mins from Chandigarh</span>
                </div>
                
                <a 
                  href="https://www.google.com/maps/dir//E+68,+Phase+8,+Industrial+Area,+Sector+73,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140308/@30.7095,76.6895,15z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Get Directions <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Schedule Card */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-[#10CEE4]/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#10CEE4]/10 p-3 rounded-2xl">
                  <Clock className="text-[#10CEE4]" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#243A73]">Schedule</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#10CEE4]/10">
                  <p className="font-black text-[#243A73] mb-1 text-xl">7-10 PM</p>
                  <p className="text-[#243A73]/60 text-xs font-bold uppercase tracking-widest">Working Professionals</p>
                </div>
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#10CEE4]/10">
                  <p className="font-black text-[#243A73] mb-1 text-xl">4-7 PM</p>
                  <p className="text-[#243A73]/60 text-xs font-bold uppercase tracking-widest">Full-time Students</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#10CEE4]/70 mt-4 px-2">
                <Users size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Mon - Fri | High-Tech AC Classrooms</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.22!2d76.6895!3d30.7095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzM0LjIiTiA3NsKwNDEnMjIuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Map Overlay Button */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=E+68,+Phase+8,+Industrial+Area,+Mohali"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#243A73] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-blue-600 transition-colors flex items-center gap-3"
              >
                <MapPin size={18} />
                Open Large Map
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

