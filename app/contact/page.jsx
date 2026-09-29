import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  ContactHero, 
  ContactMain 
} from '../../components/ContactSections'
import { pageMetadata } from '../../lib/seo'

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

export const metadata = pageMetadata({
  title: 'Contact Us – Start Your Project',
  description: 'Get in touch with Klocrix Business Solutions. Have a project in mind or need expert IT consulting? Our team in Mohali is ready to help you scale.',
  path: '/contact',
  keywords: 'contact klocrix, hire developers india, software development inquiry, IT consulting contact',
})
