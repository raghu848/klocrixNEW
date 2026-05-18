import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  ServicesHero, 
  ServicesDetailedGrid, 
  ServicesCTA 
} from '../../components/ServiceSections'

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

export const metadata = {
  title: 'Our IT Services | Custom Software, Web & App Development',
  description: 'Explore Klocrix Business Solutions comprehensive IT services. From bespoke web applications and native mobile apps to AI-driven data science and scalable cloud infrastructure.',
  keywords: 'it services mohali, custom software development, mobile app development, data science services, cloud solutions, ui/ux design agency',
  alternates: {
    canonical: 'https://www.klocrix.comservices',
  },
}
