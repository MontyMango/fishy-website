/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 bottlenose_dolphin.glb 
Author: CARI'MAM (https://sketchfab.com/CARIMAM)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/bottlenose-dolphin-61e066c96a554e2b9c881404d946432d
Title: Bottlenose dolphin
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dolphin(props) {
  const { nodes, materials } = useGLTF("/bottlenose_dolphin.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface3_lambert5_0.geometry}
        material={materials.lambert5}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/bottlenose_dolphin.glb");
