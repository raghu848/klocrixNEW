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
import { pageMetadata } from '../../lib/seo'

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

export const metadata = pageMetadata({
  title: 'About Us – Our Mission & Engineering Team',
  description: 'Meet Klocrix Business Solutions: 5+ years of digital transformation, custom software engineering and IT consulting for ambitious brands worldwide.',
  path: '/about',
  keywords: 'about klocrix, software engineering team, digital transformation agency, IT consulting india',
})