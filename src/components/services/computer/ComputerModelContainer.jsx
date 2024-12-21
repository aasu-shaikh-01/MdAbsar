// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { ComputerModel } from "./ComputerModel";
// import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

// const ComputerModelContainer = () => {
//   return (
//     <Canvas>
//       <Suspense fallback="loading...">
//         <Stage environment="night" intensity={2}>
//           <ComputerModel />
//         </Stage>
//         <OrbitControls enableZoom={false} autoRotate/>
//         <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.6} makeDefault />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ComputerModelContainer;
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { ComputerModel } from "./ComputerModel";
// import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

// const ComputerModelContainer = () => {
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

// export default ComputerModelContainer;
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const ComputerModelContainer = () => {
  // Define breakpoints
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // Determine zoom level based on screen size
  const zoomLevel = isMobile ? 0.7 : isTablet ? 0.6 : 0.4;

  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={2}>
          <ComputerModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={zoomLevel} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer;
