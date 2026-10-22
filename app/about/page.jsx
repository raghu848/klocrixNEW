import { AboutHero, OurStorySection, MissionVisionSection, WhyChooseUsSection, CTASection } from '../../components/AboutSections'
import { JourneySection, LifeAtKlocrixSection } from '../../components/AboutExtras'
import { PageShell } from '../../components/redesign/page-kit'
import { pageMetadata } from '../../lib/seo'

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <OurStorySection />
      <JourneySection />
      <MissionVisionSection />
      <LifeAtKlocrixSection />
      <WhyChooseUsSection />
      <CTASection />
    </PageShell>
  )
}

export const metadata = pageMetadata({
  title: 'About Us – Our Mission & Engineering Team',
  description: 'Meet Klocrix Business Solutions: 5+ years of digital transformation, custom software engineering and IT consulting for ambitious brands worldwide.',
  path: '/about',
  keywords: 'about klocrix, software engineering team, digital transformation agency, IT consulting india',
})
