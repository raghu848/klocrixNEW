import { TrainingHero, TrainingBenefits, TrainingCurriculum, TrainingPricing, TrainingContact } from '../../components/TrainingSections'
import { TrainingJourney } from '../../components/TrainingExtras'
import { PageShell } from '../../components/redesign/page-kit'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Python, MERN & Marketing Training in Mohali',
  description: 'Job-ready industrial training in Mohali: 12-week courses in Python, MERN full stack and performance marketing with real projects and placement support.',
  path: '/training',
  keywords: 'python training mohali, fullstack development course chandigarh, digital marketing bootcamp, industrial training mohali, mern stack course, klocrix training, six months industrial training mohali',
})

export default function TrainingPage() {
  return (
    <PageShell>
      <TrainingHero />
      <TrainingBenefits />
      <TrainingCurriculum />
      <TrainingJourney />
      <TrainingPricing />
      <TrainingContact />
    </PageShell>
  )
}
