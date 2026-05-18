import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  ContactHero, 
  ContactMain 
} from '../../components/ContactSections'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <ContactHero />
      <ContactMain />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Contact Klocrix | Start Your Digital Transformation Journey',
  description: 'Get in touch with Klocrix Business Solutions today. Whether you have a project in mind or need expert IT consulting, our team is ready to help you scale your business.',
  keywords: 'contact klocrix, hire developers india, software development inquiry, IT consulting contact',
  alternates: {
    canonical: 'https://www.klocrix.comcontact',
  },
}
