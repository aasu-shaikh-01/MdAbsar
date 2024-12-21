import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import { IpadModel } from "./IpadModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { IpadModel } from "./IpadModel";

const IpadModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={5}>
          <IpadModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.4} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default IpadModelContainer;
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { ComputerModel } from "./ComputerModel";
// import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

// const IpadModelContainer = () => {
//   return (
//     <Canvas>
//       <Suspense fallback="Loading 3D Model...">
//         {/* Stage for environment and lighting */}
//         <Stage environment="studio" intensity={1.5}>
//           <ComputerModel />
//         </Stage>

//         {/* Perspective Camera */}
//         <PerspectiveCamera
//           position={[0, 0, 3]} // Adjust for better framing
//           makeDefault
//         />

//         {/* Orbit Controls for user interaction */}
//         <OrbitControls
//           // enableZoom={true}
//           autoRotate={true}
//           autoRotateSpeed={0.5}
//         />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default IpadModelContainer;
