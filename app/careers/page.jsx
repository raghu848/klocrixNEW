import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Careers – Join Our Engineering Team',
  description: 'Join the Klocrix team and engineer the future of digital solutions. Explore open roles, internships and our company culture in Mohali.',
  path: '/careers',
})

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-40 pb-20 px-4">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-6">Careers at Klocrix</h1>
          <p className="text-xl text-slate-600 mb-12">
            We are always looking for talented engineers, designers, and strategists. Our open positions will be listed here soon.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
