/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, useTexture, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as THREE from 'three';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function DeviceScene({ progress }: any) {
  const group = useRef<THREE.Group>(null);

  // const texture = useTexture('/alrifatsabbir-1.png'); 
  const videoTexture = useVideoTexture('/video.mp4'); 

  useFrame(() => {
    if (!group.current) return;

    if (progress < 0.25) group.current.position.x = gsap.utils.interpolate(0, -2, progress * 4);
    else if (progress < 0.5) group.current.position.x = gsap.utils.interpolate(-2, 2, (progress - 0.25) * 4);
    else group.current.position.x = gsap.utils.interpolate(2, 0, (progress - 0.5) * 2);

    group.current.rotation.y = progress * Math.PI * 2;
    group.current.scale.setScalar(1 + progress * 0.5);
  });

  return (
    <group ref={group}>
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2.2, 1.3, 0.05]} />
        <meshStandardMaterial color="#111" roughness={0.4} metalness={0.7} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.1, 1.2, 0.02]} />
        <meshStandardMaterial color="#050505" roughness={0.2} metalness={0.9} />
      </mesh>

      <mesh position={[0, 0, 0.012]}>
        <planeGeometry args={[2.0, 1.1]} />
        <meshBasicMaterial map={videoTexture} toneMapped={false} />
      </mesh>

      <mesh position={[0, -0.8, -0.1]} rotation={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 0.4, 20]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
      </mesh>

      <mesh position={[0, -1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.8, 0.5, 0.02]} />
        <meshStandardMaterial color="#111" metalness={0.9} />
      </mesh>
    </group>
  );
}

export default function ScrollytellingHome() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => setScrollProgress(self.progress)
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gray-900">
      <div className="sticky top-0 h-screen w-full z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <ambientLight intensity={2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <DeviceScene progress={scrollProgress} />
          <Environment preset="night" />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} />
        </Canvas>
      </div>
      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-white text-8xl font-black">COMPUTER</h1>
        </section>
        <section className="h-screen flex items-center justify-start px-20">
          <div className="max-w-md text-white border-l-4 border-white pl-6">
            <h2 className="text-4xl font-bold">LAPTOP PHASE</h2>
            <p className="mt-4 text-zinc-400">Centered content mapping to the device screen.</p>
          </div>
        </section>
        <section className="h-screen flex items-center justify-end px-20">
          <div className="max-w-md text-white border-r-4 border-white pr-6 text-right">
            <h2 className="text-4xl font-bold">TABLET PHASE</h2>
            <p className="mt-4 text-zinc-400">Smooth transition across the X-axis.</p>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-6xl font-bold">PHONE PHASE</h2>
            <p className="mt-4 text-zinc-400">Final zoom into the mobile view.</p>
          </div>
        </section>
      </div>

      <div className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-black text-4xl">Other Animations Continue...</h2>
      </div>
    </div>
  );
}