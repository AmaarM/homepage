import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

const Globe = (props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += 0.02));
  return (
    <mesh {...props} ref={ref} scale={2}>
      <directionalLight color="#073642" position={[5, 5, 0]} />
      <directionalLight color="#16213E" position={[5, 0, 5]} />
      <directionalLight color="#0F3460" position={[0, 5, 5]} />
      <sphereBufferGeometry args={[1, 64, 64]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Globe;
