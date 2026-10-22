import { PageShell, PageHero } from '../components/redesign/page-kit'

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Error 404"
        title={<>Page <span className="kx-grad">not found</span></>}
        desc="The digital evolution you are looking for has moved or does not exist."
        actions={[{ href: '/', label: 'Back to home' }, { href: '/contact', label: 'Contact us', secondary: true }]}
      />
    </PageShell>
  )
}
