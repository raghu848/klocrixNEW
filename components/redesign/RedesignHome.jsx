'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Header from '../Header'
import Hero from './Hero'
import CaseStudyExplorer from './CaseStudyExplorer'
import { portfolioProjects } from '../../data/projects'
import '../../app/redesign.css'

// Tiny helper: write inline styles as CSS text, get a React style object back
const cache = new Map()
const S = (css) => {
  if (!cache.has(css)) {
    const o = {}
    css.split(';').forEach((d) => {
      const i = d.indexOf(':')
      if (i < 0) return
      let k = d.slice(0, i).trim()
      if (!k) return
      if (!k.startsWith('--')) k = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      o[k] = d.slice(i + 1).trim()
    })
    cache.set(css, o)
  }
  return cache.get(css)
}

const pal = ['#FFC52E', '#75D94C', '#22D3C5', '#FF7A1A', '#FF4D3A', '#F23D7A']
const logo = (f) => '/client logos/' + encodeURI(f)

const NEEDS = ['web development', 'app development', 'ui/ux design', 'cloud solutions']

const CLIENTS = [
  ['GDPL', 'GDPL_Logo_white.png'], ['Prestige Realty', 'Prestige_Realty-01_white.png'], ['Gulfin Valley', 'Logo (2).png'],
  ['Amayra Trillium', 'Amayra logo.png'], ['The Grand Sky', 'Logo_Grand_sky_golden.png'], ['Monga Toyota'],
  ['Fineness Australia', 'Fineness.png'], ['Fine Cabinets'], ['WorkVEU', 'Logo_white 1.png'],
]
const STATEMENT = 'We are engineers, designers and marketers who turn ambitious ideas into software, brands and growth. From Mohali to clients across the globe, we build products that are fast, scalable and built to last.'.split(' ')
const STATS = [['2019', 'Founded', 0], ['5+', 'Years of delivery', 3], ['30+', 'Countries reached', 4], ['6', 'Service lines', 5]]
const SERVICES = [
  ['Web Development', 'Scalable, high-performance web applications built with the latest frameworks like React and Next.js.'],
  ['App Development', 'Native and cross-platform mobile solutions that provide seamless experiences across all devices.'],
  ['UI/UX Design', 'User-centric design thinking that combines aesthetic beauty with functional excellence.'],
  ['Digital Transformation', 'Modernizing legacy systems and integrating AI to streamline your business operations.'],
  ['Cloud Solutions', 'Secure, scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud.'],
  ['Maintenance & Support', '24/7 dedicated support and continuous optimization to ensure your systems never skip a beat.'],
]
const PILLARS = [
  ['Strategic Mastery', 'Decades of experience in high-stakes digital environments.', 0],
  ['Bespoke Innovation', 'No generic templates. Only custom-engineered excellence.', 3],
  ['Global Impact', 'Empowering businesses across 30+ countries worldwide.', 5],
]
const STEPS = [
  ['01', 'Discovery', 0, 'Deep dive into business goals, mapping out the precise architecture needed to solve complex challenges.', ['Stakeholder workshops', 'Market research', 'Technical audit']],
  ['02', 'Strategy', 2, 'We define constraints, select the perfect technology stack, and establish a robust timeline for delivery.', ['Wireframes & UX', 'Tech stack selection', 'Delivery roadmap']],
  ['03', 'Engineering', 3, 'Agile development employing elite coding standards, rigorous testing, and continuous integration.', ['Agile sprints', 'Code reviews', 'Automated testing']],
  ['04', 'Launch', 5, 'Seamless deployment with zero downtime, paired with continuous scale support to guarantee ongoing performance.', ['Zero-downtime release', 'Monitoring', 'Growth support']],
]
const BENEFITS = [
  ['Live Training', 'Interactive sessions with industry veterans who manage real client budgets.'],
  ['Real Projects', 'Work on live campaigns and gain practical experience that matters.'],
  ['90% Practical', 'Less theory, more implementation. We focus on ROI-driven marketing.'],
  ['Certification', 'Get industry-recognized certifications to boost your career profile.'],
  ['Small Batches', 'Personalized attention with limited students per batch for better learning.'],
  ['Job Ready', 'Exit the bootcamp with a portfolio of real work and interview skills.'],
]
const COURSES = [
  { n: 'Digital Marketing', c: 3, t: 'Master Digital Marketing', d: "Join Mohali's most practical digital marketing bootcamp. 12 weeks of intensive, hands-on training.", m: [
    ['Foundations', ['Introduction to Digital Marketing', 'Market Research & Analysis', 'WordPress Fundamentals', 'SEO Basics']],
    ['SEO & Content', ['Keyword Research', 'On-Page & Technical SEO', 'Strategy & Planning', 'Content Marketing']],
    ['Paid Media', ['Meta Ads Mastery', 'Google Ads (PPC/Display)', 'LinkedIn Marketing', 'Retargeting']],
    ['Analytics', ['Google Analytics 4', 'Google Tag Manager', 'CRO & AB Testing', 'Reporting']]] },
  { n: 'Python Development', c: 0, t: 'Python Engineering Mastery', d: "Build robust backend systems and data automation tools with the world's most versatile language.", m: [
    ['Core Basics', ['Advanced Data Structures', 'Control Flow & Functions', 'Exception Handling', 'File I/O & Modules']],
    ['OOP Mastery', ['Classes & Objects', 'Inheritance & Polymorphism', 'Encapsulation', 'Decorators & Generators']],
    ['Data & Web', ['Pandas & NumPy Basics', 'Web Scraping (BS4/Selenium)', 'API Integration', 'Flask Essentials']],
    ['Django Prof.', ['MTV Architecture', 'Django REST Framework', 'Database (SQL)', 'Authentication Systems']]] },
  { n: 'Fullstack MERN', c: 1, t: 'MERN Stack Architecture', d: 'Become a Fullstack Architect. Build scalable enterprise applications from frontend to cloud deployment.', m: [
    ['Frontend Pro', ['React JS & Next.js 14', 'Tailwind CSS Architecture', 'Framer Motion', 'State (Zustand/Redux)']],
    ['Backend Eng.', ['Node.js Runtime', 'Express.js Architecture', 'Middleware Design', 'JWT & Auth Systems']],
    ['Cloud & DB', ['MongoDB / NoSQL', 'Mongoose Modeling', 'Redis Caching', 'PostgreSQL Basics']],
    ['DevOps', ['Vercel/AWS Deployment', 'CI/CD Pipelines', 'System Design', 'Unit Testing']]] },
]
const QUOTES = [
  ['Vikram Malhotra', 'Director, Real Estate Group', 'Klocrix transformed our lead generation process. Their expertise in Meta and Google advertising has been instrumental in our project sales.'],
  ['Anjali Sharma', 'Marketing Manager, Automotive', 'The team at Klocrix handles our brand communication with exceptional precision. They delivered a consistent digital presence that resonates with our customers.'],
  ['Robert Thompson', 'CEO, International Manufacturing', 'Working with Klocrix helped us expand our reach internationally. Their strategic digital execution is truly world-class.'],
]

