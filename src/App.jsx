import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Bass from "/Assets/bass.png";
import Crab from "/Assets/a_crab.png";

function App() {
  return (
    <div className="gradient-background">
      <p>Dive Below</p>
      <Link to="/Bass">
        <img src={Bass} alt="Bass" />
      </Link>
      <Link to="/Crab">
        <img src={Crab} alt="Crab" />
      </Link>
    </div>
  );
}

export default App;
