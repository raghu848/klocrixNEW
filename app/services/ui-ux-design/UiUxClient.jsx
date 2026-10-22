'use client'

import { LayoutTemplate, Smartphone, Eye, PenTool, Palette, Heart } from 'lucide-react'
import ServiceDetail from '../../../components/redesign/ServiceDetail'

const config = {
  hero: {
    eyebrow: 'UI/UX design',
    title: <>World-class <span className="kx-grad">UI UX design services</span> that drive engagement</>,
    desc: 'Great products are built on exceptional design. Our UI UX design services combine aesthetic brilliance with behavioral science. As a premier UI UX design agency, we craft digital experiences that users love.',
    primary: { href: '/contact', label: 'Discuss your design' },
    secondary: { href: '#services', label: 'Explore our process' },
  },
  servicesId: 'services',
  servicesTitle: 'Strategic UI UX consulting services & execution',
  servicesIntro: 'From initial wireframes to pixel-perfect handoffs, we deliver designs that elevate your brand and engage your audience.',
  services: [
    { icon: LayoutTemplate, title: 'Website UI UX Design', desc: 'Immersive, accessible, and conversion-focused website designs that capture attention and guide users effortlessly towards your goals.' },
    { icon: Smartphone, title: 'Mobile App UI UX Design', desc: 'Intuitive touch interfaces and fluid micro-animations. We are a specialized mobile app ui ux design agency building habit-forming mobile experiences.' },
    { icon: Eye, title: 'UI UX Consulting Services', desc: 'Comprehensive UX audits, user journey mapping, and heuristic evaluations to optimize your existing digital products.' },
    { icon: PenTool, title: 'Wireframing & Prototyping', desc: 'Rapid, interactive prototypes that allow you to validate concepts and test with real users before writing a single line of code.' },
    { icon: Palette, title: 'Design Systems', desc: 'Scalable, reusable component libraries that ensure visual consistency across all your enterprise applications.' },
    { icon: Heart, title: 'User Research & Testing', desc: 'Data-driven design decisions based on real user feedback, A/B testing, and deep behavioral analytics.' },
  ],
  why: {
    title: 'Partner with an award-winning UI UX design company',
    body: 'Working with a specialized UI UX design company ensures your digital touchpoints are both beautiful and highly functional. We transform complex systems into intuitive experiences.',
    points: ['Figma-native workflows with seamless developer handoff', 'Accessibility-first design (WCAG compliance)', 'Conversion rate optimization (CRO) focused layouts'],
    cta: { href: '/services/web-development', label: 'Explore web development' },
    aside: {
      title: 'Design insights: what is UI UX design?',
      body: 'Curious about the UI vs UX design difference or the latest UI UX design trends? Check out our design blog where we break down the psychology behind great interfaces.',
      link: { href: '/blog', label: 'Read our design insights' },
    },
  },
}

export default function UiUxClient() {
  return <ServiceDetail config={config} />
}
