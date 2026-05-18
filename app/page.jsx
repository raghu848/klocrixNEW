import HomeClient from './HomeClient'

export const metadata = {
  title: 'Klocrix - Engineering Digital Evolution | IT Solutions & Consulting',
  description: 'Klocrix Business Solutions: 5+ years of engineering excellence. We architect bespoke software solutions, data science models, and ERP systems that transform ambitious companies.',
  keywords: 'custom software, web development, app development, data science, digital transformation, Klocrix',
  alternates: {
    canonical: 'https://www.klocrix.com',
  },
}

export default function Page() {
  return <HomeClient />
}
