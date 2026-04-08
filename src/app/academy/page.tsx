import type { Metadata } from 'next'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import AcademyHero from '@/components/ui/AcademyHero'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionDivider from '@/components/ui/SectionDivider'

const DARK = '#020e20'
const LIGHT = '#071628'

export const metadata: Metadata = {
  title: 'Clouding AI Academy — Empowering the Next Generation',
  description:
    'Free world-class Salesforce, MuleSoft, Agentforce, and AI training for ambitious talent across the MENA region.',
}

// ── Data ─────────────────────────────────────────────────────────────────────

const OBJECTIVES = [
  {
    icon: '💡',
    title: 'Empower',
    description:
      'Build practical digital and AI skills in local talent, enabling them to thrive in the modern technology economy.',
  },
  {
    icon: '⚖️',
    title: 'Promote Equality',
    description:
      'Provide equal educational access regardless of background, ensuring every talented individual gets a fair opportunity.',
  },
  {
    icon: '🌱',
    title: 'Foster Innovation',
    description:
      'Encourage a culture of curiosity, experimentation, and continuous learning that drives real-world breakthroughs.',
  },
  {
    icon: '🔄',
    title: 'Drive Transformation',
    description:
      'Support digital transformation through hands-on, project-based learning that mirrors real enterprise challenges.',
  },
  {
    icon: '♻️',
    title: 'Build Sustainability',
    description:
      'Create a lasting talent pipeline for the Salesforce and AI ecosystem — graduates who grow into mentors.',
  },
  {
    icon: '🚀',
    title: 'Accelerate Talent',
    description:
      'Equip future innovators with the practical skills to make an immediate impact in their organisations.',
  },
]

const TRACKS = [
  {
    icon: '⚡',
    title: 'Salesforce',
    description:
      'CRM foundations, administration, development, and business process automation. From core platform skills to advanced customisation.',
    tags: ['CRM', 'Administration', 'Apex Dev', 'Automation'],
  },
  {
    icon: '🔗',
    title: 'MuleSoft',
    description:
      'Integration fundamentals, API-led connectivity, and enterprise data flows. Learn to connect any system, anywhere.',
    tags: ['Integration', 'API Design', 'Anypoint', 'Data Flows'],
  },
  {
    icon: '🤖',
    title: 'Agentforce + Data Cloud',
    description:
      'Harness Salesforce\'s agentic AI framework and Data Cloud platform to build intelligent, autonomous customer experiences.',
    tags: ['AI Agents', 'Data Cloud', 'Agentforce', 'Autonomous AI'],
  },
  {
    icon: '🧠',
    title: 'AI Foundations',
    description:
      'Core AI concepts: LLMs, fine-tuning, RAG, prompt and context engineering. Built on Python and Go with real-world projects.',
    tags: ['LLMs', 'RAG', 'Prompt Engineering', 'Python', 'Go'],
  },
]

