import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Text: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshPhysicalMaterial;
  };
};

const Devhat = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/hat3.gltf") as GLTFResult;

  useEffect(() => {
    gsap.set(group.current.scale, { x: 20, y: 20, z: 20 });
    gsap.to(group.current.scale, { x: 2, y: 2, z: 2, duration: 4 });
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.002"]}
        scale={[0.914, 0.783, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.001"]}
        position={[0, 0.042, 0]}
        scale={[0.89, 0.762, 0.974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.003"]}
        position={[0.843, -0.638, 0.063]}
        rotation={[1.597, 0.194, -1.56]}
        scale={0.132}
      />
    </group>
  );
};

useGLTF.preload("/models/hat3.gltf");

export default Devhat;
