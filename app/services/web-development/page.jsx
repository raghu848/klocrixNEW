import WebDevClient from './WebDevClient'
import { pageMetadata } from '../../../lib/seo'

export const metadata = pageMetadata({
  title: 'Web Development Company in Mohali & Chandigarh',
  description: 'Leading web development company in Mohali. Custom websites, e-commerce and full stack web applications built for speed, SEO and growth.',
  path: '/services/web-development',
  keywords: 'web development company in mohali, web development company, website development services, custom web development, ecommerce web development, web development company in chandigarh, business website development company, full stack web development company',
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Web Development",
                "provider": {
                  "@type": "Organization",
                  "name": "Klocrix"
                },
                "areaServed": ["Mohali", "Chandigarh"],
                "description": "Custom web development, ecommerce solutions, and full stack web development services."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What makes you the best web development company in Mohali?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We combine modern frontend frameworks like Next.js with robust backend architectures to deliver scalable, high-performance web applications tailored to your business needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer custom web development or just templates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We specialize exclusively in custom web development. Every website and web application we build is designed from the ground up to match your brand and functional requirements."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <WebDevClient />
    </>
  )
}