export default function RedesignHome() {
  const [openSvc, setOpenSvc] = useState(0)
  const [course, setCourse] = useState(0)
  const [quote, setQuote] = useState(0)
  const [need, setNeed] = useState(0)
  const root = useRef(null)


  // scroll reveal, word light-up, parallax
  useEffect(() => {
    const el = root.current
    if (!el) return
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    el.querySelectorAll('.rv').forEach((n) => io.observe(n))
    const words = [...el.querySelectorAll('.wd')]
    const pars = [...el.querySelectorAll('[data-par]')]
    const onScroll = () => {
      const vh = window.innerHeight
      words.forEach((w) => w.classList.toggle('on', w.getBoundingClientRect().top < vh * 0.88))
      pars.forEach((p) => {
        const r = p.parentElement.getBoundingClientRect()
        const t = (r.top + r.height / 2 - vh / 2) / vh
        p.style.transform = `translateY(${(-t * 40).toFixed(1)}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const c = COURSES[course]
  const col = pal[c.c]
  const q = QUOTES[quote]

  return (
    <div className="rd" ref={root}>

      <Header />

      <div className="wrap">
        {/* HERO */}
        <Hero />

        {/* CLIENT MARQUEE */}
        <section style={S('padding:64px 0 40px;overflow:hidden')}>
          <div className="rv pad" style={S('padding:0 44px 28px;font-size:12px;letter-spacing:.3em;text-transform:uppercase;font-weight:700;color:var(--mut)')}>Trusted by Industry Leaders Worldwide</div>
          <div style={S('-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)')}>
            <div className="track">
              {[...CLIENTS, ...CLIENTS].map(([n, f], i) => (
                <div key={i} style={S('padding:0 44px;display:flex;align-items:center')}>
                  {f ? <Image src={logo(f)} alt={n} width={190} height={64} sizes="190px" style={S('height:64px;width:auto;max-width:190px;object-fit:contain;opacity:.85')} />
                    : <span className="display" style={S('font-size:28px;font-weight:700;white-space:nowrap;opacity:.85')}>{n}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="pad" style={S('padding:96px 44px 56px')}>
          <p className="display" style={S('margin:0 0 64px;font-size:62px;line-height:1.12;font-weight:600;letter-spacing:-.015em;text-transform:none')}>
            {STATEMENT.map((w, i) => <span key={i} className="wd">{w} </span>)}
          </p>
          <div className="g4" style={S('display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding-top:28px;border-top:2px solid;border-image:linear-gradient(90deg,#FFC52E,#75D94C,#22D3C5,#FF7A1A,#FF4D3A,#F23D7A) 1')}>
            {STATS.map(([v, l, ci]) => (
              <div key={l} className="rv">
                <div className="display" style={{ ...S('font-size:92px;font-weight:700;line-height:1;letter-spacing:-.03em'), color: pal[ci] }}>{v}</div>
                <div style={S('margin-top:10px;font-size:14px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--mut)')}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="pad" style={S('background:var(--sf);border:1px solid rgba(245,239,232,.08);border-radius:28px;padding:80px 56px 88px;margin-top:40px;overflow:hidden')}>
          <div className="blob" style={S('width:460px;height:460px;right:-140px;top:-140px;background:var(--t);opacity:.3')} />
          <div style={S('position:relative;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:56px')}>
            <div className="rv"><div className="eyebrow">Chapter 01 — Our Expertise</div><h2 className="display big" style={S('margin:0;font-size:80px;line-height:1.02;font-weight:700;letter-spacing:-.02em;max-width:900px')}>Comprehensive IT Solutions for Modern Enterprises</h2></div>
            <p className="rv" style={S('margin:0;max-width:360px;font-size:17px;line-height:1.55;color:#bfb4a8')}>We offer a wide range of services designed to help your business thrive in an increasingly digital world.</p>
          </div>
          <div style={S('position:relative;border-top:1px solid rgba(245,239,232,.2)')}>
            {SERVICES.map(([t, d], i) => (
              <div key={t} style={S('border-bottom:1px solid rgba(245,239,232,.2)')}>
                <button className="row" onClick={() => setOpenSvc(openSvc === i ? -1 : i)} aria-expanded={openSvc === i} style={S('width:100%;background:transparent;border:0;color:var(--cream);display:flex;align-items:center;gap:28px;padding:30px 0;text-align:left')}>
                  <span style={{ width: 14, height: 14, borderRadius: '50%', background: pal[i], flex: 'none' }} />
                  <span style={{ width: 44, fontSize: 15, color: pal[i], fontWeight: 700 }}>0{i + 1}</span>
                  <span className="display" style={S('flex:1;font-size:50px;font-weight:700;letter-spacing:-.015em')}>{t}</span>
                  <span style={{ fontSize: 36, width: 40, textAlign: 'center', color: pal[i] }}>{openSvc === i ? '−' : '+'}</span>
                </button>
                {openSvc === i && (
                  <div className="in" style={S('padding:0 0 36px 86px')}><p style={S('margin:0;max-width:580px;font-size:19px;line-height:1.55;color:#d6cbbe')}>{d}</p></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="pad g12" style={S('padding:128px 44px 104px;display:grid;grid-template-columns:repeat(12,1fr);column-gap:24px;align-items:start')}>
          <div className="rv" style={S('grid-column:1/span 5;position:relative')}>
            <div style={S('aspect-ratio:4/5;border-radius:28px;overflow:hidden;position:relative')}>
              <img data-par src="/hero/team.webp" alt="The Klocrix team in the studio" loading="lazy" style={S('position:absolute;inset:-8% 0;width:100%;height:116%;object-fit:cover;object-position:50% 30%;will-change:transform')} />
              <div style={S('position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(11,11,15,.85))')} />
              <span className="display" style={S('position:absolute;left:24px;bottom:20px;font-size:88px;line-height:.92;font-weight:700;letter-spacing:-.03em')}>Our<br />Story</span>
            </div>
            <div style={S('position:absolute;right:-12px;top:36px;width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,#FF7A1A,#FF4D3A);display:flex;align-items:center;justify-content:center;text-align:center;color:#0B0B0F;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;animation:rd-float 5s ease-in-out infinite')}>Since<br />2019</div>
          </div>
          <div style={S('grid-column:7/span 6;display:flex;flex-direction:column;gap:36px')}>
            <div className="rv eyebrow" style={S('margin:0')}>About Klocrix</div>
            <p className="rv" style={S('margin:0;font-size:30px;line-height:1.38;font-weight:500')}>Klocrix is a forward-thinking business consultancy founded by Mr. Nikhil Saini &amp; Mrs. Reetika Saini. We are committed to accelerating your brand&apos;s growth through innovation, data-driven insights, and strategic execution.</p>
            <div className="rv" style={S('border-top:1.5px solid var(--cream)')}>
              {PILLARS.map(([t, d, ci]) => (
                <div key={t} style={S('display:flex;gap:24px;padding:22px 0;border-bottom:1px solid rgba(245,239,232,.2)')}>
                  <span className="display" style={{ ...S('flex:0 0 240px;font-size:22px;font-weight:700'), color: pal[ci] }}>{t}</span>
                  <span style={S('font-size:17px;line-height:1.5;color:#cfc4b7')}>{d}</span>
                </div>
              ))}
            </div>
            <a href="/about" className="pill" style={S('align-self:flex-start;background:var(--cream);color:var(--ink);padding:18px 32px;font-size:16px')}>Learn more about us</a>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="pad g12" style={S('padding:24px 44px 128px;display:grid;grid-template-columns:repeat(12,1fr);column-gap:24px;align-items:start')}>
          <div style={S('grid-column:1/span 5;position:sticky;top:40px;display:flex;flex-direction:column;gap:20px')}>
            <div className="eyebrow" style={S('margin:0')}>Chapter 02 — Our Process</div>
            <h2 className="display big" style={S('margin:0;font-size:76px;line-height:1.02;font-weight:700;letter-spacing:-.02em')}>Translating Vision into Reality</h2>
            <p style={S('margin:0;font-size:20px;line-height:1.5;color:#bfb4a8;max-width:440px')}>Four focused stages take every project from first conversation to confident launch.</p>
          </div>
          <div style={S('grid-column:7/span 6;display:flex;flex-direction:column;gap:20px')}>
            {STEPS.map(([n, t, ci, d, pts]) => (
              <div key={n} className="rv lift" style={S('position:relative;background:var(--sf);border:1.5px solid rgba(245,239,232,.14);border-radius:28px;padding:36px 36px 40px;min-height:380px;display:flex;flex-direction:column;gap:18px;overflow:hidden')}>
                <div className="blob" style={{ ...S('width:260px;height:260px;right:-90px;top:-90px;opacity:.35'), background: pal[ci] }} />
                <span className="display" style={{ ...S('position:relative;font-size:96px;font-weight:800;line-height:1'), color: pal[ci] }}>{n}</span>
                <h3 className="display" style={S('position:relative;margin:0;font-size:40px;font-weight:700')}>{t}</h3>
                <p style={S('position:relative;margin:0;font-size:17px;line-height:1.55;color:#d6cbbe')}>{d}</p>
                <ul style={S('position:relative;margin:auto 0 0;padding:0;list-style:none;display:flex;flex-wrap:wrap;gap:8px')}>
                  {pts.map((x) => <li key={x} style={S('border:1px solid rgba(245,239,232,.3);border-radius:999px;padding:8px 16px;font-size:14px;font-weight:700')}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <CaseStudyExplorer projects={portfolioProjects} limit={6} />


        {/* TRAINING */}
        <section id="training" style={S('padding:128px 0 40px')}>
          <div className="pad g12" style={S('padding:0 44px;display:grid;grid-template-columns:repeat(12,1fr);column-gap:24px;align-items:center')}>
            <div style={S('grid-column:1/span 6;display:flex;flex-direction:column;gap:28px')}>
              <div className="rv eyebrow" style={S('color:var(--y);margin:0')}>Chapter 04 — Klocrix Training</div>
              <h2 className="rv display big" style={S('margin:0;font-size:92px;line-height:1;font-weight:700;letter-spacing:-.025em')}>Elite <span className="shine">Industrial</span> Training</h2>
              <p className="rv" style={S('margin:0;font-size:21px;line-height:1.55;color:#d6cbbe;max-width:520px')}>Join Chandigarh&apos;s most rigorous industrial training programs. We don&apos;t just teach code; we build engineers and architects.</p>
              <div className="rv" style={S('display:flex;gap:12px;flex-wrap:wrap')}>
                <a href="tel:+917508535271" className="pill" style={S('background:linear-gradient(90deg,#FFC52E,#FF7A1A);color:var(--ink);padding:18px 34px;font-size:16px;font-weight:800')}>Apply Now</a>
                <a href="#curriculum" className="pill" style={S('border:1.5px solid rgba(245,239,232,.5);padding:16.5px 34px;font-size:16px')}>View Curriculum</a>
              </div>
            </div>
            <div className="rv" style={S('grid-column:7/span 6;position:relative;height:640px')}>
              <div className="tilt" style={S('position:absolute;left:0;top:40px;width:330px;height:440px;border-radius:26px;overflow:hidden;transform:rotate(-6deg);border:3px solid var(--ink);box-shadow:0 30px 50px -20px rgba(0,0,0,.7)')}><img src="/case-studies/klocrix-team-4.jpeg" alt="Learners and mentors at their desks" loading="lazy" style={S('width:100%;height:100%;object-fit:cover')} /></div>
              <div className="tilt" style={S('position:absolute;right:0;top:0;width:350px;height:300px;border-radius:26px;overflow:hidden;transform:rotate(5deg);border:3px solid var(--ink);box-shadow:0 30px 50px -20px rgba(0,0,0,.7)')}><img src="/case-studies/klocrix-collaboration.jpeg" alt="Klocrix team building together" loading="lazy" style={S('width:100%;height:100%;object-fit:cover')} /></div>
              <div className="tilt" style={S('position:absolute;right:30px;bottom:0;width:300px;height:380px;border-radius:26px;overflow:hidden;transform:rotate(-3deg);border:3px solid var(--ink);box-shadow:0 30px 50px -20px rgba(0,0,0,.7)')}><img src="/training-benefits-bg.jpeg" alt="The Klocrix building in Mohali" loading="lazy" style={S('width:100%;height:100%;object-fit:cover')} /></div>
              <div style={S('position:absolute;left:150px;bottom:30px;background:linear-gradient(135deg,#75D94C,#22D3C5);border-radius:999px;color:#0B0B0F;padding:16px 28px;font-size:14px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;animation:rd-float 5s ease-in-out infinite')}>12 weeks · 90% practical</div>
            </div>
          </div>

          <div className="pad" style={S('padding:120px 44px 0')}>
            <h3 className="rv display big" style={S('margin:0 0 20px;font-size:64px;line-height:1.04;font-weight:700;letter-spacing:-.02em;max-width:900px')}>Why Choose Klocrix Training?</h3>
            <p className="rv" style={S('margin:0 0 48px;font-size:20px;color:#bfb4a8;max-width:640px')}>Our bootcamp is designed to bridge the gap between academic learning and industry requirements.</p>
            <div className="g3" style={S('display:grid;grid-template-columns:repeat(3,1fr);gap:16px')}>
              {BENEFITS.map(([t, d], i) => (
                <div key={t} className="rv lift" style={S('background:var(--sf);border:1.5px solid rgba(245,239,232,.14);border-radius:26px;padding:32px;min-height:250px;display:flex;flex-direction:column;gap:14px')}>
                  <div style={{ ...S('width:54px;height:54px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:var(--ink)'), background: pal[i] }}>0{i + 1}</div>
                  <h4 className="display" style={S('margin:14px 0 0;font-size:28px;font-weight:700')}>{t}</h4>
                  <p style={S('margin:0;font-size:17px;line-height:1.55;color:#cfc4b7')}>{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pad g2" style={S('padding:96px 44px 0;display:grid;grid-template-columns:5fr 7fr;gap:16px')}>
            <div className="rv" style={S('position:relative;height:480px;border-radius:28px;overflow:hidden')}>
              <img data-par src="/case-studies/klocrix-team-2.jpeg" alt="Heads-down in the studio" loading="lazy" style={S('position:absolute;inset:-8% 0;width:100%;height:116%;object-fit:cover;will-change:transform')} />
              <div style={S('position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(11,11,15,.85))')} />
              <span style={S('position:absolute;left:24px;bottom:22px;font-size:13px;letter-spacing:.2em;text-transform:uppercase;font-weight:800')}>Heads-down in the studio</span>
            </div>
            <div className="rv" style={S('position:relative;height:480px;border-radius:28px;overflow:hidden')}>
              <img data-par src="/case-studies/klocx-crop.jpg" alt="The Klocrix team on the rooftop at sunset" loading="lazy" style={S('position:absolute;inset:-8% 0;width:100%;height:116%;object-fit:cover;will-change:transform')} />
              <div style={S('position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(11,11,15,.85))')} />
              <span style={S('position:absolute;left:24px;bottom:22px;font-size:13px;letter-spacing:.2em;text-transform:uppercase;font-weight:800')}>Learn with a team that ships</span>
            </div>
          </div>

          <div id="curriculum" className="pad" style={S('margin:120px 12px 0;background:var(--sf);border:1px solid rgba(245,239,232,.08);border-radius:28px;padding:80px 44px 88px')}>
            <div className="rv eyebrow">Our Curriculum</div>
            <h3 className="rv display big" style={S('margin:0 0 40px;font-size:76px;line-height:1.02;font-weight:700;letter-spacing:-.02em')}>Expert-Led Learning Paths</h3>
            <div style={S('display:flex;flex-wrap:wrap;gap:12px;margin-bottom:40px')}>
              {COURSES.map((x, i) => (
                <button key={x.n} className="pill" onClick={() => setCourse(i)} aria-pressed={course === i} style={{ ...S('padding:16px 30px;font-size:15px;font-weight:800;letter-spacing:.06em;text-transform:uppercase'), border: `1.5px solid ${pal[x.c]}`, background: course === i ? pal[x.c] : 'transparent', color: course === i ? '#0B0B0F' : '#F5EFE8' }}>{x.n}</button>
              ))}
            </div>
            <div className="g2" style={S('display:grid;grid-template-columns:5fr 7fr;gap:24px;align-items:stretch')}>
              <div style={{ ...S('position:relative;border-radius:26px;overflow:hidden;min-height:460px;padding:36px;display:flex;flex-direction:column;justify-content:flex-end;gap:14px;color:var(--ink)'), background: col }}>
                <div className="blob" style={S('width:320px;height:320px;right:-100px;top:-100px;background:#fff;opacity:.35')} />
                <span className="display" style={S('position:absolute;left:28px;top:8px;font-size:200px;font-weight:800;line-height:1;opacity:.18')}>0{course + 1}</span>
                <h4 className="display" style={S('position:relative;margin:0;font-size:46px;line-height:1.02;font-weight:800')}>{c.t}</h4>
                <p style={S('position:relative;margin:0;font-size:18px;line-height:1.5;font-weight:500')}>{c.d}</p>
              </div>
              <div style={S('display:grid;grid-template-columns:repeat(2,1fr);gap:16px')}>
                {c.m.map(([t, items]) => (
                  <div key={course + t} className="lift in" style={S('border:1.5px solid rgba(245,239,232,.14);border-radius:22px;padding:26px;background:var(--ink);display:flex;flex-direction:column;gap:14px')}>
                    <div style={S('display:flex;align-items:center;gap:12px')}><span style={{ width: 12, height: 12, borderRadius: '50%', background: col }} /><h5 className="display" style={S('margin:0;font-size:22px;font-weight:700')}>{t}</h5></div>
                    <ul style={S('margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px;font-size:15px;color:#cfc4b7')}>
                      {items.map((x) => <li key={x} style={S('border-top:1px solid rgba(245,239,232,.1);padding-top:9px')}>{x}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="pad" style={S('padding:128px 44px 104px')}>
          <div className="rv eyebrow">Chapter 05 — Testimonials</div>
          <h2 className="rv display big" style={S('margin:0 0 56px;font-size:80px;line-height:1.02;font-weight:700;letter-spacing:-.02em;max-width:1000px')}>Trusted by CEOs &amp; Founders</h2>
          <div className="rv g2" style={S('display:grid;grid-template-columns:8fr 4fr;gap:16px;align-items:stretch')}>
            <div style={S('position:relative;background:var(--sf);border:1px solid rgba(245,239,232,.1);border-radius:28px;padding:52px;display:flex;flex-direction:column;justify-content:space-between;gap:32px;min-height:400px;overflow:hidden')}>
              <div className="blob" style={S('width:360px;height:360px;right:-120px;top:-140px;background:var(--p);opacity:.35')} />
              <p className="display" style={S('position:relative;margin:0;font-size:38px;line-height:1.22;font-weight:600;text-transform:none;letter-spacing:-.01em')}>“{q[2]}”</p>
              <div style={S('position:relative;display:flex;justify-content:space-between;align-items:flex-end;gap:24px')}>
                <div><div style={S('font-size:20px;font-weight:700')}>{q[0]}</div><div style={S('font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--mut);margin-top:4px')}>{q[1]}</div></div>
                <button className="pill" onClick={() => setQuote((quote + 1) % QUOTES.length)} aria-label="Next testimonial" style={S('background:linear-gradient(90deg,#FF4D3A,#F23D7A);color:#0B0B0F;padding:16px 28px;font-size:15px')}>next →</button>
              </div>
            </div>
            <div style={S('display:flex;flex-direction:column;gap:12px')}>
              {QUOTES.map((x, i) => (
                <button key={x[0]} className="lift" onClick={() => setQuote(i)} aria-pressed={quote === i} style={{ ...S('text-align:left;color:var(--cream);border-radius:22px;padding:22px 24px;flex:1'), border: `1.5px solid ${quote === i ? pal[4] : 'rgba(245,239,232,.2)'}`, background: quote === i ? '#1A1B24' : 'transparent' }}>
                  <span className="display" style={S('display:block;font-size:22px;font-weight:700')}>{x[0]}</span>
                  <span style={S('display:block;margin-top:6px;font-size:13px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;opacity:.7')}>{x[1]}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + FOOTER */}
        <section id="contact" className="pad" style={S('background:var(--sf);border:1px solid rgba(245,239,232,.08);border-radius:28px;padding:104px 56px 56px;overflow:hidden')}>
          <div className="blob" style={S('width:560px;height:560px;left:-160px;top:-200px;background:var(--r);opacity:.4;animation:rd-b1 18s ease-in-out infinite')} />
          <div className="blob" style={S('width:480px;height:480px;right:-140px;bottom:-160px;background:var(--o);opacity:.35;animation:rd-b2 21s ease-in-out infinite')} />
          <h2 className="rv display big" style={S('position:relative;margin:0;font-size:116px;line-height:1;font-weight:700;letter-spacing:-.03em;max-width:1200px')}>Let&apos;s build something <span className="shine">legendary</span> together</h2>
          <p className="rv" style={S('position:relative;margin:36px 0 0;font-size:21px;line-height:1.5;color:#d6cbbe;max-width:600px')}>Ready to take your business to the next level? Our team of architects is here to help you navigate the digital landscape.</p>
          <div style={S('position:relative;margin-top:56px;display:flex;flex-wrap:wrap;align-items:center;gap:20px;border-top:1px solid rgba(245,239,232,.25);padding-top:40px')}>
            <span className="display" style={S('font-size:52px;font-weight:700;text-transform:none')}>I need</span>
            <span className="display" style={S('font-size:52px;font-weight:700;background:linear-gradient(90deg,#FF4D3A,#F23D7A);color:#0B0B0F;border-radius:999px;padding:4px 36px;min-width:380px;text-align:center')}>{NEEDS[need]}</span>
            <button className="pill" onClick={() => setNeed((need + 1) % NEEDS.length)} style={S('background:transparent;color:var(--cream);border:1.5px solid rgba(245,239,232,.6);padding:16px 30px;font-size:16px')}>next</button>
          </div>
          <div style={S('position:relative;margin-top:40px;display:flex;gap:12px;flex-wrap:wrap')}>
            <a href="/contact" className="pill" style={S('background:var(--cream);color:var(--ink);padding:20px 40px;font-size:17px')}>Start Project</a>
            <a href="/services" className="pill" style={S('border:1.5px solid rgba(245,239,232,.6);padding:18.5px 40px;font-size:17px')}>Our Capabilities</a>
          </div>
          <footer style={S('position:relative;margin-top:96px;padding-top:28px;border-top:1px solid rgba(245,239,232,.25);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:24px;font-size:14px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--mut)')}>
            <img src="/klocrix-logo-white.png" alt="Klocrix" style={S('height:54px;width:auto')} />
            <a href="mailto:hello@klocrix.com">hello@klocrix.com</a>
            <a href="tel:+918146330346">+91 81463 30346</a>
            <span>Mohali, India</span>
            <span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
          </footer>
        </section>
      </div>
    </div>
  )
}
