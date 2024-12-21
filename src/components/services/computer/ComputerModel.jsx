import React from "react";
import { useGLTF } from "@react-three/drei";

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/computerModel.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

useGLTF.preload("/computerModel.glb");
// import React from "react";
// import { useGLTF } from "@react-three/drei";

// export function ComputerModel(props) {
//   const { nodes, materials } = useGLTF("/computerModel.glb");
//   return (
//     <group {...props} dispose={null} scale={[1.5, 1.5, 1.5]} position={[0, -1, 0]}>
//       <group position={[0.121, 0.007, 0]}>
//         <mesh
//           geometry={nodes.Object_6.geometry}
//           material={materials.MacBookPro}
//         />
//         <mesh
//           geometry={nodes.Object_8.geometry}
//           material={materials.MacBookPro}
//         />
//       </group>
//       <mesh
//         geometry={nodes.Object_4.geometry}
//         material={materials.MacBookPro}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/computerModel.glb");
