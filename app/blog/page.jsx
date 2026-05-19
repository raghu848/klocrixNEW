import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Blog & Insights | Klocrix',
  description: 'Read the latest insights on custom software development, AI, data science, and digital transformation.',
  alternates: {
    canonical: 'https://www.klocrix.com/blog',
  },
}

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
