'use client'

import { motion } from 'framer-motion'
import type { ComponentBaseProps } from '@/types'

interface SectionWrapperProps extends ComponentBaseProps {
  id?: string
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  dark = false,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-24 px-6 ${dark ? 'bg-[#020e20]' : 'bg-[#071628]'} ${className ?? ''}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-white/55 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
