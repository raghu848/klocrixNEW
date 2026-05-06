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
  title: 'Our Work',
  description: 'Explore Klocrix Portfolio - See our latest projects and case studies across various industries.',
}
