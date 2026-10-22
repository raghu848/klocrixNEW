import { PageShell, PageHero, Section } from '../../components/redesign/page-kit'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'Read the terms that govern your use of the Klocrix Business Solutions website and services.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Terms of service" desc="These Terms of Service govern your use of the website located at klocrix.com and any related services provided by Klocrix." />
      <Section id="terms">
        <div className="kx-doc kx-rv">
          <h2>1. Terms</h2>
          <p>By accessing our website, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations.</p>
          <h2>2. Limitations</h2>
          <p>In no event shall Klocrix or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
          <p><em>(This is a placeholder for the full terms of service. Please update with legal documentation.)</em></p>
        </div>
      </Section>
    </PageShell>
  )
}
