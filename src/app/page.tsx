import dynamic from 'next/dynamic'
import NavBar from '@/components/ui/NavBar'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionWrapper from '@/components/ui/SectionWrapper'
import TeamCard from '@/components/ui/TeamCard'
import CTABanner from '@/components/ui/CTABanner'
import Footer from '@/components/ui/Footer'

// Three.js must be client-only (no SSR)
const HeroSection = dynamic(
  () => import('@/components/three/HeroSection'),
  { ssr: false }
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

        {/* ── CTA ── */}
        <CTABanner />
      </main>

      <Footer />
    </>
  )
}
