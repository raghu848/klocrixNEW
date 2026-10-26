'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Send } from 'lucide-react'
import { PageHero, Section, Arrow } from './redesign/page-kit'
import { getWhatsAppUrl, WHATSAPP_NUMBERS } from '../lib/whatsapp'

const CONTACT_INFO = [
  { icon: MapPin, title: 'Headquarters', details: ['E 68, Shrinivasan building, Phase-8, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 140308, India.'] },
  { icon: Mail, title: 'Email us', details: ['hello@klocrix.com', 'careers@klocrix.com'] },
  { icon: Phone, title: 'Call us', details: ['+91 81463 30346'] },
]

const ADDRESS = 'E 68, Shrinivasan building, Phase-8, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 140308, India'
const MAP_QUERY = encodeURIComponent('Klocrix Business Solutions, ' + ADDRESS)

const SOCIALS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/klocrix-business-solution-4454a5237' },
  { name: 'Facebook', href: 'https://www.facebook.com/Klocrix' },
  { name: 'Instagram', href: 'https://www.instagram.com/klocrixbusinesssolution?igsh=MWwyZDJ1ams5a3Uydw%3D%3D&utm_source=qr' },
]

// 1. Contact hero
export function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact us"
      title={<>Let&apos;s start a <span className="kx-grad">conversation</span></>}
      desc="Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help."
    />
  )
}

// 2. Contact details + form
export function ContactMain() {
  const [sent, setSent] = useState(false)

  // No mail backend yet: hand the enquiry to WhatsApp as a pre-filled message
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text = [
      `New enquiry from the website (${data.get('subject')})`,
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      data.get('phone') ? `Phone: ${data.get('phone')}` : null,
      '',
      data.get('message'),
    ].filter((line) => line !== null).join('\n')

    window.open(getWhatsAppUrl(WHATSAPP_NUMBERS.MAIN, text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <>
    <Section id="contact-form">
      <div className="kx-contact">
        <div className="kx-rv">
          <h2 className="kx-h2s" style={{ marginTop: 0, marginBottom: 32 }}>Contact information</h2>
          <div className="kx-info">
            {CONTACT_INFO.map(({ icon: Icon, title, details }, i) => (
              <div key={title} className="kx-tile" style={{ flexDirection: 'row', padding: 24, borderRadius: 22 }}>
                <span className="kx-ico" style={{ '--acc': ['#FF7A1A', '#F23D7A', '#22D3C5'][i] }}><Icon size={24} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  {details.map((d) => (
                    <p key={d}>
                      {d.includes('@') ? <a href={`mailto:${d}`}>{d}</a>
                        : d.includes('+') ? <a href={`tel:${d.replace(/\s+/g, '')}`}>{d}</a>
                          : d}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <h3 style={{ margin: '40px 0 12px', fontSize: 18, fontWeight: 600 }}>Follow our journey</h3>
          <div className="kx-socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="kx-btn kx-btn-glass" style={{ padding: '12px 22px', fontSize: 14 }}>{s.name}</a>
            ))}
          </div>
        </div>

        <div className="kx-panel kx-rv" style={{ padding: '48px 40px' }}>
          <div className="blob" style={{ width: 360, height: 360, right: -120, top: -140, background: '#F23D7A', opacity: 0.18 }} />
          <h2 className="kx-h2s" style={{ marginTop: 0, marginBottom: 28, position: 'relative' }}>Send us a message</h2>
          <form onSubmit={handleSubmit} className="kx-form" style={{ position: 'relative' }}>
            <div className="kx-row2">
              <label className="kx-field"><span>Full name</span><input name="name" type="text" required autoComplete="name" placeholder="John Doe" /></label>
              <label className="kx-field"><span>Email address</span><input name="email" type="email" required autoComplete="email" placeholder="john@example.com" /></label>
            </div>
            <div className="kx-row2">
              <label className="kx-field"><span>Phone</span><input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" /></label>
              <label className="kx-field"><span>Subject</span>
                <select name="subject" defaultValue="General Inquiry">
                  <option>General Inquiry</option>
                  <option>New Project</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                </select>
              </label>
            </div>
            <label className="kx-field"><span>Message</span><textarea name="message" required placeholder="Tell us about your project or inquiry..." /></label>
            <button type="submit" className="kx-btn kx-btn-primary" style={{ justifyContent: 'center', padding: '20px 28px', fontSize: 17 }}>
              Send message <Send size={18} aria-hidden="true" />
            </button>
            {sent && (
              <p role="status" className="kx-note" style={{ textAlign: 'center' }}>
                WhatsApp opened with your message. Just press send. Prefer email? Write to <a href="mailto:hello@klocrix.com">hello@klocrix.com</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>

      <Section id="find-us" eyebrow="Find us" title="Visit our Mohali office">
        <div className="kx-map kx-rv">
          <iframe
            title="Klocrix Business Solutions on Google Maps"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="kx-map-bar">
          <p>{ADDRESS}.</p>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`} target="_blank" rel="noopener noreferrer" className="kx-btn kx-btn-primary">Get directions <Arrow /></a>
        </div>
      </Section>
    </>
  )
}
