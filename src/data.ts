// ── Portfolio content for Jay Pitroda ──────────────────────────────
// Single source of truth for all section data.

export const profile = {
  name: 'Jay Pitroda',
  fullName: 'Jay Laljibhai Pitroda',
  initials: 'JP',
  handle: 'jay',
  roles: [
    'generative-ai developer',
    'ui/ux designer & ai engineer',
    'full-stack web developer',
    'hackathon builder & team lead',
  ],
  location: 'Vadodara, Gujarat',
  email: 'pitrodajay6@gmail.com',
  phone: '+91 94096 62002',
  phoneHref: '+919409662002',
  resume: 'Jay_Pitroda_ATS_Resume.pdf',
  // Decorative, deterministic identity fingerprint (not a real key).
  fingerprint: 'SHA256:9f2c a4e1 7b08 d35f e6a2 11c9 4d70 8b6e',
  tagline:
    "Information Technology undergraduate who ships intelligent products end-to-end — generative-AI features, full-stack web, and the AI tooling that ties them together. From first idea to launch, I turn concepts into real, working AI products.",
}

export const stats = [
  { value: 10, suffix: '+', label: 'Projects shipped' },
  { value: 3000, suffix: '+', label: 'Event attendees led' },
  { value: 6, suffix: '', label: 'Months industry intern' },
]

export const about = {
  lead:
    "I'm Jay — an IT undergraduate and generative-AI developer who ships intelligent, AI-powered products end-to-end.",
  body:
    "Most of my work lives where design meets applied AI: MCP-powered Figma-to-code automation, AI chatbots, vernacular text-to-speech, and agentic workflow automation with n8n. I wire full-stack web and Supabase backends to real models, prototype fast in Figma, and turn raw ideas into working AI products — while leading teams through hackathons and large campus events from first idea to launch.",
  facts: [
    { k: 'based', v: 'Vadodara, IN' },
    { k: 'status', v: 'open to opportunities', highlight: true },
    { k: 'focus', v: 'gen ai · full-stack · ui/ux' },
    { k: 'edu', v: 'B.E. IT · SVIT (2022–26)' },
    { k: 'langs', v: 'English · Hindi · Gujarati' },
  ],
}

export type ExperienceItem = {
  date: string
  role: string
  org: string
  blurb: string
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    date: 'Jan – Jun 2025',
    role: 'UI/UX Designer & Generative AI Developer',
    org: '24x7 Moneyworks (BankBenchers) · Vadodara',
    blurb:
      'Led end-to-end UI/UX and backend for KisanSetu and the eKCC loan platform — Figma prototypes, Supabase, live multi-user bidding, OTP and email APIs. Built an MCP server for Figma-to-code and integrated Sarvam AI text-to-speech for vernacular Aadhaar authentication. Authored the BankBenchers brand guidelines.',
    tags: ['UI/UX', 'Supabase', 'Gen AI', 'MCP', 'Branding'],
  },
  {
    date: '2024 – 2025',
    role: 'Vice General Secretary — Student Central Committee',
    org: 'SVIT · Vasad',
    blurb:
      'Drove institution-level event planning and student engagement. Organized Malhar Annual Day 2025 and led Tune Carnival — a concert with Bollywood artist Mohit Chauhan attended by 3,000+ people — managing logistics, sponsors and crews.',
    tags: ['Leadership', 'Event Ops', 'Creative Direction'],
  },
  {
    date: '2024',
    role: 'Design Team Lead — Mecia Hacks 2.0',
    org: 'SVIT · Vasad',
    blurb:
      "Led all design and branding for SVIT's flagship hackathon — logo, posters, social creatives, brochures and merchandise — while mentoring a team of student designers in Figma and Canva.",
    tags: ['Visual Identity', 'Team Lead', 'Figma', 'Canva'],
  },
  {
    date: '2022 – 2026',
    role: 'B.E. Information Technology',
    org: 'SVIT · Vasad, Gujarat',
    blurb:
      'Bachelor of Engineering in Information Technology — full-stack web, DSA, cybersecurity fundamentals, embedded systems and generative AI.',
    tags: ['Education', 'Computing', 'IT'],
  },
]

export type ProjectStatus = 'secure' | 'shipped' | 'prototype' | 'awarded'

export type Project = {
  id: string
  name: string
  type: string
  blurb: string
  meta: string
  status: ProjectStatus
  secNote: string
  stack: string[]
  link?: string
  headingLink?: string
}

export const projects: Project[] = [
  {
    id: '0x01',
    name: 'KisanSetu',
    type: 'agri-tech marketplace',
    blurb:
      'Farmer-to-buyer marketplace with real-time bidding, escrow-backed payments, partial-lot purchase and an AI chatbot. Designed and wired the UI/UX plus the Supabase backend.',
    meta: 'case study',
    status: 'secure',
    secNote: 'escrow integrity · OTP verification',
    stack: ['React', 'Supabase', 'Figma'],
    link: 'https://kisansetu.online',
    headingLink: 'https://kisansetu.figma.site/',
  },
  {
    id: '0x02',
    name: 'eKCC — Kisan Credit Card',
    type: 'fintech loan platform',
    blurb:
      'Full loan-platform UI with OTP and joint-applicant journeys, a redesigned public site, and Sarvam AI text-to-speech for vernacular Aadhaar authentication.',
    meta: 'case study',
    status: 'secure',
    secNote: 'Aadhaar auth · OTP flows',
    stack: ['Figma', 'React', 'Sarvam AI'],
  },
  {
    id: '0x03',
    name: 'TerraWing',
    type: 'hybrid drone-rover',
    blurb:
      'Multi-terrain drone-rover robot. Led a team of 5 across hardware prototyping, embedded-systems programming and system integration. SSIP-GTU innovation project.',
    meta: 'SSIP-GTU',
    status: 'prototype',
    secNote: 'embedded systems · firmware',
    stack: ['Embedded', 'C', 'Hardware'],
  },
  {
    id: '0x04',
    name: 'TrashBid',
    type: 'smart waste auctioning',
    blurb:
      'Real-time bidding and smart vendor allocation for recyclable waste. Led the team to 2nd rank in the SIH ideathon round.',
    meta: '2nd · ideathon',
    status: 'awarded',
    secNote: 'allocation integrity · anti-fraud',
    stack: ['Web', 'Auctions', 'SIH'],
  },
  {
    id: '0x05',
    name: 'Invoice KAPS',
    type: 'invoice management system',
    blurb:
      'Invoicing platform for local businesses with permissioned CA access — something third-party apps never allowed. Granting a CA scoped entry into a business’s invoice creation eases the workload on both sides and carries the trust forward.',
    meta: 'live',
    status: 'shipped',
    secNote: 'permissioned CA access · scoped roles',
    stack: ['React', 'Vercel', 'Supabase'],
    link: 'https://invoice-kaps.vercel.app',
  },
]

export type Skill = { name: string; level: number }

export const skills: Skill[] = [
  { name: 'Figma · UI/UX', level: 95 },
  { name: 'HTML / CSS', level: 92 },
  { name: 'JavaScript', level: 86 },
  { name: 'Generative AI · MCP', level: 85 },
  { name: 'n8n · Automation', level: 82 },
  { name: 'Supabase · Backend', level: 80 },
  { name: 'Python', level: 78 },
  { name: 'React · Figma-to-Code', level: 74 },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
