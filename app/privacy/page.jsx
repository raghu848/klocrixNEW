import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy | Klocrix',
  description: 'Learn how Klocrix handles your data and protects your privacy across our digital services.',
  alternates: {
    canonical: 'https://www.klocrix.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-40 pb-20 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-12 text-center">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none">
            <p>At Klocrix, your privacy is our priority. This privacy policy outlines how we collect, use, and protect your information.</p>
            <h3>Information Collection</h3>
            <p>We collect information to provide better services to all our users. This includes basic information like your IP address, to more complex things like the terms you search for.</p>
            <h3>Use of Information</h3>
            <p>We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect Klocrix and our users.</p>
            <p><em>(This is a placeholder for the full privacy policy. Please update with legal documentation.)</em></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
