import { ContactHero, ContactMain } from '../../components/ContactSections'
import { PageShell } from '../../components/redesign/page-kit'
import { pageMetadata } from '../../lib/seo'

export default function ContactPage() {
  return (
    <PageShell>
      <ContactHero />
      <ContactMain />
    </PageShell>
  )
}

export const metadata = pageMetadata({
  title: 'Contact Us – Start Your Project',
  description: 'Get in touch with Klocrix Business Solutions. Have a project in mind or need expert IT consulting? Our team in Mohali is ready to help you scale.',
  path: '/contact',
  keywords: 'contact klocrix, hire developers india, software development inquiry, IT consulting contact',
})