const PARTNERS = [
  'Qatar Airways',
  'ALDAR',
  'Emaar',
  'E&',
  'Raya',
  'Manni',
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AcademyPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        style={{ background: '#00c8e0', color: '#020e20' }}
      >
        Skip to main content
      </a>

      <NavBar />

      <main id="main-content">

        {/* ── Hero ── */}
        <AcademyHero />

        {/* Hero(#020e20) → Mission(#020e20): same bg, no divider needed */}

        {/* ── Mission ── */}
        <SectionWrapper
          id="mission"
          dark
          eyebrow="Our Mission"
          title="Knowledge is Meant to be Shared"
          subtitle="At Clouding AI, we believe that unlocking human potential is the greatest return on investment. The Academy was built to give back — offering world-class training, mentorship, and career guidance entirely free of charge."
        >
          <div className="max-w-3xl mx-auto">
            {/* Quote callout */}
            <div
              className="relative rounded-2xl p-8 text-center glass-card"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px h-px w-24 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #00c8e0, transparent)' }}
              />
              <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed italic">
                &ldquo;We combine hands-on practice, mentorship, and career guidance,
                ensuring participants are industry-ready upon completion.&rdquo;
              </p>
              <p className="mt-4 text-sm text-white/35 uppercase tracking-widest">
                — Clouding AI Academy
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Mission(#020e20) → Objectives(#071628)  "/"  */}
        <SectionDivider from={DARK} to={LIGHT} flip={false} />

        {/* ── Objectives ── */}
        <SectionWrapper
          id="objectives"
          dark={false}
          eyebrow="What We Stand For"
          title="Six Core Objectives"
          subtitle="Every decision we make in the Academy traces back to these six commitments."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OBJECTIVES.map((obj) => (
              <div
                key={obj.title}
                className="group flex flex-col gap-3 p-6 rounded-2xl glass-card transition-all duration-300 hover:border-[rgba(0,200,224,0.3)]"
              >
                <span className="text-3xl select-none" aria-hidden>{obj.icon}</span>
                <h3 className="text-base font-semibold text-white group-hover:text-[#00c8e0] transition-colors duration-300">
                  {obj.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{obj.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Objectives(#071628) → Tracks(#020e20)  "\"  */}
        <SectionDivider from={LIGHT} to={DARK} flip={true} />

        {/* ── Training Tracks ── */}
        <SectionWrapper
          id="tracks"
          dark
          eyebrow="Curriculum"
          title="Four Training Tracks"
          subtitle="Choose one or combine them. Every track is designed to take you from foundational concepts to industry-ready confidence."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TRACKS.map((track) => (
              <ServiceCard key={track.title} {...track} />
            ))}
          </div>
        </SectionWrapper>

        {/* Tracks(#020e20) → Enroll(#071628)  "/"  */}
        <SectionDivider from={DARK} to={LIGHT} flip={false} />

        {/* ── Enrollment Timeline ── */}
        <SectionWrapper
          id="enroll"
          dark={false}
          eyebrow="Next Cohort"
          title="Join the Next Round"
          subtitle="Applications are competitive. Register your interest early to secure your place."
        >
          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {[
                { label: 'Applications Open', date: 'August 2026', icon: '📋' },
                { label: 'Programme Start', date: 'September 2026', icon: '🎓' },
                { label: 'Duration', date: '12 Weeks Intensive', icon: '⏱' },
              ].map(({ label, date, icon }) => (
                <div
                  key={label}
                  className="text-center p-6 rounded-2xl glass-card"
                >
                  <div className="text-3xl mb-3 select-none" aria-hidden>{icon}</div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</p>
                  <p
                    className="text-xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #00c8e0, #045089)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {date}
                  </p>
                </div>
              ))}
            </div>

            {/* Registration CTA */}
            <div
              className="relative rounded-2xl p-8 md:p-10 text-center glass-card overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,200,224,0.08) 0%, transparent 65%)',
                }}
              />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px h-px w-32 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #00c8e0, transparent)' }}
              />
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Apply?</h3>
              <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
                Spaces are limited. Send us an email with your background and which track
                interests you most — we&apos;ll be in touch when applications open.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:academy@clouding.ai?subject=Academy Interest — Next Cohort"
                  className="px-7 py-3.5 rounded-full font-semibold text-sm text-white uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(135deg, #00c8e0, #045089)',
                    boxShadow:  '0 0 24px rgba(0,200,224,0.3)',
                  }}
                >
                  academy@clouding.ai
                </a>
                <a
                  href="https://www.linkedin.com/company/clouding-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full font-semibold text-sm text-white uppercase tracking-wider"
                  style={{
                    border:     '1px solid rgba(0,200,224,0.3)',
                    background: 'rgba(0,200,224,0.06)',
                  }}
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Enroll(#071628) → Partners(#020e20)  "\"  */}
        <SectionDivider from={LIGHT} to={DARK} flip={true} />

        {/* ── Success Partners ── */}
        <SectionWrapper
          id="partners"
          dark
          eyebrow="Our Graduates Work At"
          title="Success Partners"
          subtitle="Our alumni and training partners span the region's most respected enterprises."
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 rounded-xl text-sm font-semibold tracking-wide glass-card"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {partner}
              </div>
            ))}
          </div>
        </SectionWrapper>

      </main>

      <Footer />
    </>
  )
}
