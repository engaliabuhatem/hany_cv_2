import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

// Rotating plane component – uses R3F hooks safely inside Canvas
function RotatingPlane() {
  const planeRef = useRef();
  // Rotate on every frame for a subtle motion effect
  useFrame((state, delta) => {
    if (planeRef.current) {
      planeRef.current.rotation.y += delta * 0.05; // slow spin
    }
  });

  return (
    <mesh ref={planeRef} rotation={[0, 0, 0]}>
      <planeGeometry args={[3, 2]} />
      {/* Use the picto‑primary CSS variable for colour consistency */}
      <meshStandardMaterial color="var(--color-picto-primary)" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function ThreeHero() {
  return (
    <Canvas
      className="absolute inset-0 pointer-events-none"
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      {/* Directional light for subtle shading */}
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      {/* Rotating plane – now a child component that can use R3F hooks */}
      <RotatingPlane />

      {/* Starfield background for depth */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />

      {/* Allows a tiny orbit control for desktop interaction */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
