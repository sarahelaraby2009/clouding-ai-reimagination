import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/ui/NavBar'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionWrapper from '@/components/ui/SectionWrapper'
import TeamCard from '@/components/ui/TeamCard'
import CTABanner from '@/components/ui/CTABanner'
import Footer from '@/components/ui/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen'
import WaveDivider from '@/components/ui/WaveDivider'

const DARK = '#020e20'
const LIGHT = '#071628'

// Three.js must be client-only (no SSR)
const HeroSection = dynamic(
  () => import('@/components/three/HeroSection'),
  { ssr: false, loading: () => <LoadingScreen minimal /> }
)

// ── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: '🤖',
    title: 'Agentforce',
    description:
      'AI-native accelerators built for the Salesforce ecosystem — mobile-ready flows, Arabic LLM support, visual rich experiences, and conversational search.',
    tags: ['AI Agents', 'Arabic LLM', 'Mobile-first'],
  },
  {
    icon: '☁️',
    title: 'Salesforce Clouds',
    description:
      'Specialising in Comms Cloud, Media Cloud, and Revenue Cloud. Deliver 360° visibility and connected customer journeys across every touchpoint.',
    tags: ['Comms Cloud', 'Media Cloud', 'Revenue Cloud'],
  },
  {
    icon: '🔗',
    title: 'MuleSoft Integration',
    description:
      'Connect systems, activate data, and automate intelligently. API-led connectivity with real-time sync across your entire enterprise landscape.',
    tags: ['API Mesh', 'Real-time Sync', 'Automation'],
  },
  {
    icon: '📊',
    title: 'Tableau',
    description:
      'Turn data into decisions. Interactive dashboards and AI-powered insights that give every stakeholder clarity on what matters most.',
    tags: ['Dashboards', 'AI Insights', 'Data Viz'],
  },
]

const TEAM = [
  {
    name: 'Mohamed Shatla',
    title: 'Chief Executive Officer',
    tenure: '20+ years of experience',
    description:
      'Two decades growing European enterprise presence, with deep expertise in digital transformation strategy and Salesforce ecosystem leadership.',
  },
  {
    name: 'Tarek Negm',
    title: 'Chief Technology Officer',
    tenure: '22 years · $200M+ transformations',
    description:
      'Global enterprise architect who has led $200M+ digital transformation programmes across telecoms, finance, and media verticals.',
  },
  {
    name: 'Waleed Ghalwash',
    title: 'Chief Product Officer',
    tenure: 'Serial entrepreneur',
    description:
      'Product visionary and serial founder specialising in AI-powered products, go-to-market strategy, and scaling tech startups in the MENA region.',
  },
]

const POSTS = [
  {
    category: 'AI & UX',
    date: 'Sep 26, 2025',
    title: 'Picture Superiority Effect: Why Visual-First AI Agents Convert Better',
    excerpt:
      'Research shows humans process images 60,000× faster than text. Discover how applying the Picture Superiority Effect in Agentforce builds AI agents that engage, persuade, and convert.',
    image: 'https://clouding.ai/wp-content/uploads/2025/09/PicSup-768x231.png',
    href: '/blog/picture-superiority-effect',
  },
  {
    category: 'Design Strategy',
    date: 'Sep 9, 2025',
    title: 'From Deterministic UX to Cognitive CX',
    excerpt:
      'The shift from rule-based interfaces to AI-driven cognitive experiences is redefining how enterprises think about customer engagement — and what it means to design for intent.',
    image: 'https://clouding.ai/wp-content/uploads/2025/09/UX-to-Cognitive-CX-768x347.png',
    href: '/blog/deterministic-ux-to-cognitive-cx',
  },
  {
    category: 'News',
    date: 'Mar 20, 2025',
    title: 'MerQ and CloudingAI Announce Strategic Merger to Lead Agentic AI in MENA',
    excerpt:
      'Two of the region\'s most forward-thinking technology firms join forces to create a unified powerhouse for Agentforce implementation and AI transformation across the Middle East.',
    image: 'https://clouding.ai/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-19-at-1.17.09-PM-1-768x346.jpeg',
    href: '/blog/merq-cloudingai-merger',
  },
]

// ── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#f96d64] focus:text-white focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>

      <NavBar />

      <main id="main-content">
        {/* ── Hero ── */}
        <HeroSection />

        {/* Hero(#020e20) → Services(#071628)  "/"  */}
        <WaveDivider topColor={DARK} bottomColor={LIGHT} flip={false} />

        {/* ── Services ── */}
        <SectionWrapper
          id="services"
          eyebrow="Our Practice Areas"
          title="What We Do"
          subtitle="Four integrated practices that cover the full Salesforce ecosystem — from AI agents to data intelligence."
          dark={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </SectionWrapper>

        {/* Services(#071628) → About(#020e20)  "\"  */}
        <WaveDivider topColor={LIGHT} bottomColor={DARK} flip={true} />

        {/* ── About ── */}
        <SectionWrapper
          id="about"
          dark
          eyebrow="Why Us"
          title="Why Clouding AI"
          subtitle="We are transformation partners — not implementers. Our work sits at the intersection of Salesforce expertise, AI capability, and genuine empathy for the humans we serve."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: '20+', label: 'Years combined Salesforce expertise' },
              { stat: '$200M+', label: 'Digital transformations delivered' },
              { stat: '3', label: 'MENA offices — Dubai, Riyadh, Cairo' },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="p-8 rounded-2xl glass-card"
              >
                <p
                  className="text-5xl font-bold mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #00c8e0 0%, #045089 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat}
                </p>
                <p className="text-sm text-white/50 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* About(#020e20) → Team(#071628)  "/"  */}
        <WaveDivider topColor={DARK} bottomColor={LIGHT} flip={false} />

        {/* ── Team ── */}
        <SectionWrapper
          id="team"
          dark={false}
          eyebrow="The Founders"
          title="Leadership"
          subtitle="Three founding partners with decades of enterprise experience and a shared belief in human-centered technology."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </SectionWrapper>

        {/* Team(#071628) → Insights(#020e20)  "\"  */}
        <WaveDivider topColor={LIGHT} bottomColor={DARK} flip={true} />

        {/* ── Insights ── */}
        <SectionWrapper
          id="blog"
          dark
          eyebrow="Latest Insights"
          title="Thinking Out Loud"
          subtitle="Perspectives on AI, Salesforce, and the future of customer experience from the Clouding AI team."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {POSTS.map((post, i) => (
              <Link
                key={post.title}
                href={post.href}
                className="group flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${i * 0.12}s`,
                  textDecoration: 'none',
                }}
              >
                {/* Thumbnail */}
                <div className="relative w-full h-44 overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay so card bg bleeds into image bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(4,14,32,0.7))',
                    }}
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(0,200,224,0.1)',
                        border:     '1px solid rgba(0,200,224,0.2)',
                        color:      '#00c8e0',
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[11px] text-white/35">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-white leading-snug mb-2 group-hover:text-[#00c8e0] transition-colors duration-300 flex-1">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-white/45 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <span
                    className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-300"
                    style={{ color: 'rgba(0,200,224,0.7)' }}
                  >
                    Read More
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                {/* Bottom cyan glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(0,200,224,0.25)' }}
                />
              </Link>
            ))}
          </div>
        </SectionWrapper>

        {/* Insights(#020e20) → CTABanner(#020e20): same bg, wave for texture */}
        <WaveDivider topColor={DARK} bottomColor={DARK} flip={false} />

        {/* ── CTA ── */}
        <CTABanner />
      </main>

      <Footer />
    </>
  )
}
