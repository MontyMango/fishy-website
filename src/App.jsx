import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Waves from "/Assets/waves.jpg";
import Bass from "/Assets/bass.png";
import Crab from "/Assets/a_crab.png";
import ClownFish from "/Assets/clownfish.png";
import Shark3D from "./components/Shark3D";
import Crab3D from "./components/Crab3D";

function App() {
  const [array, setArray] = useState([0, 1, 2, 3, 4, 5]);

  return (
    <>
      {/* Body, where the fish goes */}
      <div className="container water" style={{ paddingTop: "15%" }}>
        {/* Fish #1: Crab */}
        {array.map(() => {
          return (
            <div className="row">
              {/*Title Column*/}
              <div className="col-lg-12">
                <h1>
                  This is the <a href="">crab</a>
                </h1>
              </div>
              {/*Photo & Description Column */}
              <div className="row">
                {/* Left Photo Column*/}
                <div className="col-lg-6 img">
                  <a href="/l">
                    <img src="/Assets/a_crab.png" alt="A crab" />
                  </a>
                </div>
                {/* Right Description Column */}
                <div className="col-lg-6">
                  <p>
                    This crab sometimes crawls on the beach and sometimes
                    pinches people.
                  </p>
                  <h5>
                    <a href="/">Learn more about the crab!</a>
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
        {/* Fish #2: Clownfish */}
        <div className="row">
          {/*Title Column*/}
          <div className="col-lg-12" style={{ float: "right" }}>
            <h1>
              This is the <a href="">clownfish</a>
            </h1>
          </div>
          {/* Photo & Description Column */}
          <div className="row">
            {/* Left Description Column */}
            <div className="col-lg-6" style={{ paddingLeft: "9%" }}>
              <p>
                This fish looks cool, but I don't know if they can breath in
                that water.
              </p>
              <h5>
                <a href="/clownFish">Learn more about the clownfish!</a>
              </h5>
            </div>
            <div className="row">
              {/* Right Photo Column*/}
              <div className="col-lg-10" style={{ paddingLeft: "10%" }}>
                <img src="/Assets/clownfish.png" alt="Picture of a clownfish" />
              </div>
            </div>
          </div>
        </div>
        {/* OptionaJavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    </>
  );
}

export default App;
