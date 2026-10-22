'use client'

import { Database, Brain, LineChart, PieChart, Cpu, Search } from 'lucide-react'
import ServiceDetail from '../../../components/redesign/ServiceDetail'

const config = {
  hero: {
    eyebrow: 'Data science & AI',
    title: <>Transform data into your <span className="kx-grad">strategic asset</span></>,
    desc: 'In the new economy, data is the ultimate currency. Klocrix engineers the intelligent systems that refine raw data into your most strategic advantage.',
    primary: { href: '/contact', label: 'Discuss AI strategy' },
    secondary: { href: '#capabilities', label: 'Explore capabilities' },
  },
  servicesId: 'capabilities',
  servicesEyebrow: 'What we build',
  servicesTitle: 'Our core capabilities',
  servicesIntro: 'We provide the technical expertise and strategic vision needed to succeed in an AI-first world.',
  services: [
    { icon: Brain, title: 'Machine Learning', desc: 'Custom ML models designed to solve complex business problems and automate decision-making processes.' },
    { icon: LineChart, title: 'Predictive Analytics', desc: 'Anticipate market trends, customer behavior, and operational shifts before they happen.' },
    { icon: Database, title: 'Data Engineering', desc: 'Robust data pipelines and architectures that ensure your data is clean, accessible, and secure.' },
    { icon: PieChart, title: 'Business Intelligence', desc: 'Interactive dashboards and reporting tools that provide real-time visibility into your business metrics.' },
    { icon: Cpu, title: 'AI Integration', desc: 'Seamlessly integrate artificial intelligence into your existing workflows and legacy systems.' },
    { icon: Search, title: 'Semantic Search', desc: 'Advanced search infrastructure that understands intent and context for more accurate results.' },
  ],
  why: {
    eyebrow: 'Case study',
    title: 'Baresght Portfolio Intelligence',
    body: 'Architected a centralized data warehouse and custom ML models to predict asset performance and tenant churn for a billion-dollar real estate portfolio in Singapore.',
    points: ['Processed 10TB+ of historical real estate data', 'Built predictive models with 94% accuracy', 'Automated 80% of manual reporting processes'],
    cta: { href: '/work', label: 'View all case studies' },
    aside: {
      metrics: [
        ['22%', 'Operational efficiency increase'],
        ['$2M+', 'Annual savings identified'],
        ['94%', 'Prediction accuracy rate'],
      ],
    },
  },
}

export default function DataScienceClient() {
  return <ServiceDetail config={config} />
}
