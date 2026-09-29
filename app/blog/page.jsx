import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Blog & Insights',
  description: 'Insights from the Klocrix team on custom software development, AI, data science, cloud and digital transformation for growing businesses.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-40 pb-20 px-4">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-6">Our Blog</h1>
          <p className="text-xl text-slate-600 mb-12">
            The latest news, insights, and engineering practices from the Klocrix team. Coming soon.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
