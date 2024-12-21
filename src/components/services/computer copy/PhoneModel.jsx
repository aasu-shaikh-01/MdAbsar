import React from "react";
import { useGLTF } from "@react-three/drei";

export function PhoneModel(props) {
  const { nodes, materials } = useGLTF("/phoneModel.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.057, 0.789, -0.14]}
        scale={0.024}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.057, 0.789, -0.14]}
        scale={0.024}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial003}
        position={[-0.057, 0.789, -0.14]}
        scale={0.024}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.material}
        position={[-0.057, 0.789, -0.14]}
        scale={0.024}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.Display}
        position={[-0.057, 0.789, -0.14]}
        scale={0.024}
      />
    </group>
  );
}

useGLTF.preload("/phoneModel.glb");
