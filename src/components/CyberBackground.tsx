"use client";

// react-three-fiber's rendering model is imperative by design: useFrame mutates
// refs/camera every tick on purpose to avoid React re-renders, and particle fields
// are randomized once via useMemo. The React Compiler purity/immutability lint
// rules assume pure render output and can't model that, so they're disabled here.
/* eslint-disable react-hooks/purity, react-hooks/immutability */

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 2600;
const FLARE_COUNT = 60;
const FIELD_RADIUS = 14;

function randomInSphere(radius: number) {
  // Uniform-ish distribution inside a sphere via rejection sampling.
  let x = 0;
  let y = 0;
  let z = 0;
  let lenSq = Infinity;
  while (lenSq > 1) {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    z = Math.random() * 2 - 1;
    lenSq = x * x + y * y + z * z;
  }
  return [x * radius, y * radius, z * radius] as const;
}

function DataNodes({ count, size, colorA, colorB }: { count: number; size: number; colorA: string; colorB: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupTarget = useRef({ x: 0, y: 0 });

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const cA = new THREE.Color(colorA);
    const cB = new THREE.Color(colorB);

    for (let i = 0; i < count; i++) {
      const [x, y, z] = randomInSphere(FIELD_RADIUS);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixed = cA.clone().lerp(cB, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    return { positions, colors };
  }, [count, colorA, colorB]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const { pointer } = state;
    groupTarget.current.x = THREE.MathUtils.lerp(groupTarget.current.x, pointer.x * 0.6, 0.03);
    groupTarget.current.y = THREE.MathUtils.lerp(groupTarget.current.y, pointer.y * 0.4, 0.03);

    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02 + groupTarget.current.x * 0.4;
    pointsRef.current.rotation.x = groupTarget.current.y * 0.25;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  const current = useRef({ x: 0, y: 0 });

  useFrame(() => {
    current.current.x = THREE.MathUtils.lerp(current.current.x, pointer.x * 1.2, 0.04);
    current.current.y = THREE.MathUtils.lerp(current.current.y, pointer.y * 0.8, 0.04);

    camera.position.x = current.current.x;
    camera.position.y = current.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function CyberBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 65 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.75]}
      >
        <color attach="background" args={["#030014"]} />
        <fog attach="fog" args={["#030014", 5, 20]} />

        <CameraRig />
        <DataNodes count={NODE_COUNT} size={0.045} colorA="#7dd3fc" colorB="#a855f7" />
        <DataNodes count={FLARE_COUNT} size={0.14} colorA="#e879f9" colorB="#67e8f9" />
      </Canvas>
    </div>
  );
}
