import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I an Adrian <span className="waving-hand">👋</span>
        </p>
        <p className="text-gray-100 text-center font-bold text-2xl">
          Building Products and Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas>
          <Suspense fallback={null}>
            
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
