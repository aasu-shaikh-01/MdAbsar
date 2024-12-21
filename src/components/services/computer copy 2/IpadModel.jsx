import React from "react";
import { useGLTF } from "@react-three/drei";

export function IpadModel(props) {
  const { nodes, materials } = useGLTF("/iPadModel.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[1, 2.427, -4.555]}
        rotation={[0, 1.571, 0]}
        scale={[1.002, 2.583, 2.146]}
      >
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/iPadModel.glb");
