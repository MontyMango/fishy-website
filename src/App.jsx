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
      name: "Angelfish",
      facts:
        "Likes to eat sponges and algae, but can also nibble on sea fans, soft coral, and even jellyfish!",
      link: "/angleFish",
      thumbnail: "/Assets/angelfish.png",
    },
    {
      name: "Anglerfish",
      facts: "Some anglerfish can produce their own source of light!",
      link: "/anglerFish",
      thumbnail: "/Assets/AnglerFish.png",
    },
    {
      name: "Atlantic Blue Crab",
      facts:
        "Likes to eat mussels, snails, fish plants, even other small blue crabs!",
      link: "/crab",
      thumbnail: "/Assets/a_crab.png",
    },
    {
      name: "Bass",
      facts:
        "Sea bass are carnivorous, feeding on fish, crustaceans, mollusks, and other invertebrates.",
      link: "/bass",
      thumbnail: "/Assets/bass.png",
    },
    {
      name: "Blue Whale",
      facts: "Blue whales are the largest animals on the planet!",
      link: "/bluewhale",
      thumbnail: "/Assets/BWhale.png",
    },
    {
      name: "Clownfish",
      facts:
        "A layer of mucus on clownfish`s skin makes it immune to fish-eating anemone`s stings.",
      link: "/clownFish",
      thumbnail: "/Assets/clownfish.png",
    },
    {
      name: "Dolphin",
      facts: "Can swim at speeds of 18 miles per hour",
      link: "/dolphin",
      thumbnail: "/Assets/dolphin.png",
    },
    {
      name: "Flounder",
      facts:
        "Called chameleons of the sea - can change color to blend in with their environment",
      link: "/flounder",
      thumbnail: "/Assets/flounder.png",
    },
    {
      name: "Humpback Whale",
      facts:
        "Will occasionally come together in a “super” group of 200 (unknown why).",
      link: "/humpbackWhale",
      thumbnail: "/Assets/h_whale.png",
    },
    {
      name: "King Penguin",
      facts: "Can scarf down as many as 2000 fish in a single day.",
      link: "/kingPenguin",
      thumbnail: "/Assets/penguin.png",
    },
    {
      name: "Ornate Box Turtle",
      facts: "Can live up to 37 years long! And some people keep them as pets.",
      link: "/turtle",
      thumbnail: "/Assets/o_turtle.png",
    },
    {
      name: "Orca",
      facts:
        "Uses echolocation to communicate, attack, and work together. Also known as killer whales.",
      link: "/orca",
      thumbnail: "/Assets/orca.png",
    },
    {
      name: "Pacific Octopus",
      facts: "Grows bigger, and lives longer than any other octopus species!",
      link: "/octopus",
      thumbnail: "/Assets/p_octopus.png",
    },
    {
      name: "Seahorse",
      facts: "It has eyes that work independently of each other.",
      link: "/seahorse",
      thumbnail: "/Assets/seahorse.png",
    },
    {
      name: "Sea Urchin",
      facts: "They can give humans boo-boos, but they don't mean to!",
      link: "/seaurchin",
      thumbnail: "/Assets/Urchin.png",
    },
    {
      name: "Seal",
      facts:
        "Cannot use hind flippers to move on land, so it “bounces” instead.",
      link: "/seal",
      thumbnail: "/Assets/seal.png",
    },

    {
      name: "South Blue Ring Octopus",
      facts:
        "Potent venom strong enough to kill a human (no known anti-venom to treat bitten person).",
      link: "/octo",
      thumbnail: "/Assets/sbr_octopus.png",
    },
    {
      name: "Shrimp",
      facts: "Can swim backwards!",
      link: "/shrimp",
      thumbnail: "/Assets/shrimp.png",
    },

    {
      name: "Walrus",
      facts:
        "Male walruses employ their tusks aggressively to maintain territory.",
      link: "/walrus",
      thumbnail: "/Assets/walrus.png",
    },
    {
      name: "White Shark",
      facts:
        "Has special cells (melanocytes) that helps with their cloaking ability to sneak up on prey.",
      link: "/shark",
      thumbnail: "/Assets/shark.png",
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
        {/* Top, where the title goes */}
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
                      <a href={animal.link}>
                        Learn more about the {animal.name}!
                      </a>
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
                      <a href={animal.link}>
                        <img src={animal.thumbnail} />
                      </a>
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
                  width: "350px", // Adjust the width as needed
                  fontSize: "24px", // Adjust the font size as needed
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
