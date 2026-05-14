import './globals.css'
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    default: 'Klocrix - Engineering Digital Evolution | IT Solutions & Consulting',
    template: '%s | Klocrix'
  },
  description: 'Klocrix Business Solutions: 5+ years of engineering excellence. We architect bespoke software solutions, data science models, and ERP systems that transform ambitious companies.',
  keywords: ['custom software development', 'data science india', 'web development mohali', 'mobile app development chandigarh', 'ERP solutions', 'digital transformation services', 'Klocrix Business Solutions'],
  authors: [{ name: 'Klocrix Business Solutions Pvt. Ltd.' }],
  creator: 'Klocrix',
  publisher: 'Klocrix',
  alternates: {
    canonical: 'https://klocrix.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://klocrix.com'),
  openGraph: {
    title: 'Klocrix - Engineering Digital Evolution',
    description: 'Transform your business with bespoke software solutions from industry veterans with 5+ years of experience.',
    url: 'https://klocrix.com',
    siteName: 'Klocrix Business Solutions',
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
    description: 'Transform your business with bespoke software solutions from industry veterans with 5+ years of experience.',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

import WhatsAppButton from '../components/WhatsAppButton'
import { OrganizationSchema, WebsiteSchema } from '../components/JsonLd'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <meta name="theme-color" content="#0B1220" />
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.className} antialiased text-text-secondary bg-background selection:bg-accent/30 selection:text-white`}>
        <div className="relative min-h-screen">
          {children}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}