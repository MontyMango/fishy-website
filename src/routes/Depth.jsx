import React, { useState } from "react";

function Depth() {
  const [array, setArray] = useState([
    {
      name: "Angelfish",
      facts:
        "Likes to eat sponges and algae, but can also nibble on sea fans, soft coral, and even jellyfish!",
      link: "/angleFish",
      thumbnail: "/Assets/angelfish.png",
      depth: "50 feet",
    },
    {
      name: "Anglerfish",
      facts: "Some anglerfish can produce their own source of light!",
      link: "/anglerFish",
      thumbnail: "/Assets/AnglerFish.png",
      depth: "16404 feet",
    },
    {
      name: "Atlantic Blue Crab",
      facts:
        "Likes to eat mussels, snails, fish plants, even other small blue crabs!",
      link: "/crab",
      thumbnail: "/Assets/a_crab.png",
      depth: "50 feet",
    },
    {
      name: "Bass",
      facts:
        "Sea bass are carnivorous, feeding on fish, crustaceans, mollusks, and other invertebrates.",
      link: "/bass",
      thumbnail: "/Assets/bass.png",
      depth: "260 feet",
    },
    {
      name: "Blue Whale",
      facts: "Blue whales are the largest animals on the planet!",
      link: "/bluewhale",
      thumbnail: "/Assets/BWhale.png",
      depth: "1640 feet",
    },
    {
      name: "Clownfish",
      facts:
        "A layer of mucus on clownfish's skin makes it immune to fish-eating anemone's stings.",
      link: "/clownFish",
      thumbnail: "/Assets/clownfish.png",
      depth: "50 feet",
    },
    {
      name: "Dolphin",
      facts: "Can swim at speeds of 18 miles per hour",
      link: "/dolphin",
      thumbnail: "/Assets/dolphin.png",
      depth: "850 feet",
    },
    {
      name: "Flounder",
      facts:
        "Called chameleons of the sea - can change color to blend in with their environment",
      link: "/flounder",
      thumbnail: "/Assets/flounder.png",
      depth: "100 feet",
    },
    {
      name: "Humpback Whale",
      facts:
        "Will occasionally come together in a 'super' group of 200 (unknown why).",
      link: "/humpbackWhale",
      thumbnail: "/Assets/h_whale.png",
      depth: "2700 feet",
    },
    {
      name: "King Penguin",
      facts: "Can scarf down as many as 2000 fish in a single day.",
      link: "/kingPenguin",
      thumbnail: "/Assets/penguin.png",
      depth: "50 feet",
    },
    {
      name: "Ornate Box Turtle",
      facts: "Can live up to 37 years long! And some people keep them as pets.",
      link: "/turtle",
      thumbnail: "/Assets/o_turtle.png",
      depth: "20 feet",
    },
    {
      name: "Orca",
      facts:
        "Uses echolocation to communicate, attack, and work together. Also known as killer whales.",
      link: "/orca",
      thumbnail: "/Assets/orca.png",
      depth: "2500 feet",
    },
    {
      name: "Pacific Octopus",
      facts: "Grows bigger, and lives longer than any other octopus species!",
      link: "/octopus",
      thumbnail: "/Assets/p_octopus.png",
      depth: "300 feet",
    },
    {
      name: "Seahorse",
      facts: "It has eyes that work independently of each other.",
      link: "/seahorse",
      thumbnail: "/Assets/seahorse.png",
      depth: "50 feet",
    },
    {
      name: "Sea Urchin",
      facts: "They can give humans boo-boos, but they don't mean to!",
      link: "/seaurchin",
      thumbnail: "/Assets/Urchin.png",
      depth: "50 feet",
    },
    {
      name: "Seal",
      facts:
        "Cannot use hind flippers to move on land, so it 'bounces' instead.",
      link: "/seal",
      thumbnail: "/Assets/seal.png",
      depth: "1500 feet",
    },
    {
      name: "South Blue Ring Octopus",
      facts:
        "Potent venom strong enough to kill a human (no known anti-venom to treat bitten person).",
      link: "/octo",
      thumbnail: "/Assets/sbr_octopus.png",
      depth: "20 feet",
    },
    {
      name: "Shrimp",
      facts: "Can swim backwards!",
      link: "/shrimp",
      thumbnail: "/Assets/shrimp.png",
      depth: "200 feet",
    },
    {
      name: "Walrus",
      facts:
        "Male walruses employ their tusks aggressively to maintain territory.",
      link: "/walrus",
      thumbnail: "/Assets/walrus.png",
      depth: "150 feet",
    },
    {
      name: "White Shark",
      facts:
        "Has special cells (melanocytes) that helps with their cloaking ability to sneak up on prey.",
      link: "/shark",
      thumbnail: "/Assets/shark.png",
      depth: "3900 feet",
    },
  ]);

  const getMaxDepth = () => {
    const depths = array.map((animal) => parseInt(animal.depth));
    return Math.max(...depths);
  };

  const renderAnimalPhotos = () => {
    const maxDepth = getMaxDepth();
    const positions = {};

    // Reverse the array so that animals with the lowest depth are at the top
    const reversedArray = [...array].reverse();

    return reversedArray.map((animal) => {
      const depth = parseInt(animal.depth);
      const depthPercentage = (depth / maxDepth) * 100;

      // Center the animals and increase vertical spacing
      let top = depth * 10; // Adjust the spacing by changing this value
      let left = 10;

      while (positions[top] && Math.abs(depthPercentage - positions[top]) < 5) {
        top += 5;
        left += 20;
      }

      positions[top] = depthPercentage;

      const style = {
        position: "absolute",
        top: `${top}px`,
        left: `${left}%`,
        transform: "translate(-50%, -50%)",
      };

      return (
        <div key={animal.name} style={style}>
          <img
            src={animal.thumbnail}
            alt={`${animal.name} Thumbnail`}
            style={{ width: "250px", height: "250px" }}
          />
          <div style={{ fontSize: "16px", textAlign: "center" }}>
            {animal.name}
            <br />
            {depth} ft
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div>Animal Depths Visualized</div>
      <div style={{ position: "relative", height: "2000px" }}>
        {renderAnimalPhotos()}
      </div>
    </>
  );
}

export default Depth;
