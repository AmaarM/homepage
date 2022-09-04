import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import Link from "next/link";
const Globe = (props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <directionalLight color="#073642" position={[5, 5, 0]} />
      <directionalLight color="#16213E" position={[5, 0, 5]} />
      <directionalLight color="#0F3460" position={[0, 5, 5]} />
      <sphereBufferGeometry args={[1, 64, 64]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Globe;
