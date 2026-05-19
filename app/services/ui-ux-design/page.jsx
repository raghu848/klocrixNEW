import UiUxClient from './UiUxClient'

export const metadata = {
  title: 'Premium UI UX Design Services | Expert UI/UX Design Company',
  description: 'Transform your digital products with our expert UI UX design services. As a leading UI UX design agency, we deliver stunning website and mobile app UI UX design.',
  keywords: 'ui ux design services, ui ux design company, website ui ux design, mobile app ui ux design, ui ux consulting services, ui ux design agency, mobile app ui ux design agency, what is ui ux design, ui vs ux design difference, latest ui ux design trends',
  alternates: {
    canonical: 'https://www.klocrix.com/services/ui-ux-design',
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
                "name": "UI/UX Design Services",
                "provider": {
                  "@type": "Organization",
                  "name": "Klocrix"
                },
                "description": "Expert UI UX design services including website ui ux design, mobile app ui ux design, and ui ux consulting services.",
                "areaServed": "Global"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the UI vs UX design difference?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "UX (User Experience) design is focused on the user's journey, logic, and structure of the product. UI (User Interface) design focuses on the visual aesthetics, colors, typography, and micro-interactions. Both are critical for a successful digital product."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do your UI UX consulting services work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our UI UX consulting services involve deep-diving into your current product, conducting user research, identifying friction points, and delivering actionable wireframes and high-fidelity prototypes to improve retention and conversion."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <UiUxClient />
    </>
  )
}
