"use client"
import { useRef, useLayoutEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, useScroll } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import * as THREE from "three"

gsap.registerPlugin(ScrollTrigger)

function Scene() {
  const boxRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for 3D scroll animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      tl.to(boxRef.current.position, { x: 2, y: 1, z: -2 }, 0)
        .to(boxRef.current.rotation, { y: Math.PI * 2 }, 0)
        .to(groupRef.current.position, { z: 5 }, 0.5)
    })
    return () => ctx.revert()
  }, [])

  return (
    <group ref={groupRef}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={boxRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      </Float>
    </group>
  )
}

export default function Experience() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas eventSource={typeof document !== 'undefined' ? document.getElementById('root')! : undefined}>
        <Scene />
      </Canvas>
    </div>
  )
}