'use client'

import { Apple, Play, Layers, Cpu, RefreshCw, Zap } from 'lucide-react'
import ServiceDetail from '../../../components/redesign/ServiceDetail'

const config = {
  hero: {
    eyebrow: 'App development',
    title: <>Transform your vision with a leading <span className="kx-grad">mobile app development company</span></>,
    desc: 'Partner with a visionary mobile app development company to build scalable, high-performance applications. We specialize in seamless iOS and Android app development that delights users and drives revenue.',
    primary: { href: '/contact', label: 'Build your app' },
    secondary: { href: '#services', label: 'View capabilities' },
  },
  servicesId: 'services',
  servicesTitle: 'End-to-end app development services',
  servicesIntro: 'As a dedicated app development company, we handle everything from architecture design to app store deployment.',
  services: [
    { icon: Apple, title: 'iOS App Development', desc: "Native Swift and Objective-C development ensuring high performance and a premium feel aligned with Apple's human interface guidelines." },
    { icon: Play, title: 'Android App Development', desc: 'Kotlin-based Android app development crafted for the massive Android ecosystem, ensuring compatibility across thousands of device types.' },
    { icon: Layers, title: 'Cross-Platform Apps', desc: 'React Native and Flutter solutions to deploy your app on both platforms simultaneously, reducing time-to-market and costs.' },
    { icon: Cpu, title: 'Custom Mobile App Development', desc: 'Enterprise-grade architecture and bespoke features built entirely around your business logic and operational needs.' },
    { icon: RefreshCw, title: 'App Modernization', desc: 'Rewrite and refactor aging legacy apps into modern, maintainable codebases with improved UX and performance.' },
    { icon: Zap, title: 'App Strategy & Consulting', desc: 'Strategic guidance from top app development experts to help you validate, plan, and architect your mobile product.' },
  ],
  why: {
    title: 'What makes us the best mobile app development company?',
    body: 'As a custom mobile app development company, we bridge the gap between stunning UI/UX and robust, crash-free engineering. We build apps that people actually want to use.',
    points: ['Native performance with seamless animations', 'Offline capabilities and secure local storage', 'Rigorous automated testing and QA'],
    cta: { href: '/services/ui-ux-design', label: 'Explore our UI/UX process' },
    aside: {
      title: 'Mobile strategy: native vs hybrid apps',
      body: 'Wondering which path to take? Our latest guide on App Development Trends explores the pros and cons to help you make data-driven decisions.',
      link: { href: '/blog', label: 'Read the guide' },
    },
  },
}

export default function AppDevClient() {
  return <ServiceDetail config={config} />
}
