export const SITE_URL = 'https://www.klocrix.com'
export const SITE_NAME = 'Klocrix Business Solutions'

export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Klocrix – Custom Software, Web & App Development',
}

// Builds per-page metadata so each route gets its own canonical, og:url and share image.
// `title` goes through the root layout's "%s | Klocrix" template unless `absoluteTitle` is set.
export function pageMetadata({ title, absoluteTitle, description, path = '', keywords }) {
  const url = `${SITE_URL}${path}`
  const fullTitle = absoluteTitle || `${title} | Klocrix`

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
