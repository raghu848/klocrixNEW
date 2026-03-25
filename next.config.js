/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    config.externals.push({
      'three': 'three',
      '@react-three/fiber': '@react-three/fiber',
      '@react-three/drei': '@react-three/drei'
    })
    return config
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig