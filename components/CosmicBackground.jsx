'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

function ShootingStar({ position, speed = 1 }) {
  const meshRef = useRef()
  const direction = useMemo(() => new THREE.Vector3(
    Math.random() - 0.5,
    Math.random() - 0.5,
    Math.random() - 0.5
  ).normalize(), [])

  const startTime = useMemo(() => Math.random() * 10, [])

  useFrame((state) => {
    if (meshRef.current) {
      try {
        const time = state.clock.elapsedTime + startTime
        const cycle = (time * speed) % 10

        if (cycle < 3) {
          const progress = cycle / 3
          meshRef.current.position.copy(position).add(
            direction.clone().multiplyScalar(progress * 20)
          )
          if (meshRef.current.material) {
            meshRef.current.material.opacity = Math.sin(progress * Math.PI) * 0.8
          }
        } else {
          if (meshRef.current.material) {
            meshRef.current.material.opacity = 0
          }
        }
      } catch (error) {
        console.warn('ShootingStar animation error:', error)
      }
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.001, 0.001, 0.2, 3]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0}
        emissive="#ffffff"
        emissiveIntensity={2}
      />
    </mesh>
  )
}

function AnimatedStars() {
  const starsRef = useRef()

  useFrame(() => {
    if (starsRef.current) {
      try {
        starsRef.current.rotation.x += 0.0001
        starsRef.current.rotation.y += 0.0002
      } catch (error) {
        console.warn('Stars animation error:', error)
      }
    }
  })

  return (
    <group ref={starsRef}>
      <Stars
        radius={300}
        depth={60}
        count={8000}
        factor={4}
        saturation={0.8}
        fade
        speed={0.5}
      />
    </group>
  )
}

function CosmicScene() {
  const shootingStars = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      ],
      speed: 0.5 + Math.random() * 1.5
    }))
    , [])

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />

      <AnimatedStars />

      {shootingStars.map((star) => (
        <ShootingStar
          key={star.id}
          position={star.position}
          speed={star.speed}
        />
      ))}
    </>
  )
}

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <CosmicScene />
        </Suspense>
      </Canvas>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 pointer-events-none" />
    </div>
  )
}