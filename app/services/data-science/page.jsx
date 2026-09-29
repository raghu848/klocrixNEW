import DataScienceClient from './DataScienceClient'
import { pageMetadata } from '../../../lib/seo'

export const metadata = pageMetadata({
  title: 'Data Science & AI Solutions Company',
  description: 'Turn data into your strategic asset. Klocrix delivers predictive analytics, machine learning models and automated data engineering for enterprises.',
  path: '/services/data-science',
  keywords: 'data science services mohali, machine learning development, artificial intelligence solutions, predictive analytics real estate, data engineering company',
})

export default function Page() {
  return <DataScienceClient />
}
