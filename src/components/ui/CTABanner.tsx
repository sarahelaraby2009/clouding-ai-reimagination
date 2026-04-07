'use client'

import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: '#020e20' }}
    >
      {/* Ambient glow behind */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(4,80,137,0.35) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f96d64] mb-5"
        >
          Ready to Transform?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Let&apos;s Talk
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Partner with the leading Salesforce + AI transformation team across the
          MENA region — UAE, KSA, and Egypt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:info@clouding.ai"
            className="px-8 py-4 rounded-full font-semibold bg-[#f96d64] text-white hover:bg-[#e85a51] transition-colors text-base"
          >
            info@clouding.ai
          </a>
          <a
            href="tel:+97152984780"
            className="px-8 py-4 rounded-full font-semibold border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-colors text-base"
          >
            +971 52 984 8780
          </a>
        </motion.div>

        {/* Office locations */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-xs text-white/25 uppercase tracking-widest"
        >
          Dubai · Riyadh · Cairo
        </motion.p>
      </div>
    </section>
  )
}
