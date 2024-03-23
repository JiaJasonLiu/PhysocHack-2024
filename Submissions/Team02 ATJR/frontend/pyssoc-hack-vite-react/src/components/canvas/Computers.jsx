import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./blackhole-copy/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='white' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
    <Canvas
      frameloop='demand'
      shadows
      dpr={[2, 2]}
      // fov: field of view
      // specify where the camera is
      camera={{ position: [10, -20, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers/>

      <Preload all />
    </Canvas>
    </Suspense>
  );
};

export default ComputersCanvas;