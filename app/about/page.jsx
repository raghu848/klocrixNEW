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
    <main className="relative">
      <Header />
      <AboutHero />
      <OurStorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'About Us',
  description: 'Learn about Klocrix Business Solutions - 25+ years of engineering digital evolution. Meet the team that transforms ambitious companies into market leaders.',
}