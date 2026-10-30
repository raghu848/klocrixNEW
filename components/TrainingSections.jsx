'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Target, TrendingUp, Award, Users, GraduationCap, Phone } from 'lucide-react'
import { PageHero, Section, Tiles, Checks, Arrow } from './redesign/page-kit'
import { getWhatsAppUrl, WHATSAPP_NUMBERS } from '../lib/whatsapp'

const COURSES = [
  {
    id: 'marketing', short: 'MKT', name: 'Digital Marketing', color: '#FF7A1A',
    heroTitle: 'Master Digital Marketing',
    description: "Join Mohali's most practical digital marketing bootcamp. 12 weeks of intensive, hands-on training.",
    modules: [
      { title: 'Foundations', items: ['Introduction to Digital Marketing', 'Market Research & Analysis', 'WordPress Fundamentals', 'SEO Basics'] },
      { title: 'SEO & Content', items: ['Keyword Research', 'On-Page & Technical SEO', 'Strategy & Planning', 'Content Marketing'] },
      { title: 'Paid Media', items: ['Meta Ads Mastery', 'Google Ads (PPC/Display)', 'LinkedIn Marketing', 'Retargeting'] },
      { title: 'Analytics', items: ['Google Analytics 4', 'Google Tag Manager', 'CRO & AB Testing', 'Reporting'] },
    ],
  },
  {
    id: 'python', short: 'PY', name: 'Python Development', color: '#FFC52E',
    heroTitle: 'Python Engineering Mastery',
    description: "Build robust backend systems and data automation tools with the world's most versatile language.",
    modules: [
      { title: 'Core Basics', items: ['Advanced Data Structures', 'Control Flow & Functions', 'Exception Handling', 'File I/O & Modules'] },
      { title: 'OOP Mastery', items: ['Classes & Objects', 'Inheritance & Polymorphism', 'Encapsulation', 'Decorators & Generators'] },
      { title: 'Data & Web', items: ['Pandas & NumPy Basics', 'Web Scraping (BS4/Selenium)', 'API Integration', 'Flask Essentials'] },
      { title: 'Django Prof.', items: ['MTV Architecture', 'Django REST Framework', 'Database (SQL)', 'Authentication Systems'] },
    ],
  },
  {
    id: 'fullstack', short: 'MERN', name: 'Fullstack MERN', color: '#75D94C',
    heroTitle: 'MERN Stack Architecture',
    description: 'Become a Fullstack Architect. Build scalable enterprise applications from frontend to cloud deployment.',
    modules: [
      { title: 'Frontend Pro', items: ['React JS & Next.js 14', 'Tailwind CSS Architecture', 'Framer Motion', 'State (Zustand/Redux)'] },
      { title: 'Backend Eng.', items: ['Node.js Runtime', 'Express.js Architecture', 'Middleware Design', 'JWT & Auth Systems'] },
      { title: 'Cloud & DB', items: ['MongoDB / NoSQL', 'Mongoose Modeling', 'Redis Caching', 'PostgreSQL Basics'] },
      { title: 'DevOps', items: ['Vercel/AWS Deployment', 'CI/CD Pipelines', 'System Design', 'Unit Testing'] },
    ],
  },
]

const BENEFITS = [
  { icon: Zap, title: 'Live Training', desc: 'Interactive sessions with industry veterans who manage real client budgets.' },
  { icon: Target, title: 'Real Projects', desc: 'Work on live campaigns and gain practical experience that matters.' },
  { icon: TrendingUp, title: '90% Practical', desc: 'Less theory, more implementation. We focus on ROI-driven marketing.' },
  { icon: Award, title: 'Certification', desc: 'Get industry-recognized certifications to boost your career profile.' },
  { icon: Users, title: 'Small Batches', desc: 'Personalized attention with limited students per batch for better learning.' },
  { icon: GraduationCap, title: 'Job Ready', desc: 'Exit the bootcamp with a portfolio of real work and interview skills.' },
]

const PERKS = ['Corporate Project Access', '1-on-1 Mentorship', 'Placement Assistance', 'Industry Certifications']

// 1. Hero
export function TrainingHero() {
  return (
    <PageHero
      bg="none"
      clear
      eyebrow="Job-ready programs"
      title={<>Elite <span className="kx-grad">industrial training</span></>}
      desc="Join Chandigarh's most rigorous industrial training programs. We don't just teach code; we build engineers and architects."
      actions={[{ href: '#curriculum', label: 'Explore courses' }, { href: '#contact', label: 'Talk to an advisor', secondary: true }]}
      stats={[['12 weeks', 'Per program'], ['3', 'Career tracks'], ['15', 'Seats per batch']]}
    />
  )
}

// 2. Benefits
export function TrainingBenefits() {
  return (
    <Section id="benefits" eyebrow="Why Klocrix training" title="Why choose Klocrix training?" intro="Our bootcamp is designed to bridge the gap between academic learning and industry requirements.">
      <Tiles items={BENEFITS} />
    </Section>
  )
}

