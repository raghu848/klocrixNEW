'use client'

import { Code2, ShoppingCart, Layout, Smartphone, Server, Globe } from 'lucide-react'
import ServiceDetail from '../../../components/redesign/ServiceDetail'

const config = {
  hero: {
    eyebrow: 'Web development',
    title: <>The premier <span className="kx-grad">web development company in Mohali</span> for ambitious brands</>,
    desc: 'As a leading web development company in Mohali, we engineer dynamic, high-performance web experiences. From intuitive interfaces to robust backends, our full stack web development company builds digital assets that drive real business growth.',
    primary: { href: '/contact', label: 'Start your project' },
    secondary: { href: '#services', label: 'Explore our services' },
  },
  servicesId: 'services',
  servicesTitle: 'Comprehensive website development services',
  servicesIntro: 'Your website is your digital storefront. Our website development services ensure it performs beautifully.',
  services: [
    { icon: Code2, title: 'Custom Web Development', desc: 'Bespoke architectures built with modern frameworks like React and Next.js. We translate complex requirements into seamless digital solutions.' },
    { icon: ShoppingCart, title: 'Ecommerce Web Development', desc: 'Scalable ecommerce web development solutions designed to maximize conversions, optimize user flows, and integrate seamlessly with your inventory systems.' },
    { icon: Server, title: 'Full Stack Development', desc: 'End-to-end full stack web development from database design to API development and reactive frontend interfaces.' },
    { icon: Smartphone, title: 'Progressive Web Apps', desc: 'App-like experiences in the browser that work offline, load instantly, and keep users engaged across all devices.' },
    { icon: Layout, title: 'CMS Integrations', desc: 'Empower your team with headless CMS solutions that allow effortless content management and unmatched frontend flexibility.' },
    { icon: Globe, title: 'Web App Modernization', desc: 'Upgrade legacy applications to modern tech stacks, improving performance, security, and developer velocity.' },
  ],
  why: {
    title: 'Why choose our web development company in Chandigarh & Mohali?',
    body: "We are a business website development company dedicated to ROI. We don't just write code; we align our technical strategy with your commercial objectives.",
    points: ['Performance-optimized Next.js architectures', 'SEO-first development practices', 'Scalable microservices and robust APIs'],
    cta: { href: '/contact', label: 'Ready to partner?' },
    aside: {
      title: 'Latest insights: web development trends 2026',
      body: 'The web is evolving. From Edge computing to Server Actions and WebAssembly, we stay ahead of the curve so your platform remains future-proof.',
      link: { href: '/blog', label: 'Read our insights' },
    },
  },
}

export default function WebDevClient() {
  return <ServiceDetail config={config} />
}
