'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import type { Mesh } from 'three'

function FloatingSphere() {
  const ref = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.rotation.x = t * 0.15
    ref.current.rotation.y = t * 0.22
    ref.current.position.y = Math.sin(t * 0.6) * 0.08
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <MeshDistortMaterial
        color="#045089"
        distort={0.35}
        speed={1.8}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  )
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#020e20' }}
    >
      {/* Skip link target */}
      <div id="main-content" />

      {/* Three.js canvas */}
      <div className="canvas-container absolute inset-0">
        <Canvas camera={{ position: [0, 0, 4], fov: 55 }} dpr={[1, 2]}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#045089" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#f96d64" />
          <pointLight position={[0, 5, -5]} intensity={0.6} color="#00ffff" />
          <FloatingSphere />
        </Canvas>
      </div>

      {/* Radial vignette so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, #020e20 80%)',
        }}
      />

      {/* Hero copy */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f96d64] mb-6"
        >
          Salesforce · AI · Empathy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight text-balance"
        >
          Intent to{' '}
          <span style={{ color: '#045089' }}>Impact</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
        >
          Intelligent Transformation, Human-Centered Impact. Re-imagine customer
          engagement with Salesforce solutions powered by AI and guided by empathy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold bg-[#f96d64] text-white hover:bg-[#e85a51] transition-colors text-sm uppercase tracking-wider"
          >
            Let's Talk
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full font-semibold border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-colors text-sm uppercase tracking-wider"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="w-1 h-2 bg-white/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
