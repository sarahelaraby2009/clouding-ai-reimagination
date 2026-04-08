import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from '@/data/blog'

// ── Static params for all known slugs ────────────────────────────────────────

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

// ── Dynamic metadata ──────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} — Clouding AI`,
    description: post.excerpt,
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(params.slug)

  return (
    <>
      <NavBar />

      <main
        style={{ background: '#020e20', minHeight: '100vh' }}
      >
        {/* ── Hero ── */}
        <section
          className="relative pt-32 pb-16 px-6 overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, #0a1628 0%, #020e20 65%)',
          }}
        >
          {/* Grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,200,224,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,224,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#00c8e0] transition-colors uppercase tracking-widest mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Insights
            </Link>

            {/* Category + date */}
            <div className="flex items-center gap-3 mb-5">
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
              <span className="text-xs text-white/35">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8 text-balance">
              {post.title}
            </h1>

            {/* Featured image */}
            <div className="relative w-full rounded-2xl overflow-hidden mb-0" style={{ aspectRatio: '768/320' }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, #020e20)' }}
              />
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section className="px-6 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Excerpt lead */}
            <p
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 border-l-2 pl-5"
              style={{ borderColor: '#00c8e0' }}
            >
              {post.excerpt}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-6">
              {post.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-base text-white/60 leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div
              className="my-14 h-px w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0,200,224,0.25), transparent)',
              }}
            />

            {/* Author line */}
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: 'linear-gradient(135deg, #045089, #266eb2)' }}
                aria-hidden
              >
                CA
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Clouding AI</p>
                <p className="text-xs text-white/35">{post.date}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section className="px-6 pb-20" style={{ background: '#071628' }}>
            <div className="max-w-3xl mx-auto pt-16">
              <p
                className="text-xs font-semibold uppercase tracking-[0.26em] mb-2"
                style={{ color: '#00c8e0' }}
              >
                Continue Reading
              </p>
              <h2 className="text-2xl font-bold text-white mb-8">Related Insights</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-1"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="relative w-full h-36 overflow-hidden shrink-0">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                          style={{
                            background: 'rgba(0,200,224,0.1)',
                            border:     '1px solid rgba(0,200,224,0.15)',
                            color:      '#00c8e0',
                          }}
                        >
                          {rel.category}
                        </span>
                        <span className="text-[11px] text-white/30">{rel.date}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-[#00c8e0] transition-colors duration-300">
                        {rel.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
