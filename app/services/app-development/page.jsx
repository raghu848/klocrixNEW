import AppDevClient from './AppDevClient'

export const metadata = {
  title: 'Premier Mobile App Development Company | Custom iOS & Android Apps',
  description: 'Elevate your digital presence with the best mobile app development company. We offer custom mobile app development, iOS app development, and Android app development services.',
  keywords: 'mobile app development company, app development services, custom mobile app development, android app development, app development company, mobile app development, ios app development, best mobile app development company, custom mobile app development company, ios and android app development',
  alternates: {
    canonical: 'https://www.klocrix.comservices/app-development',
  },
}

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
                "name": "Mobile App Development",
                "provider": {
                  "@type": "Organization",
                  "name": "Klocrix"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "App Development Services",
                  "itemListElement": [
                    {
                      "@type": "OfferCatalog",
                      "name": "iOS App Development"
                    },
                    {
                      "@type": "OfferCatalog",
                      "name": "Android App Development"
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Do you provide both iOS and Android app development?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we are a full-service mobile app development company offering both native iOS and Android development, as well as cross-platform solutions like React Native and Flutter."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does custom mobile app development typically take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Custom mobile app development timelines vary based on complexity, but a typical MVP takes between 3 to 6 months from discovery to launch."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <AppDevClient />
    </>
  )
}
