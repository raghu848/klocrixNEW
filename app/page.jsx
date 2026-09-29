import HomeClient from './HomeClient'
import { pageMetadata } from '../lib/seo'

export const metadata = pageMetadata({
  absoluteTitle: 'Software & App Development Company in Mohali | Klocrix',
  description: 'Klocrix builds custom software, websites, mobile apps and AI solutions for growing businesses. 5+ years of engineering excellence in Mohali & Chandigarh.',
  path: '',
  keywords: 'custom software, web development, app development, data science, digital transformation, Klocrix',
})

export default function Page() {
  return <HomeClient />
}
