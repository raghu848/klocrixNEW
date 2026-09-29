import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F0F11] flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <p aria-hidden="true" className="text-9xl font-black text-accent opacity-20">404</p>
          <div className="-mt-16 relative z-10">
            <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>
            <p className="text-slate-400 mb-10 text-lg">
              The digital evolution you are looking for has moved or does not exist.
            </p>
            <Link href="/" className="glass-button-premium">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
