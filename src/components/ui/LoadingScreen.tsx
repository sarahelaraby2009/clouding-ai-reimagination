/**
 * Full-screen loading screen — used by Next.js loading.tsx files
 * and as the dynamic-import fallback for the Three.js hero.
 * Pure CSS animations, no client-side dependencies needed.
 */
export default function LoadingScreen({ minimal = false }: { minimal?: boolean }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        position:   minimal ? 'relative' : 'fixed',
        inset:      0,
        minHeight:  minimal ? '100vh' : undefined,
        background: '#020e20',
        zIndex:     minimal ? undefined : 9990,
      }}
    >
      {/* Grid lines — same as hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,200,224,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,224,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative flex flex-col items-center gap-6">
        {/* Spinner rings */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer ring — spins */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border:          '2px solid transparent',
              borderTopColor:  '#00c8e0',
              borderRightColor:'rgba(0,200,224,0.25)',
              animation:       'spin-ring 0.9s linear infinite',
            }}
          />
          {/* Inner ring — counter-spins, slower */}
          <div
            className="absolute inset-2 rounded-full"
            style={{
              border:           '1px solid transparent',
              borderBottomColor:'rgba(0,200,224,0.5)',
              animation:        'spin-ring 1.6s linear infinite reverse',
            }}
          />
          {/* Centre glow dot */}
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: '#00c8e0',
              boxShadow:  '0 0 12px rgba(0,200,224,0.9)',
              animation:  'pulse-fade 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Logo wordmark */}
        <p
          className="text-sm font-bold tracking-wider"
          style={{
            background:              'linear-gradient(135deg, #00c8e0, #045089)',
            WebkitBackgroundClip:    'text',
            WebkitTextFillColor:     'transparent',
            backgroundClip:          'text',
            animation:               'pulse-fade 2.2s ease-in-out infinite',
            animationDelay:          '0.3s',
          }}
        >
          clouding.ai
        </p>
      </div>
    </div>
  )
}
