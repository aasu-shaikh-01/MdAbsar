// import { MeshDistortMaterial, Sphere } from "@react-three/drei";
// import React from "react";
// const Shape = () => {
//   return (
//     <>
//       <Sphere args={[1, 100, 200]} scale={2.2} >
//         <MeshDistortMaterial
//           color="#DB8B9B"
//           attach="material"
//           distort={0.5}
//           speed={2}
//         />
//       </Sphere>
//       <ambientLight intensity={2} />
//       <directionalLight position={[1, 2, 3]} />
//     </>
//   );
// };

// export default Shape;
import React, { useState, useEffect } from "react";
import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";

const ResponsiveSphere = () => {
  const [scale, setScale] = useState(2.2); // Default scale

  const updateScale = () => {
    if (window.innerWidth < 640) {
      setScale(1.5); // Mobile screens
    } else if (window.innerWidth < 1024) {
      setScale(2); // Tablet screens
    } else {
      setScale(2.2); // Desktop screens
    }
  };

  useEffect(() => {
    updateScale(); // Initial scale
    window.addEventListener("resize", updateScale); // Update scale on resize
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <Sphere args={[1, 100, 200]} scale={scale}>
        <MeshDistortMaterial
          color="#DB8B9B"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};

export default ResponsiveSphere;
