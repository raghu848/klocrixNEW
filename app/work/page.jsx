import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  WorkHero, 
  WorkGrid 
} from '../../components/WorkSections'

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <WorkHero />
      <WorkGrid />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Our Portfolio | Case Studies in Engineering Digital Evolution',
  description: 'Explore the Klocrix portfolio. See how we have helped businesses across industries like Real Estate, FinTech, and E-commerce with bespoke software solutions and digital strategies.',
  keywords: 'klocrix portfolio, software development case studies, web development projects, real estate tech solutions',
  alternates: {
    canonical: 'https://www.klocrix.com/work',
  },
}
