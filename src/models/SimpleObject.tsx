import { Canvas } from "@react-three/fiber";
import { Cylinder, Sphere, Box, OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import React from "react";

const SimpleObject = () => {
  const { scaleX, scaleY, scaleZ, color, wireframeColor, objectType } =
    useControls({
      objectType: {
        value: "Cylinder",
        options: ["Cylinder", "Sphere", "Box"],
      },
      scaleX: { value: 1, min: 0.1, max: 5, step: 0.1 },
      scaleY: { value: 1, min: 0.1, max: 5, step: 0.1 },
      scaleZ: { value: 1, min: 0.1, max: 5, step: 0.1 },
      color: "#ff00ff",
      wireframeColor: "#fff",
    });

  const renderObject = () => {
    switch (objectType) {
      case "Sphere":
        return (
          <>
            <Sphere args={[2, 32, 32]}>
              <meshStandardMaterial color={color} />
            </Sphere>
            <Sphere args={[2, 32, 32]}>
              <meshBasicMaterial color={wireframeColor} wireframe />
            </Sphere>
          </>
        );
      case "Box":
        return (
          <>
            <Box args={[3, 3, 3]}>
              <meshStandardMaterial color={color} />
            </Box>
            <Box args={[3, 3, 3]}>
              <meshBasicMaterial color={wireframeColor} wireframe />
            </Box>
          </>
        );
      case "Cylinder":
      default:
        return (
          <>
            <Cylinder args={[2, 2, 2, 32]}>
              <meshStandardMaterial color={color} />
            </Cylinder>
            <Cylinder args={[2, 2, 2, 32]}>
              <meshBasicMaterial color={wireframeColor} wireframe />
            </Cylinder>
          </>
        );
    }
  };

  return (
    <>
      <Leva fill flat />
      <Canvas className="bg-violet-900">
        <ambientLight />
        <pointLight position={[10, 20, 10]} />
        <mesh
          position={[0, 1.5, 0]}
          scale={[scaleX, scaleY, scaleZ]}
          rotation={[Math.PI / 4, Math.PI / 4, 0]}
        >
          {renderObject()}
        </mesh>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default SimpleObject;
