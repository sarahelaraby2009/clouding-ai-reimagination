'use client'

import { motion } from 'framer-motion'
import type { ComponentBaseProps } from '@/types'

interface SectionWrapperProps extends ComponentBaseProps {
  id?: string
  title?: string
  subtitle?: string
  dark?: boolean
  eyebrow?: string
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  eyebrow,
  dark = false,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-24 px-6 overflow-hidden ${dark ? 'bg-[#020e20]' : 'bg-[#071628]'} ${className ?? ''}`}
    >
      {/* Subtle grid overlay on dark sections */}
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,200,224,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,224,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      )}

      <div className="relative max-w-7xl mx-auto">
        {(eyebrow || title || subtitle) && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow && (
              <p
                className="text-xs font-semibold uppercase tracking-[0.26em] mb-4"
                style={{ color: '#00c8e0' }}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
                {title}
              </h2>
            )}
            {/* Cyan underline accent */}
            <div
              className="mx-auto mb-5 rounded-full"
              style={{
                width: 48,
                height: 2,
                background: 'linear-gradient(90deg, transparent, #00c8e0, transparent)',
              }}
            />
            {subtitle && (
              <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto text-balance leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Children container with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

// Export fadeUp variant so child grids can use it for stagger
export { fadeUp }
