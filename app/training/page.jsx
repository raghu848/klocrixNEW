import { 
  TrainingHero, 
  TrainingBenefits, 
  TrainingCurriculum, 
  TrainingPricing, 
  TrainingContact 
} from '../../components/TrainingSections'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Python, MERN & Marketing Training in Mohali',
  description: 'Job-ready industrial training in Mohali: 12-week courses in Python, MERN full stack and performance marketing with real projects and placement support.',
  path: '/training',
  keywords: 'python training mohali, fullstack development course chandigarh, digital marketing bootcamp, industrial training mohali, mern stack course, klocrix training, six months industrial training mohali',
})

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <TrainingHero />
      <TrainingBenefits />
      <TrainingCurriculum />
      <TrainingPricing />
      <TrainingContact />
      <Footer />
    </main>
  )
}
