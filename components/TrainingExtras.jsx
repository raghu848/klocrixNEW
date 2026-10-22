'use client'

import Image from 'next/image'
import { Section } from './redesign/page-kit'
import { IMAGES } from '../lib/images'

const JOURNEY = [
  { kicker: 'Stage 1', title: 'Master the fundamentals', desc: 'Live, interactive sessions with industry practitioners who manage real client work, not recorded lectures.', points: ['Live classes', 'Hands-on labs', 'Small batches'], img: IMAGES.mentorCode },
  { kicker: 'Stage 2', title: 'Build real projects', desc: 'Work in teams on live projects and campaigns so you leave with a portfolio that proves what you can do.', points: ['Team projects', 'Live campaigns', 'Git & deployment'], img: IMAGES.studentsLaptop },
  { kicker: 'Throughout', title: 'Get 1-on-1 mentorship', desc: '1-on-1 mentorship with reviews of your code and campaigns, showing you how professionals structure, test and ship.', points: ['Code reviews', 'Doubt sessions', 'Best practices'], img: IMAGES.mentorReview },
  { kicker: 'Stage 3', title: 'Earn your certification', desc: 'Finish with industry certifications and a portfolio of real work that strengthens your profile.', points: ['Certification', 'Portfolio', 'Project showcase'], img: IMAGES.certificate },
  { kicker: 'Stage 4', title: 'Placement assistance', desc: 'Placement assistance with interview preparation and resume support to help you take the next step in your career.', points: ['Interview prep', 'Resume building', 'Career guidance'], img: IMAGES.handshake },
]

export function TrainingJourney() {
  return (
    <Section id="journey" eyebrow="Your learning journey" title="From your first class to a job-ready portfolio">
      <div className="kx-stages">
        {JOURNEY.map((s) => (
          <article key={s.title} className="kx-stage-row kx-rv">
            <div className="kx-stage-img">
              <Image src={s.img.src} alt={s.img.alt} fill sizes="(max-width: 1100px) 100vw, 40vw" />
            </div>
            <div>
              <small>{s.kicker}</small>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="kx-tags">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
