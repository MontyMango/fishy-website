/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 seahorse.glb 
Author: Rigsters (https://sketchfab.com/rigsters)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/seahorse-2651aa6a55944f34abdd12f29dcf99a2
Title: Seahorse
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Seahorse(props) {
  const { nodes, materials } = useGLTF("/seahorse.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        position={[-3.928, -19.482, 23.409]}
        rotation={[-Math.PI, 1.571, 0]}
      />
    </group>
  );
}

useGLTF.preload("/seahorse.glb");
