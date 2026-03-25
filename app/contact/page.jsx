import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ContactHero, ContactForm, InteractiveFAQ } from '../../components/ContactSections'

// Static contact info and sections
function ContactInfoSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: [
        'Mohali, Punjab',
        'India'
      ]
    },
    {
      icon: MapPin,
      title: 'UK Office',
      details: [
        'Luton, Bedfordshire',
        'United Kingdom'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'hello@klocrix.com',
        'careers@klocrix.com'
      ],
      links: [
        'mailto:hello@klocrix.com',
        'mailto:careers@klocrix.com'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 98765 43210',
        '+44 20 1234 5678'
      ],
      links: [
        'tel:+919876543210',
        'tel:+442012345678'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM IST',
        'Saturday: 10:00 AM - 2:00 PM IST'
      ]
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              Get in <span className="cosmic-text">Touch</span>
            </h2>
            
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Whether you have a specific project in mind or just want to explore possibilities, we're here to help. Reach out to us through any of these channels.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <div key={idx}>
                            {info.links && info.links[idx] ? (
                              <a
                                href={info.links[idx]}
                                className="text-text-secondary hover:text-accent transition-colors duration-200"
                              >
                                {detail}
                              </a>
                            ) : (
                              <span className="text-text-secondary">{detail}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const reasons = [
    {
      title: "24-Hour Response Time",
      description: "We understand urgency in business. Expect a response within 24 hours of your inquiry."
    },
    {
      title: "Free Consultation",
      description: "No commitment required. We'll discuss your project and provide honest guidance."
    },
    {
      title: "Global Experience",
      description: "With offices in India and the UK, we understand both local and international markets."
    },
    {
      title: "Proven Track Record",
      description: "25+ years of successful project delivery across multiple industries."
    }
  ]

  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Why Start Your Journey <span className="cosmic-text">With Klocrix?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="card hover:cosmic-glow transition-all duration-300">
              <h3 className="text-xl font-bold font-heading mb-3 text-text-primary">
                {reason.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main className="relative">
      <Header />
      <ContactHero />
      <ContactInfoSection />
      <WhyChooseSection />
      <InteractiveFAQ />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'Ready to transform your business? Contact Klocrix for a free consultation. We\'re here to discuss your project and provide expert guidance.',
}