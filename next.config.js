/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // External hosts used by next/image (case study photos and testimonial avatars)
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:file(.*\\.(?:png|jpg|jpeg|svg|ico|webp|avif))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'klocrix.com',
          },
        ],
        destination: 'https://www.klocrix.com/:path*',
        permanent: true,
      },
    ]
  },
  trailingSlash: false,
}

module.exports = nextConfig
