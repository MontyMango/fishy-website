import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Waves from "/Assets/waves.jpg"
import Bass from "/Assets/bass.png";
import Crab from "/Assets/a_crab.png";
import ClownFish from "/Assets/clownfish.png";
import Shark3D from "./components/Shark3D";
import Crab3D from "./components/Crab3D";

function App() {
  return (
    <>
    <img src={Waves} alt="Waves" style={{ width: '100%', height: '800px' }} />
    <div className="gradient-background">
      <p>Dive Below</p>
      <div>
        <Link to="/Bass">
          <img src={Bass} alt="Bass" />
        </Link>
        <Link to="/Crab">
          <img src={Crab} alt="Crab" />
        </Link>
        <Link to="/ClownFish">
          <img src={ClownFish} alt="ClownFish" />
        </Link>
      </div>
      <div style={{ display: "flex", maxWidth: "100vw", overflow: "auto" }}>
        <div style={{ width: "50%" }}>
          <Shark3D />
        </div>
        <div style={{ width: "50%" }}>
          <Crab3D />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
