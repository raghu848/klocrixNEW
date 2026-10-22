'use client'

import Image from 'next/image'
import { Section } from './redesign/page-kit'
import { TEAM_PHOTOS } from '../lib/images'

const JOURNEY = [
  {
    label: '2019 · The beginning',
    title: 'Founded in Mohali',
    desc: 'Mr. Nikhil Saini & Mrs. Reetika Saini start Klocrix as a forward-thinking consultancy focused on accelerating brand growth.',
  },
  {
    label: 'Growing capabilities',
    title: 'From marketing to engineering',
    desc: 'We expanded into custom software, web & mobile apps, ERP and data science so clients could grow with a single partner.',
  },
  {
    label: 'Klocrix Training',
    title: 'Building the next generation',
    desc: 'Job-ready industrial training in Python, MERN and digital marketing, taught by the people who ship our client work.',
  },
  {
    label: 'Today',
    title: 'Clients across 30+ countries',
    desc: 'A growing team in Mohali delivering software, brands and growth for ambitious companies around the world.',
  },
]

const STATS = [
  ['2019', 'Founded'],
  ['5+', 'Years of delivery'],
  ['30+', 'Countries reached'],
  ['3', 'Training tracks'],
]

export function JourneySection() {
  return (
    <Section id="journey" eyebrow="Our journey" title="Growing with every project since 2019">
      <ol className="kx-tl kx-rv">
        {JOURNEY.map((j) => (
          <li key={j.title}>
            <small>{j.label}</small>
            <div>
              <h3>{j.title}</h3>
              <p>{j.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <dl className="kx-statrow kx-rv" style={{ marginTop: 72 }}>
        {STATS.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </Section>
  )
}

// Real team photos
export function LifeAtKlocrixSection() {
  return (
    <Section id="life" eyebrow="Life at Klocrix" title="The people behind the pixels" intro="We celebrate wins together, sweat the details together and never stop learning. This is our studio in Mohali.">
      <div className="kx-mosaic">
        {TEAM_PHOTOS.map((photo) => (
          <figure key={photo.src} className="kx-rv">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 50vw, 30vw" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
