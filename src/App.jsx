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
      thumbnail: "/Assets/p_octopus.png",
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
    {
      name: "Bass",
      facts: "Bass Fact                         ",
      link: "/bass",
      thumbnail: "/Assets/bass.png",
    },
    {
      name: "Angle Fish",
      facts: "Angle Fish Fact                         ",
      link: "/angleFish",
      thumbnail: "/Assets/cr_anglefish.png",
    },
    {
      name: "Dolphin",
      facts: "Dolphin Fact                         ",
      link: "/dolphin",
      thumbnail: "/Assets/dolphin.png",
    },
    {
      name: "Humpback Whale",
      facts: "Humpback Whale Fact                         ",
      link: "/humbackWhale",
      thumbnail: "/Assets/h_whale.png",
    },
    {
      name: "Shrimp",
      facts: "Shrimp Fact                         ",
      link: "/shrimp",
      thumbnail: "/Assets/shrimp.png",
    },
    {
      name: "Walrus",
      facts: "Walrus Fact                         ",
      link: "/walrus",
      thumbnail: "/Assets/walrus.png",
    },
    {
      name: "Different Octopus????",
      facts: "Octo Fact                         ",
      link: "/octo",
      thumbnail: "/Assets/sbr_octopus.png",
    },
  ]);

  useEffect(() => {
    // Shuffle the array when the component mounts or when the array changes
    setArray(shuffleArray([...array]));
  }, []);

  const handleDropdownChange = (event) => {
    const selectedAnimalName = event.target.value;
    const selectedAnimalObject = array.find(
      (animal) => animal.name === selectedAnimalName
    );

    if (selectedAnimalObject) {
      // Redirect to the selected animal's link
      window.location.href = selectedAnimalObject.link;
    }
  };

  return (
    <>
      <header>
        {/* {/* Top, where the title goes */}
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fsnorkel%2Fsnorkel_PNG20.png&f=1&nofb=1&ipt=af1773e9c2bcea53a30e9f3a2ad836adbc1f46d121209226a84555af2f87955c&ipo=images"
                style={{ height: 250 }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg">
              <h1>Dive below!</h1>
              <h6>But don't forget your scuba gear!</h6>
            </div>
          </div>
        </div>
      </header>

      {/* Body, where the fish goes */}
      <div
        className="container water"
        style={{ paddingTop: "5%", paddingBottom: "5%" }}
      >
        {/* Fish #1: Crab */}
        {array.slice(0, 15).map((animal, index) => {
          if (index % 2 == 0) {
            return (
              <div
                className="row"
                style={{ paddingTop: "5%", paddingBottom: "5%" }}
              >
                {/*Title Column*/}
                <div className="col-lg-12">
                  <h1>
                    This is the <a href={animal.link}>{animal.name}</a>
                  </h1>
                </div>
                {/*Photo & Description Column */}
                <div className="row" style={{ paddingTop: "10%" }}>
                  {/* Left Photo Column*/}
                  <div className="col-lg-6 img">
                    <a href={animal.link}>
                      <img src={animal.thumbnail} />
                    </a>
                  </div>
                  {/* Right Description Column */}
                  <div
                    className="col-lg-6"
                    style={{
                      height: "200px",
                      width: "800px",
                    }}
                  >
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
              <div
                className="row"
                style={{ paddingTop: "5%", paddingBottom: "5%" }}
              >
                {/*Title Column*/}
                <div className="col-lg-12" style={{ float: "right" }}>
                  <h1>
                    This is the <a href={animal.link}>{animal.name}</a>
                  </h1>
                </div>
                {/* Photo & Description Column */}
                <div className="row" style={{ paddingTop: "10%" }}>
                  {/* Left Description Column */}
                  <div
                    className="col-lg-6"
                    style={{
                      paddingLeft: "09%",
                      height: "200px",
                      width: "1000px",
                    }}
                  >
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
        <p style={{ fontSize: "1em" }}>Not seeing your animal?</p>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <select
                className="form-select"
                aria-label="Select an animal"
                onChange={handleDropdownChange}
                style={{
                  backgroundColor: "#333", // Change background color
                  color: "#fff", // Change text color
                }}
              >
                <option value="" disabled selected>
                  Select an animal
                </option>
                {array.map((animal) => (
                  <option key={animal.name} value={animal.name}>
                    {animal.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <footer>
          <div
            className="container"
            style={{ paddingTop: "5%", paddingLeft: "10%" }}
          >
            <div className="row">
              <div className="col-lg-12">
                <p>
                  This informative website was made possible by team 3 (Nathan
                  Bilancio, Cameron Harter, Alexander Hershberger, and Palmer
                  Vu)
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
