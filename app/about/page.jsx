import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  AboutHero, 
  OurStorySection, 
  MissionVisionSection, 
  WhyChooseUsSection, 
  TeamSection, 
  CTASection 
} from '../../components/AboutSections'

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <AboutHero />
      <OurStorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'About Klocrix | Our Mission, Vision & Engineering Excellence',
  description: 'Discover Klocrix Business Solutions. With over 5 years of experience, we specialize in digital transformation, custom software engineering, and strategic consulting for global brands.',
  keywords: 'about klocrix, software engineering team, digital transformation agency, IT consulting india',
  alternates: {
    canonical: 'https://www.klocrix.com/about',
  },
}