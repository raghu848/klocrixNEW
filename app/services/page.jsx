import { ServicesHero, ServicesDetailedGrid, ServicesCTA } from '../../components/ServiceSections'
import { PageShell } from '../../components/redesign/page-kit'
import { pageMetadata } from '../../lib/seo'

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesHero />
      <ServicesDetailedGrid />
      <ServicesCTA />
    </PageShell>
  )
}

export const metadata = pageMetadata({
  title: 'IT Services: Software, Web & App Development',
  description: 'Explore Klocrix IT services: custom web applications, native mobile apps, UI/UX design, AI-driven data science and scalable cloud infrastructure.',
  path: '/services',
  keywords: 'it services mohali, custom software development, mobile app development, data science services, cloud solutions, ui/ux design agency',
})
