import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Bass from "/Assets/bass.png";
import Crab from "/Assets/a_crab.png";
import ClownFish from "/Assets/clownfish.png";

function App() {
  return (
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
    </div>
  );
}

export default App;
