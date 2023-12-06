import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { easing } from "maath";
import { Penguin } from "./Penguin_rigged_and_animated";

function SceneCamera() {
  const { camera } = useThree();

  useEffect(() => {
    camera.fov = 75;
    camera.near = 1;
    camera.far = 1000;
    camera.position.set([240, -420, 180]);
    camera.rotateY(60);
    camera.updateProjectionMatrix();
  }, []);
  return <PerspectiveCamera makeDefault></PerspectiveCamera>;
}

function Light() {
  const ref = useRef();
  useFrame((state, delta) => {
    easing.dampE(
      ref.current.rotation,
      [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0],
      0.2,
      delta
    );
  });
  return (
    <group ref={ref}>
      <directionalLight
        position={[2000, 1000, -10000]}
        castShadow
        intensity={0.1}
        shadow-mapSize={2}
        shadow-bias={1}
      ></directionalLight>
    </group>
  );
}

const Penguin3D = (props) => {
  return (
    <Suspense>
      <div className="flex h-full relative">
        <div
          style={{
            fontSize: "20px",
          }}
          className="absolute right-2 bottom-0 z-20 dark:text-black"
        >
          Drag Mouse to Move 3D Model
        </div>
        <Canvas
          className="canvas4"
          style={{ width: "100%", height: "500px" }} // Set the width and height to 100% of the parent container
        >
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 3]} intensity={1} />

          <Suspense fallback={null}>
            <Penguin position={[0, -2, 0]} scale={3} />
          </Suspense>
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Penguin3D;
