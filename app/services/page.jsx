import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  ServicesHero, 
  ServicesDetailedGrid, 
  ServicesCTA 
} from '../../components/ServiceSections'
import { pageMetadata } from '../../lib/seo'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <ServicesHero />
      <ServicesDetailedGrid />
      <ServicesCTA />
      <Footer />
    </main>
  )
}

export const metadata = pageMetadata({
  title: 'IT Services: Software, Web & App Development',
  description: 'Explore Klocrix IT services: custom web applications, native mobile apps, UI/UX design, AI-driven data science and scalable cloud infrastructure.',
  path: '/services',
  keywords: 'it services mohali, custom software development, mobile app development, data science services, cloud solutions, ui/ux design agency',
})
