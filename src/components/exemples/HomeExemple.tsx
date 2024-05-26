import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import "tailwindcss/tailwind.css";

const Cylinder: React.FC = () => {
  const { scale, radiusTop, radiusBottom, height, wireframe } = useControls({
    scale: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.1,
    },
    radiusTop: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.1,
    },
    radiusBottom: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.1,
    },
    height: {
      value: 2,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    wireframe: false,
  });

  return (
    <mesh scale={[scale, scale, scale]}>
      <cylinderGeometry args={[radiusTop, radiusBottom, height, 32]} />
      <meshBasicMaterial
        wireframe={wireframe}
        color={wireframe ? "black" : "gray"}
      />
    </mesh>
  );
};

const CylinderCanvas: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <Leva collapsed />
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cylinder />
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  );
};

export default CylinderCanvas;
