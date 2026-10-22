'use client'

import { useEffect } from 'react'
import { Code, Smartphone, Database, Settings, Cloud, Zap, Layout, PenTool } from 'lucide-react'
import { PageHero, Section, Tiles, CtaBand } from './redesign/page-kit'

const SERVICES = [
  {
    id: 'custom-software',
    icon: Code,
    title: 'Custom Software Development',
    desc: 'Bespoke applications engineered to fit your exact business requirements, built with scalability and performance at the core.',
    points: ['Enterprise application development', 'Legacy system modernization', 'API development & integration', 'Microservices architecture'],
    href: '/contact',
    cta: 'Discuss project',
  },
  {
    id: 'web-mobile',
    icon: Smartphone,
    title: 'Web & Mobile App Development',
    desc: 'Cutting-edge web and mobile solutions that deliver exceptional user experiences across all platforms.',
    points: ['Progressive Web Apps (PWA)', 'Native iOS & Android apps', 'Cross-platform development', 'Responsive web design'],
    href: '/contact',
    cta: 'Discuss project',
  },
  {
    id: 'data-science',
    icon: Database,
    title: 'Data Science & Engineering',
    desc: 'Transform data chaos into your unfair advantage with intelligent systems that drive automated decisions.',
    points: ['Machine Learning models', 'Predictive analytics', 'Data pipeline automation', 'Business intelligence dashboards'],
    href: '/contact',
    cta: 'Discuss project',
  },
  {
    id: 'erp',
    icon: Settings,
    title: 'ERP Solutions',
    desc: 'Comprehensive enterprise resource planning systems that streamline operations and boost efficiency.',
    points: ['Custom ERP development', 'ERP implementation & migration', 'Process automation', 'Inventory management'],
    href: '/contact',
    cta: 'Discuss project',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Scalable and secure cloud infrastructure that ensures your business is always online and performing at its peak.',
    points: ['Cloud migration strategy', 'AWS/Azure/GCP management', 'DevOps & CI/CD pipelines', 'Cloud security & compliance'],
    href: '/contact',
    cta: 'Discuss project',
  },
  {
    id: 'digital-transformation',
    icon: Zap,
    title: 'Digital Transformation',
    desc: 'Strategic consulting to modernize your business processes and adopt new technologies for the digital age.',
    points: ['Technology audit & roadmap', 'Agile transformation', 'Customer experience design', 'Digital culture shift'],
    href: '/contact',
    cta: 'Discuss project',
  },
]

const SPECIALISTS = [
  { icon: Code, title: 'Web Development', desc: 'Custom websites, e-commerce and full stack web applications.', href: '/services/web-development', cta: 'See web services' },
  { icon: Smartphone, title: 'App Development', desc: 'Native and cross-platform iOS and Android apps.', href: '/services/app-development', cta: 'See app services' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Research, prototyping and design systems that convert.', href: '/services/ui-ux-design', cta: 'See design services' },
  { icon: Layout, title: 'Data Science & AI', desc: 'Predictive models, pipelines and dashboards.', href: '/services/data-science', cta: 'See data services' },
]

// 1. Services hero
export function ServicesHero() {
  return (
    <PageHero
      eyebrow="Our arsenal"
      title={<>Digital excellence <span className="kx-grad">redefined</span></>}
      desc="We provide end-to-end capabilities to own your entire digital transformation journey, from strategy to deployment."
      actions={[{ href: '/contact', label: 'Start a project' }, { href: '#custom-software', label: 'Browse services', secondary: true }]}
      stats={[['6', 'Service lines'], ['5+', 'Years of delivery'], ['30+', 'Countries reached']]}
    />
  )
}

// 2. Detailed grid + specialist pages
export function ServicesDetailedGrid() {
  // Opening /services#cloud directly doesn't scroll on first load, so jump to the anchor once mounted
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <Section id="services" eyebrow="What we do" title="Our IT services">
        <Tiles items={SERVICES} />
      </Section>
      <Section id="specialists" eyebrow="Go deeper" title="Specialist service pages" intro="Looking for something specific? These pages explain how we work in each discipline.">
        <Tiles items={SPECIALISTS} cols={4} />
      </Section>
    </>
  )
}

// 3. CTA
export function ServicesCTA() {
  return (
    <CtaBand
      title="Have a specific requirement?"
      desc="Our team of architects is ready to help you define and build the perfect solution for your business."
      actions={[{ href: '/contact', label: 'Book a strategy call' }]}
    />
  )
}
