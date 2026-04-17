import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  ServicesHero, 
  ServicesDetailedGrid, 
  ServicesCTA 
} from '../../components/ServiceSections'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesDetailedGrid />
      <ServicesCTA />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Our Services',
  description: 'Explore Klocrix Business Solutions - From custom software and mobile apps to data science and ERP solutions.',
}
