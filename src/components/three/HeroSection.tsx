'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import type { Points, Mesh } from 'three'

// ── Particle sphere using Fibonacci lattice distribution ──────────────────

function ParticleSphere({ count = 2400 }: { count?: number }) {
  const ref = useRef<Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    const goldenAngle = Math.PI * (1 + Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      const theta = goldenAngle * i
      const r = 1.85
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.rotation.y = t * 0.1
    ref.current.rotation.x = t * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00c8e0"
        size={0.022}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  )
}

// ── Faint wireframe mesh — layered behind particles ───────────────────────

function WireframeSphere() {
  const ref = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.rotation.y = t * 0.07
    ref.current.rotation.z = t * 0.03
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.86, 28, 28]} />
      <meshBasicMaterial
        color="#00c8e0"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  )
}

// ── Inner glow core ───────────────────────────────────────────────────────

function GlowCore() {
  const ref = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const s = 1 + Math.sin(clock.elapsedTime * 0.8) * 0.04
    ref.current.scale.setScalar(s)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.9, 32, 32]} />
      <meshBasicMaterial color="#045089" transparent opacity={0.18} />
    </mesh>
  )
}

// ── Scene ─────────────────────────────────────────────────────────────────

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 3]}  intensity={3}   color="#00c8e0" />
      <pointLight position={[3, 2, 1]}  intensity={1.5} color="#045089" />
      <pointLight position={[-3, -2, -1]} intensity={0.8} color="#7c3aed" />
      <GlowCore />
      <WireframeSphere />
      <ParticleSphere />
    </>
  )
}

// ── Stagger variants ──────────────────────────────────────────────────────

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// ── Component ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 80% at 30% 50%, #0a1628 0%, #020e20 65%)',
      }}
    >
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,200,224,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,224,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Purple-blue gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 60% at 10% 20%, rgba(124,58,237,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 85% 70%, rgba(4,80,137,0.12) 0%, transparent 55%)',
        }}
      />

      {/* Three.js canvas — right half */}
      <div
        className="absolute top-0 right-0 h-full pointer-events-none"
        style={{ width: 'clamp(320px, 55%, 780px)' }}
      >
        {/* Cyan ambient glow behind sphere */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,200,224,0.10) 0%, transparent 65%)',
          }}
        />
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 48 }}
          dpr={[1, 1.5]}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Left-side vignette so text is clean */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, #020e20 0%, #020e2080 35%, transparent 65%)',
        }}
      />

      {/* Hero text — left column */}
      <div className="relative z-10 min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl lg:max-w-[520px] xl:max-w-xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={item}
              className="text-xs font-semibold uppercase tracking-[0.28em] mb-6"
              style={{ color: '#00c8e0' }}
            >
              Salesforce · AI · Empathy
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={item}
              className="text-6xl md:text-7xl xl:text-8xl font-bold text-white leading-[1.04] tracking-tight mb-6"
            >
              Intent to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00c8e0 0%, #045089 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Impact
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="text-base md:text-lg text-white/55 leading-relaxed mb-10 text-balance"
            >
              Intelligent Transformation, Human-Centered Impact. Re-imagine customer
              engagement with Salesforce solutions powered by AI and guided by
              empathy.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-white transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #f96d64, #e85a51)',
                  boxShadow: '0 0 24px rgba(249,109,100,0.35)',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    '0 0 36px rgba(249,109,100,0.55)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    '0 0 24px rgba(249,109,100,0.35)')
                }
              >
                Let's Talk
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-white transition-all duration-200"
                style={{
                  border: '1px solid rgba(0,200,224,0.3)',
                  background: 'rgba(0,200,224,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,200,224,0.6)'
                  e.currentTarget.style.background = 'rgba(0,200,224,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,200,224,0.3)'
                  e.currentTarget.style.background = 'rgba(0,200,224,0.06)'
                }}
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={item}
              className="mt-10 text-xs text-white/25 uppercase tracking-widest"
            >
              Trusted across Dubai · Riyadh · Cairo
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden
      >
        <motion.div
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border: '1px solid rgba(0,200,224,0.25)' }}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: 'rgba(0,200,224,0.4)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
