import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <p>Hello</p>
      <Link to="/Fish1">
        <button>Fish1</button>
      </Link>
    </div>
  );
}

export default App;
