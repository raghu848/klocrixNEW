import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'The terms and conditions that govern your use of the Klocrix Business Solutions website and our digital services.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-40 pb-20 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-12 text-center">Terms of Service</h1>
          <div className="prose prose-slate max-w-none">
            <p>These Terms of Service govern your use of the website located at klocrix.com and any related services provided by Klocrix.</p>
            <h3>1. Terms</h3>
            <p>By accessing our website, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations.</p>
            <h3>2. Limitations</h3>
            <p>In no event shall Klocrix or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
            <p><em>(This is a placeholder for the full terms of service. Please update with legal documentation.)</em></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
