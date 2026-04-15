import Hero3DCarousel from '../../components/Training/Hero3DCarousel'
import BenefitsGrid from '../../components/Training/BenefitsGrid'
import CurriculumAccordion from '../../components/Training/CurriculumAccordion'
import PricingTable from '../../components/Training/PricingTable'
import LocationSchedule from '../../components/Training/LocationSchedule'
import Credibility from '../../components/Training/Credibility'
import ContactForm from '../../components/Training/ContactForm'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Klocrix Training - Mohali\'s #1 Digital Marketing Bootcamp | 12 Weeks Job-Ready Course',
  description: 'Join Mohali\'s most practical digital marketing bootcamp. 12 weeks live training with real client projects. Meta Ads, Google Ads, Analytics & more. ₹30,000 | Next Batch Starts Soon',
  keywords: 'digital marketing course mohali, performance marketing training chandigarh, meta ads course, google ads training, digital marketing bootcamp tricity',
}

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero3DCarousel />
      <BenefitsGrid />
      <CurriculumAccordion />
      <PricingTable />
      <LocationSchedule />
      <Credibility />
      <ContactForm />
      <Footer />
    </main>
  )
}

