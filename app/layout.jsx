import './globals.css'
import { Inter, Poppins, Manrope } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Klocrix - Engineering Digital Evolution',
    template: '%s | Klocrix'
  },
  description: 'Klocrix Business Solutions: 25+ years of engineering excellence. We architect bespoke software solutions that transform ambitious companies into market leaders.',
  keywords: ['custom software development', 'data science', 'web development', 'mobile apps', 'ERP solutions', 'digital transformation'],
  authors: [{ name: 'Klocrix Business Solutions Pvt. Ltd.' }],
  creator: 'Klocrix',
  publisher: 'Klocrix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://klocrix.com'),
  openGraph: {
    title: 'Klocrix - Engineering Digital Evolution',
    description: 'Transform your business with bespoke software solutions from industry veterans with 25+ years of experience.',
    url: 'https://klocrix.com',
    siteName: 'Klocrix',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Klocrix - Engineering Digital Evolution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klocrix - Engineering Digital Evolution',
    description: 'Transform your business with bespoke software solutions from industry veterans with 25+ years of experience.',
    images: ['/og-image.jpg'],
    creator: '@klocrix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

import WhatsAppButton from '../components/WhatsAppButton'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#0B1220" />
      </head>
      <body className={`${inter.className} antialiased text-text-secondary bg-background`}>
        <div className="relative min-h-screen">
          {children}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}