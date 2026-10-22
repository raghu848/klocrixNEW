import { PageShell, PageHero } from '../../components/redesign/page-kit'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Careers – Join Our Engineering Team',
  description: 'Join the Klocrix team and engineer the future of digital solutions. Explore open roles, internships and our company culture in Mohali.',
  path: '/careers',
})

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join the team"
        title={<>Careers at <span className="kx-grad">Klocrix</span></>}
        desc="We are always looking for talented engineers, designers, and strategists. Our open positions will be listed here soon."
        actions={[{ href: 'mailto:careers@klocrix.com', label: 'Email careers@klocrix.com' }, { href: '/about', label: 'Meet the team', secondary: true }]}
      />
    </PageShell>
  )
}
