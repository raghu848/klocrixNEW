import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  WorkHero, 
  WorkGrid 
} from '../../components/WorkSections'
import { pageMetadata } from '../../lib/seo'

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

export const metadata = pageMetadata({
  title: 'Portfolio & Case Studies',
  description: 'See how Klocrix has helped businesses in real estate, fintech and e-commerce grow with bespoke software, data solutions and digital strategy.',
  path: '/work',
  keywords: 'klocrix portfolio, software development case studies, web development projects, real estate tech solutions',
})
