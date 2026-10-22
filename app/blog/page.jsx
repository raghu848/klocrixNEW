import { PageShell, PageHero } from '../../components/redesign/page-kit'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Blog & Insights',
  description: 'Insights from the Klocrix team on custom software development, AI, data science, cloud and digital transformation for growing businesses.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Coming soon"
        title={<>Our <span className="kx-grad">blog</span></>}
        desc="The latest news, insights, and engineering practices from the Klocrix team. Coming soon."
        actions={[{ href: '/services', label: 'Explore our services' }, { href: '/contact', label: 'Talk to us', secondary: true }]}
      />
    </PageShell>
  )
}
