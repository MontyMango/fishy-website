import React from "react";
import ClownFish3D from "../components/ClownFish3D";

function ClownFish() {
  return (
    <div>
      Clown Fish
      <ClownFish3D>
        <meshStandardMaterial
          attach="material"
          color="orange" // Adjust the color
          metalness={0.5} // Adjust the metalness
          roughness={0.2} // Adjust the roughness
        />
      </ClownFish3D>
    </div>
  );
}

export default ClownFish;
