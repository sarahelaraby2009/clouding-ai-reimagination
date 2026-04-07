'use client'

import { motion } from 'framer-motion'
import type { ComponentBaseProps } from '@/types'

interface ServiceCardProps extends ComponentBaseProps {
  title: string
  description: string
  icon: string
  tags?: string[]
}

export default function ServiceCard({
  title,
  description,
  icon,
  tags,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`group relative flex flex-col p-6 rounded-2xl cursor-default overflow-hidden glass-card ${className ?? ''}`}
    >
      {/* Gradient shimmer layer — visible on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,200,224,0.07) 0%, rgba(4,80,137,0.05) 50%, rgba(124,58,237,0.04) 100%)',
          boxShadow:
            'inset 0 0 0 1px rgba(0,200,224,0.28), 0 0 40px rgba(0,200,224,0.10)',
        }}
      />

      {/* Top edge cyan line — animates in on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(0,200,224,0.7), transparent)',
        }}
      />

      {/* Icon */}
      <div className="text-4xl mb-5 select-none" aria-hidden>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#00c8e0] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white/50 leading-relaxed flex-1">{description}</p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-full"
              style={{
                background: 'rgba(0,200,224,0.08)',
                border: '1px solid rgba(0,200,224,0.18)',
                color: 'rgba(0,200,224,0.8)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
