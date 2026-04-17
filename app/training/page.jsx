import { 
  TrainingHero, 
  TrainingBenefits, 
  TrainingCurriculum, 
  TrainingPricing, 
  TrainingContact 
} from '../../components/TrainingSections'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Klocrix Training - Industrial Training in Python, Fullstack & Digital Marketing',
  description: 'Join Chandigarh\'s most practical industrial training bootcamp. 12-week job-ready courses in Python Engineering, MERN Fullstack, and Performance Marketing. Real projects, live mentorship, and placement support.',
  keywords: 'python training mohali, fullstack development course chandigarh, digital marketing bootcamp, industrial training mohali, mern stack course, klocrix training',
}

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-white">
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
