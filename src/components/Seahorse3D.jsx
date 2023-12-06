import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { easing } from "maath";
import { Seahorse } from "./Seahorse";

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

  useThree().camera.lookAt(0, 0, -70); // Make the camera look at the Seahorse initially

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

const Seahorse3D = (props) => {
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
        <Canvas className="canvas4" style={{ width: "100%", height: "500px" }}>
          <OrbitControls enableZoom={true} target={[0, 0, -50]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 3]} intensity={1} />

          <Suspense fallback={null}>
            <Seahorse position={[0, 0, -70]} />
          </Suspense>
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Seahorse3D;
