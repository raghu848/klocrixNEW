import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  ContactHero, 
  ContactMain 
} from '../../components/ContactSections'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactMain />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Klocrix Business Solutions. We are here to help you with your next digital project.',
}
