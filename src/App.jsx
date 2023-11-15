import React, { useEffect, useState } from "react";
import "./App.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [array, setArray] = useState([
    {
      name: "Crab",
      facts:
        "This crab sometimes crawls on the beach and sometimes pinches people.",
      link: "/crab",
      thumbnail: "/Assets/a_crab.png",
    },
    {
      name: "Clownfish",
      facts: "Clownfish eggs can be hatched anytime during the year.",
      link: "/clownFish",
      thumbnail: "/Assets/clownfish.png",
    },
    {
      name: "Orca",
      facts: "Orca Fact                           ",
      link: "/orca",
      thumbnail: "/Assets/orca.png",
    },
    {
      name: "Seal",
      facts: "Seal Fact",
      link: "/seal",
      thumbnail: "/Assets/seal.png",
    },
    {
      name: "Octopus",
      facts: "Octopus Fact                          ",
      link: "/octopus",
      thumbnail: "/Assets/sbr_octopus.png",
    },
    {
      name: "Shark",
      facts: "Shark Fact",
      link: "/shark",
      thumbnail: "/Assets/shark.png",
    },
    {
      name: "Ocean Turtle",
      facts: "Ocean Turtle Fact                        ",
      link: "/turtle",
      thumbnail: "/Assets/o_turtle.png",
    },
    {
      name: "Seahorse",
      facts: "Seahorse Fact                       ",
      link: "/seahorse",
      thumbnail: "/Assets/seahorse.png",
    },
    {
      name: "Penguin",
      facts: "Penguin Fact                         ",
      link: "/penguin",
      thumbnail: "/Assets/penguin.png",
    },
  ]);

  useEffect(() => {
    // Shuffle the array when the component mounts or when the array changes
    setArray(shuffleArray([...array]));
  }, []);

  return (
    <>
      {/* Body, where the fish goes */}
      <div className="container water" style={{ paddingTop: "15%" }}>
        {/* Fish #1: Crab */}
        {array.slice(0, 15).map((animal, index) => {
          if (index % 2 == 0) {
            return (
              <div className="row">
                {/*Title Column*/}
                <div className="col-lg-12">
                  <h1>
                    This is the <a href={animal.link}>{animal.name}</a>
                  </h1>
                </div>
                {/*Photo & Description Column */}
                <div className="row">
                  {/* Left Photo Column*/}
                  <div className="col-lg-6 img">
                    <a href={animal.link}>
                      <img src={animal.thumbnail} />
                    </a>
                  </div>
                  {/* Right Description Column */}
                  <div className="col-lg-6">
                    <p>{animal.facts}</p>
                    <h5>
                      <a href="/">Learn more about the {animal.name}!</a>
                    </h5>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="row">
                {/*Title Column*/}
                <div className="col-lg-12" style={{ float: "right" }}>
                  <h1>
                    This is the <a href={animal.link}>{animal.name}</a>
                  </h1>
                </div>
                {/* Photo & Description Column */}
                <div className="row">
                  {/* Left Description Column */}
                  <div className="col-lg-6" style={{ paddingLeft: "9%" }}>
                    <p>{animal.facts}</p>
                    <h5>
                      <a href={animal.link}>
                        Learn more about the {animal.name}!
                      </a>
                    </h5>
                  </div>
                  <div className="row">
                    {/* Right Photo Column*/}
                    <div
                      className="col-lg-10 img"
                      style={{ paddingLeft: "10%" }}
                    >
                      <img src={animal.thumbnail} />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {/* Fish #2: Clownfish */}

        {/* OptionaJavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    </>
  );
}

export default App;
