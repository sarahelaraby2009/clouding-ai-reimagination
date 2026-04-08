/**
 * SectionDivider — angled SVG transition between two section backgrounds.
 *
 * Place between two <section> elements. The element's own background matches
 * `from` and the SVG polygon fills `to`, creating a seamless angled cut.
 *
 * flip=false  →  "/" angle (right edge rises)
 * flip=true   →  "\" angle (left edge rises)
 */

interface SectionDividerProps {
  /** Background color of the section ABOVE this divider */
  from: string
  /** Background color of the section BELOW this divider */
  to: string
  /** true = "\" angle, false = "/" angle (default) */
  flip?: boolean
  /** Height of the angled strip in px. Default 72. */
  height?: number
}

export default function SectionDivider({
  from,
  to,
  flip = false,
  height = 72,
}: SectionDividerProps) {
  /**
   * "/" (flip=false): "to" color fills bottom-right triangle.
   *   Vertices: bottom-left (0,h), top-right (1440,0), bottom-right (1440,h)
   *
   * "\" (flip=true): "to" color fills bottom-left triangle.
   *   Vertices: top-left (0,0), bottom-right (1440,h), bottom-left (0,h)
   */
  const points = flip
    ? `0,0 1440,${height} 0,${height}`
    : `0,${height} 1440,0 1440,${height}`

  return (
    <div
      aria-hidden
      style={{
        display:    'block',
        lineHeight: 0,
        fontSize:   0,
        background: from,
        height,
        width:      '100%',
      }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <polygon points={points} fill={to} />
      </svg>
    </div>
  )
}
