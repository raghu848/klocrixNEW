// Stock photos from Unsplash (free licence, served through next/image).
// Keep them here so they can be swapped for real Klocrix photos in one place.
const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=1600`

export const IMAGES = {
  // Delivery process
  discovery: { src: unsplash('1532622785990-d2c36a76f5a6'), alt: 'Two people mapping out ideas on a whiteboard' },
  design: { src: unsplash('1522542550221-31fd19575a2d'), alt: 'Hand-drawn wireframe sketches of website layouts' },
  engineering: { src: unsplash('1607799279861-4dd421887fb3'), alt: 'Laptop screen showing colourful source code' },
  launch: { src: unsplash('1758691737584-a8f17fb34475'), alt: 'Team celebrating a successful launch in the office' },
  cloud: { src: unsplash('1558494949-ef010cbdcc31'), alt: 'Network cables in a server rack' },

  // Training
  studentsLaptop: { src: unsplash('1531545514256-b1400bc00f31'), alt: 'Four students working together around a laptop' },
  mentorCode: { src: unsplash('1587691592099-24045742c181'), alt: 'Mentor pointing at code projected on a screen' },
  studentsGroup: { src: unsplash('1758270705290-62b6294dd044'), alt: 'Group of students gathered around a laptop' },
  mentorReview: { src: unsplash('1664382953647-5c6c76dd63b9'), alt: 'Mentor reviewing work with a student on a laptop' },
  pythonCode: { src: unsplash('1515879218367-8466d910aaa4'), alt: 'Computer screen full of Python code' },
  reactCode: { src: unsplash('1619410283995-43d9134e7656'), alt: 'Code editor displaying React source code' },
  analytics: { src: unsplash('1551288049-bebda4e38f71'), alt: 'Performance analytics graphs on a laptop screen' },
  certificate: { src: unsplash('1658235081033-ccd89cdfe77a'), alt: 'Graduate in cap and gown holding a certificate' },
  handshake: { src: unsplash('1521791136064-7986c2920216'), alt: 'Two people shaking hands after a job interview' },
}

// Real Klocrix team photos in /public
export const TEAM_PHOTOS = [
  { src: '/case-studies/team-hero.jpeg', alt: 'The Klocrix team celebrating together in the Mohali office', caption: 'Celebrating milestones' },
  { src: '/case-studies/klocrix-team-2.jpeg', alt: 'Klocrix engineers working at their desks', caption: 'Heads-down in the studio' },
  { src: '/case-studies/klocx-crop.jpg', alt: 'The Klocrix team on the rooftop at sunset in festive clothes', caption: 'Festive evenings' },
  { src: '/case-studies/klocrix-collaboration.jpeg', alt: 'Klocrix team members collaborating', caption: 'Building together' },
  { src: '/case-studies/klocrix-team-1.jpeg', alt: 'Klocrix team at work', caption: 'Everyday craft' },
  { src: '/case-studies/klocrix-team-3.jpeg', alt: 'Klocrix team members in the office', caption: 'One team' },
]
