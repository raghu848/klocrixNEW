import './globals.css'
import { OG_IMAGE } from '../lib/seo'
import { Inter, Manrope, Syne, DM_Sans } from 'next/font/google'

// 'optional' avoids a late font swap that re-wraps hero text (layout shift + delayed LCP on mobile)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
})

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'optional',
})

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Klocrix | Custom Software, Web & App Development Company',
    template: '%s | Klocrix'
  },
  description: 'Klocrix Business Solutions builds custom software, web & mobile apps, data science models and ERP systems for ambitious companies. 5+ years of engineering excellence.',
  keywords: ['custom software development', 'data science india', 'web development mohali', 'mobile app development chandigarh', 'ERP solutions', 'digital transformation services', 'Klocrix Business Solutions'],
  authors: [{ name: 'Klocrix Business Solutions Pvt. Ltd.' }],
  creator: 'Klocrix',
  publisher: 'Klocrix',
  verification: {
    google: 'googled605252d4c5bcd21',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.klocrix.com'),
  openGraph: {
    title: 'Klocrix - Engineering Digital Evolution',
    description: 'Transform your business with bespoke software solutions from industry veterans with 5+ years of experience.',
    url: 'https://www.klocrix.com',
    siteName: 'Klocrix Business Solutions',
    images: [OG_IMAGE],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klocrix - Engineering Digital Evolution',
    description: 'Transform your business with bespoke software solutions from industry veterans with 5+ years of experience.',
    images: [OG_IMAGE.url],
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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

import WhatsAppButton from '../components/WhatsAppButton'
import { OrganizationSchema, WebsiteSchema } from '../components/JsonLd'
import DeferredAnalytics from '../components/DeferredAnalytics'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${syne.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#0F0F11" />
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.className} antialiased text-text-secondary bg-background selection:bg-accent/30 selection:text-white`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ML5CHCLJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1409744298031274&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <DeferredAnalytics />
        <div className="relative min-h-screen">
          {children}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}