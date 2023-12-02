import React from "react";
import Crab3D from "../components/Crab3D";

function Crab() {
  return (
    <div style={{ width: "100%" }}>
      <p>Crab</p>
      <img style={{height: "400px", width: "400px"}} src={"../../Assets/a2_crab.png"} />
      <Crab3D />
    </div>
  );
}

export default Crab;
