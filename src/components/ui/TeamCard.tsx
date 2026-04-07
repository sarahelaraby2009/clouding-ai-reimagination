import type { ComponentBaseProps } from '@/types'

interface TeamCardProps extends ComponentBaseProps {
  name: string
  title: string
  tenure: string
  description: string
}

export default function TeamCard({
  name,
  title,
  tenure,
  description,
  className,
}: TeamCardProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className={`flex flex-col p-6 rounded-2xl border border-white/10 bg-[#0d2040] ${className ?? ''}`}
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
          style={{ background: 'linear-gradient(135deg, #045089, #266eb2)' }}
          aria-hidden
        >
          {initials}
        </div>
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
    </div>
  )
}
