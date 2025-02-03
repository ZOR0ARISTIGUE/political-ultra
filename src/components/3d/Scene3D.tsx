'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'

export function Scene3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#4c1d95" />
          </mesh>
          <OrbitControls />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}