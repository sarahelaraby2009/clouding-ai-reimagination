'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'About',    href: '/#about'    },
  { label: 'Team',     href: '/#team'     },
  { label: 'Academy',  href: '/academy'   },
  { label: 'Blog',     href: '/#blog'     },
  { label: 'Contact',  href: '/#contact'  },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020e20]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tight shrink-0"
        >
          clouding
          <span
            style={{
              background: 'linear-gradient(135deg, #00c8e0, #045089)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            .ai
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white uppercase tracking-wide transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #f96d64, #e85a51)',
            boxShadow: '0 0 18px rgba(249,109,100,0.3)',
          }}
        >
          Let&apos;s Talk
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#020e20]/95 backdrop-blur-md border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="block text-white/70 hover:text-white transition-colors text-base"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold bg-[#f96d64] text-white uppercase tracking-wide"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