// 3. Curriculum
export function TrainingCurriculum() {
  const [active, setActive] = useState(0)
  const course = COURSES[active]
  return (
    <Section id="curriculum" panel eyebrow="Our curriculum" title="Expert-led learning paths">
      <div className="kx-chips" role="group" aria-label="Choose a course">
        {COURSES.map((c, i) => (
          <button key={c.id} type="button" className="kx-chip-btn" style={{ '--c': c.color }} aria-pressed={active === i} onClick={() => setActive(i)}>{c.name}</button>
        ))}
      </div>
      <div className="kx-course" style={{ '--c': course.color }}>
        <div className="kx-course-lead kx-swap" key={course.id}>
          <span className="kx-lead-badge"><i />12 weeks · Mohali / Online</span>
          <h3>{course.heroTitle}</h3>
          <p>{course.description}</p>
          <ul className="kx-lead-tags" aria-label="Topics covered">
            {course.modules.map((m) => <li key={m.title}>{m.title}</li>)}
          </ul>
          <dl className="kx-lead-stats">
            {[['12', 'Weeks'], ['90%', 'Practical'], ['15', 'Seats']].map(([v, l]) => <div key={l}><dd>{v}</dd><dt>{l}</dt></div>)}
          </dl>
          <Link href="#apply" className="kx-btn kx-btn-primary" style={{ alignSelf: 'flex-start' }}>Apply now <Arrow /></Link>
        </div>
        <div className="kx-mods">
          {course.modules.map((m) => (
            <div key={course.id + m.title} className="kx-mod kx-swap">
              <h4><i />{m.title}</h4>
              <ul>{m.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// 4. Fees and what is included
export function TrainingPricing() {
  return (
    <Section id="apply">
      <div className="kx-price kx-rv">
        <div className="kx-price-a">
          <div className="blob" style={{ width: 340, height: 340, right: -120, top: -120, background: '#FFC52E', opacity: 0.5 }} />
          <h3>Program details</h3>
          <dl>
            {[['Duration', '12 Weeks Mastery'], ['Next batch', 'Starts Soon'], ['Location', 'Mohali / Online Hybrid']].map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
          <p>Limited to 15 seats per program to ensure personalized architectural guidance.</p>
        </div>
        <div className="kx-price-b">
          <small>Course investment</small>
          <div className="kx-amt">₹30,000</div>
          <small>All industrial tracks</small>
          <Checks items={PERKS} acc="#FF4D3A" />
          <Link href="#contact" className="kx-btn kx-btn-primary">Apply now <Arrow /></Link>
        </div>
      </div>
    </Section>
  )
}

// 5. Enquiry form
export function TrainingContact() {
  const [sent, setSent] = useState(false)

  // No mail backend yet: send the enquiry to the training advisor on WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text = [
      'New training enquiry from the website',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      data.get('email') ? `Email: ${data.get('email')}` : null,
      data.get('message') ? `\n${data.get('message')}` : null,
    ].filter((line) => line !== null).join('\n')

    window.open(getWhatsAppUrl(WHATSAPP_NUMBERS.TRAINING, text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <Section id="contact">
      <div className="kx-contact">
        <div className="kx-rv">
          <p className="kx-eyebrow">Get in touch</p>
          <h2 className="kx-h2s">Ready to start your journey?</h2>
          <p className="kx-lead">Have questions about the bootcamp? Our advisors are here to help you decide if this is the right path for your career goals.</p>
          <div className="kx-tile" style={{ flexDirection: 'row', alignItems: 'center', marginTop: 32, padding: 24, '--acc': '#FFC52E' }}>
            <span className="kx-ico"><Phone size={24} aria-hidden="true" /></span>
            <div>
              <p style={{ fontSize: 14, color: 'var(--mut)', margin: 0 }}>Call advisor</p>
              <a href="tel:+917508535271" style={{ fontFamily: 'var(--font-sora), system-ui, sans-serif', fontSize: 24, fontWeight: 600 }}>+91 75085 35271</a>
            </div>
          </div>
        </div>
        <div className="kx-panel kx-rv" style={{ padding: '48px 40px' }}>
          <form onSubmit={handleSubmit} className="kx-form" style={{ position: 'relative' }}>
            <div className="kx-row2">
              <label className="kx-field"><span>Full name</span><input name="name" type="text" required autoComplete="name" placeholder="Your name" /></label>
              <label className="kx-field"><span>Phone number</span><input name="phone" type="tel" required autoComplete="tel" placeholder="+91 00000 00000" /></label>
            </div>
            <label className="kx-field"><span>Email address</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
            <label className="kx-field"><span>Message</span><textarea name="message" placeholder="Tell us which course you are interested in..." /></label>
            <button type="submit" className="kx-btn kx-btn-primary" style={{ justifyContent: 'center', padding: '20px 28px', fontSize: 17 }}>Send message <Arrow /></button>
            {sent && <p role="status" className="kx-note" style={{ textAlign: 'center' }}>WhatsApp opened with your details. Just press send, or call us on +91 75085 35271.</p>}
          </form>
        </div>
      </div>
    </Section>
  )
}
