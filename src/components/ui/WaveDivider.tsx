/**
 * WaveDivider — multi-layer organic SVG wave transition between sections.
 *
 * Three stacked wave paths at different offsets/opacities give a deep,
 * parallax-like effect. The wrapper background = `topColor` so the waves
 * appear to "cut into" the section below.
 *
 * flip=false  →  waves crest toward the top  (normal — bottom fills bottomColor)
 * flip=true   →  SVG is rotated 180°         (mirror — bottom fills bottomColor)
 */

interface WaveDividerProps {
  /** Background of the section immediately ABOVE */
  topColor: string
  /** Background of the section immediately BELOW */
  bottomColor: string
  /** Flip the wave vertically for alternating direction. Default false. */
  flip?: boolean
  /** SVG height in px. Default 110. */
  height?: number
}

export default function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  height = 110,
}: WaveDividerProps) {
  /**
   * Three wave paths share the same horizontal rhythm but are phase-shifted.
   * All paths close along the bottom edge so they fill the bottomColor area.
   *
   * The viewBox is 1440 × height. preserveAspectRatio="none" lets the SVG
   * stretch to any screen width without distortion on the vertical axis.
   */
  const h = height

  // Layer 3 (back) — largest amplitude, lightest opacity
  const wave3 = `
    M0,${Math.round(h * 0.55)}
    C240,${Math.round(h * 0.1)} 480,${Math.round(h * 0.95)} 720,${Math.round(h * 0.45)}
    C960,${Math.round(h * -0.05)} 1200,${Math.round(h * 0.85)} 1440,${Math.round(h * 0.35)}
    L1440,${h} L0,${h} Z
  `

  // Layer 2 (mid) — medium amplitude
  const wave2 = `
    M0,${Math.round(h * 0.65)}
    C200,${Math.round(h * 0.25)} 440,${Math.round(h * 1.0)} 720,${Math.round(h * 0.55)}
    C1000,${Math.round(h * 0.1)} 1240,${Math.round(h * 0.9)} 1440,${Math.round(h * 0.45)}
    L1440,${h} L0,${h} Z
  `

  // Layer 1 (front) — smallest amplitude, highest opacity — defines the final edge
  const wave1 = `
    M0,${Math.round(h * 0.72)}
    C180,${Math.round(h * 0.38)} 400,${Math.round(h * 1.0)} 720,${Math.round(h * 0.62)}
    C1040,${Math.round(h * 0.24)} 1260,${Math.round(h * 0.92)} 1440,${Math.round(h * 0.55)}
    L1440,${h} L0,${h} Z
  `

  return (
    <div
      aria-hidden
      style={{
        display:    'block',
        lineHeight: 0,
        fontSize:   0,
        background: topColor,
        width:      '100%',
        height,
        // On flip we rotate 180° around the centre of the element
        transform:  flip ? 'rotate(180deg)' : undefined,
        // When flipped the semantic top/bottom swap — swap bg so no seam
        ...(flip ? { background: bottomColor } : {}),
      }}
    >
      <svg
        viewBox={`0 0 1440 ${h}`}
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <defs>
          {/* Subtle cyan shimmer on the leading wave edge */}
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#045089" stopOpacity="0.6" />
            <stop offset="30%"  stopColor="#00c8e0" stopOpacity="0.15" />
            <stop offset="60%"  stopColor="#0a1628" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#045089" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Layer 3 — back, brand blue tint */}
        <path d={wave3} fill="#045089"        opacity="0.18" />

        {/* Layer 2 — mid, deeper navy */}
        <path d={wave2} fill="#0a1628"        opacity="0.45" />

        {/* Layer 1 — front, solid bottom section color — no gap */}
        <path d={wave1} fill={flip ? topColor : bottomColor} opacity="1" />

        {/* Cyan shimmer trace on the very front wave edge */}
        <path d={wave1} fill="url(#waveGrad)" opacity="0.22" />
      </svg>
    </div>
  )
}
