import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
// import { SphereGeometry } from "three";

const Test3d = () => {
  return (
    <div>
      <Canvas>
        <mesh>
          <Sphere args={[1, 100, 200]} scale={3}>
            <MeshDistortMaterial
              color="#DB8B9B"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          <ambientLight intensity={1} />
          <directionalLight position={[1, 2, 3]} />
          {/* <OrbitControls /> */}
        </mesh>
      </Canvas>
    </div>
  );
};

export default Test3d;
