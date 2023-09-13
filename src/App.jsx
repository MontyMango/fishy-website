import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Bass from "/Assets/bass.png";

function App() {
  return (
    <div>
      <p>Hello</p>
      <Link to="/Fish1">
        <img src={Bass} alt="Fish1" />{" "}
      </Link>
    </div>
  );
}

export default App;
