'use client'

import { useState } from 'react'
import type { ComponentBaseProps } from '@/types'

interface TeamCardProps extends ComponentBaseProps {
  name: string
  title: string
  tenure: string
  description: string
  photoUrl?: string
  linkedinUrl?: string
}

export default function TeamCard({
  name,
  title,
  tenure,
  description,
  photoUrl,
  linkedinUrl,
  className,
}: TeamCardProps) {
  const [photoFailed, setPhotoFailed] = useState(false)

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const cardClass = `flex flex-col p-6 rounded-2xl border bg-[#0d2040]
    transition-all duration-200
    border-white/10 hover:border-white/25 hover:scale-[1.02]
    ${className ?? ''}`

  const avatar =
    photoUrl && !photoFailed ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photoUrl}
        alt={name}
        width={56}
        height={56}
        onError={() => setPhotoFailed(true)}
        className="shrink-0 rounded-full object-cover"
        style={{ width: 56, height: 56 }}
        draggable={false}
      />
    ) : (
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
        style={{ background: 'linear-gradient(135deg, #045089, #266eb2)' }}
        aria-hidden
      >
        {initials}
      </div>
    )

  const inner = (
    <>
      {/* Avatar + name */}
      <div className="flex items-center gap-4 mb-5">
        {avatar}
        <div>
          <p className="font-semibold text-white leading-tight">{name}</p>
          <p className="text-sm text-[#f96d64] font-medium mt-0.5">{title}</p>
        </div>
      </div>

      {/* Tenure badge */}
      <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.18em] mb-3">
        {tenure}
      </p>

      {/* Bio */}
      <p className="text-sm text-white/55 leading-relaxed flex-1">{description}</p>
    </>
  )

  if (linkedinUrl) {
    return (
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
        aria-label={`${name} — LinkedIn profile`}
      >
        {inner}
      </a>
    )
  }

  return <div className={cardClass}>{inner}</div>
}
