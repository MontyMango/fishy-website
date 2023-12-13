import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

const FishSpinner = () => {
  const [array, setArray] = useState([
    {
      name: "Angelfish",
      facts:
        "Likes to eat sponges and algae, but can also nibble on sea fans, soft coral, and even jellyfish!",
      link: "/angleFish",
      thumbnail: "/Assets/angelfish.png",
      depth: "60 feet",
    },
    {
      name: "Anglerfish",
      facts: "Some anglerfish can produce their own source of light!",
      link: "/anglerFish",
      thumbnail: "/Assets/AnglerFish.png",
      depth: "16,404 feet",
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
      depth: "700 feet",
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
      depth: "3,900 feet",
    },
  ]);
  const animalSegments = array.map((animal) => animal.name);

  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
    "#4E7AC7",
    "#9B539C",
    "#D1633C",
    "#76A25B",
    "#D8A843",
    "#C76CAB",
    "#569DBE",
    "#8B9453",
    "#E2725B",
    "#5C7A29",
    "#B98DC9",
    "#4565A6",
  ];

  const onFinished = (winner) => {
    // Find the winning animal in the array
    const winningAnimal = array.find((animal) => animal.name === winner);

    if (winningAnimal) {
      // Redirect to the page related to the selected animal
      console.log(`Redirecting to ${winningAnimal.link}`);
      window.location.href = winningAnimal.link;
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            marginTop: "50px",
            marginLeft: "400px",
          }}
        >
          <WheelComponent
            segments={animalSegments}
            segColors={segColors}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="white"
            contrastColor="black"
            buttonText="Spin"
            isOnlyOnce={false}
            size={280}
            upDuration={100}
            downDuration={500}
            fontFamily="Arial"
          />
        </div>
      </div>
    </div>
  );
};

export default FishSpinner;
