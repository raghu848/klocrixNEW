import { PageShell, PageHero, Section } from '../../components/redesign/page-kit'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'Learn how Klocrix Business Solutions collects, uses and protects your personal data across our website and digital services.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Privacy policy" desc="At Klocrix, your privacy is our priority. This privacy policy outlines how we collect, use, and protect your information." />
      <Section id="policy">
        <div className="kx-doc kx-rv">
          <h2>Information collection</h2>
          <p>We collect information to provide better services to all our users. This includes basic information like your IP address, to more complex things like the terms you search for.</p>
          <h2>Use of information</h2>
          <p>We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect Klocrix and our users.</p>
          <p><em>(This is a placeholder for the full privacy policy. Please update with legal documentation.)</em></p>
        </div>
      </Section>
    </PageShell>
  )
}
