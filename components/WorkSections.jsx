'use client'

import { portfolioProjects } from '../data/projects'
import CaseStudyExplorer from './redesign/CaseStudyExplorer'
import { PageHero, CtaBand } from './redesign/page-kit'

const industries = new Set(portfolioProjects.map((p) => p.category)).size

// 1. Work hero
export function WorkHero() {
  return (
    <PageHero
      eyebrow="Case studies"
      title={<>Engineering <span className="kx-grad">success stories</span></>}
      desc="A selection of our most impactful projects that transformed businesses across industries through technical mastery."
      stats={[[String(portfolioProjects.length), 'Client projects shown'], [String(industries), 'Industries served'], ['2019', 'Delivering since']]}
    />
  )
}

// 2. Interactive case study list + preview
export function WorkGrid() {
  return <CaseStudyExplorer projects={portfolioProjects} variant="page" id="work-cases" />
}

// 3. Closing call to action
export function WorkCTA() {
  return (
    <CtaBand
      title="Have a project in mind?"
      desc="Tell us what you are building. We will come back with a plan, a timeline and a clear next step."
      actions={[{ href: '/contact', label: 'Start a project' }, { href: '/services', label: 'Our capabilities', secondary: true }]}
    />
  )
}
