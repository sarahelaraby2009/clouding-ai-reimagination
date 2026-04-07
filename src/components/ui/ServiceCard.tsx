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
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col p-6 rounded-2xl border border-white/10 bg-[#071628] hover:border-[#045089]/60 transition-colors duration-300 cursor-default ${className ?? ''}`}
    >
      {/* Icon */}
      <div className="text-4xl mb-5 select-none" aria-hidden>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-white/55 leading-relaxed flex-1">{description}</p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full bg-[#044070]/40 text-[#73a1cd] border border-[#044070]/40"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Hover ring overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-[#045089]/40" />
    </motion.div>
  )
}
