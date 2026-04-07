'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// ── Pulsing concentric rings ───────────────────────────────────────────────

function PulsingRings() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 mx-auto mb-12">
      {/* Rings */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width:  72 + i * 44,
            height: 72 + i * 44,
            border: `1px solid rgba(0,200,224,${0.5 - i * 0.1})`,
          }}
          animate={{
            scale:   [1, 1.08 + i * 0.02, 1],
            opacity: [0.6 - i * 0.1, 0.15, 0.6 - i * 0.1],
          }}
          transition={{
            duration: 3.2,
            delay:    i * 0.75,
            repeat:   Infinity,
            ease:     'easeInOut',
          }}
        />
      ))}

      {/* Centre glyph */}
      <motion.div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold select-none"
        style={{
          background:  'linear-gradient(135deg, #00c8e0 0%, #045089 100%)',
          boxShadow:   '0 0 40px rgba(0,200,224,0.55), 0 0 80px rgba(0,200,224,0.2)',
        }}
        animate={{ boxShadow: [
          '0 0 40px rgba(0,200,224,0.55), 0 0 80px rgba(0,200,224,0.2)',
          '0 0 60px rgba(0,200,224,0.75), 0 0 100px rgba(0,200,224,0.3)',
          '0 0 40px rgba(0,200,224,0.55), 0 0 80px rgba(0,200,224,0.2)',
        ]}}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      >
        ✦
      </motion.div>
    </div>
  )
}

// ── Stagger variants ───────────────────────────────────────────────────────

const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

// ── Core values pills ──────────────────────────────────────────────────────

const VALUES = ['Knowledge', 'Equality', 'Innovation', 'Trust', 'Outstanding Quality']

// ── Component ──────────────────────────────────────────────────────────────

export default function AcademyHero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden text-center px-6 pt-24 pb-16"
      style={{
        background:
          'radial-gradient(ellipse 90% 70% at 50% 40%, #0a1628 0%, #020e20 65%)',
      }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,200,224,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,224,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Purple-blue gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(124,58,237,0.07) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(4,80,137,0.10) 0%, transparent 55%)',
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #020e20)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Pulsing rings visual */}
          <motion.div variants={item}>
            <PulsingRings />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.28em] mb-5"
            style={{ color: '#00c8e0' }}
          >
            Clouding AI · Academy
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6 text-balance"
          >
            Empowering Talent.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00c8e0 0%, #045089 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Enabling Growth.
            </span>
            {' '}Giving Back.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-white/55 max-w-xl mx-auto leading-relaxed mb-10 text-balance"
          >
            We transform ambitious young talents into tomorrow&apos;s digital and AI
            professionals through world-class training, mentorship, and real-world
            projects — entirely free of charge.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mb-14">
            <a
              href="#tracks"
              className="px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-white"
              style={{
                background:  'linear-gradient(135deg, #00c8e0, #045089)',
                boxShadow:   '0 0 24px rgba(0,200,224,0.35)',
              }}
            >
              Explore Tracks
            </a>
            <a
              href="#enroll"
              className="px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-white"
              style={{
                border:     '1px solid rgba(0,200,224,0.3)',
                background: 'rgba(0,200,224,0.06)',
              }}
            >
              Register Interest
            </a>
          </motion.div>

          {/* Core values pills */}
          <motion.div variants={item} className="flex flex-wrap gap-2 justify-center">
            {VALUES.map((v) => (
              <span
                key={v}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(0,200,224,0.08)',
                  border:     '1px solid rgba(0,200,224,0.18)',
                  color:      'rgba(0,200,224,0.8)',
                }}
              >
                {v}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
