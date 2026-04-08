'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stripVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function ClientLogosStrip() {
  return (
    <section
      aria-label="Trusted by leading organizations"
      style={{ background: '#010b18' }}
    >
      {/* Cyan gradient separator line */}
      <div
        aria-hidden
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,200,224,0.18) 20%, rgba(0,200,224,0.18) 80%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        {/* Label */}
        <motion.p
          className="text-center font-semibold uppercase mb-8"
          style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.22)',
          }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Trusted by Leading Organizations
        </motion.p>

        {/* Logos sprite */}
        <motion.div
          className="flex justify-center"
          variants={stripVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos.png"
            alt="Trusted by Etisalat (e&), McKinsey & Company, SRMG, Mannai Corporation, and Qatar Airways"
            draggable={false}
            style={{
              width: '100%',
              maxWidth: '900px',
              height: 'auto',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
