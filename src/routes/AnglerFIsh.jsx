import React from "react";
import AnglerFish1 from "../../public/Assets/AnglerFish1.png";
import AnglerFish2 from "../../public/Assets/AnglerFish2.png";
import AnglerFish3 from "../../public/Assets/AnglerFish3.png";

const AnglerFishVideo = "https://www.youtube.com/embed/XUVerZsbYiw";

const AnglerFish = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#eee", // Light text color for dark background
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "44px",
          marginBottom: "20px",
          color: "#00ccff", // Light blue for heading
        }}
      >
        Angler Fish
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <img
          src={AnglerFish1}
          alt="Angler Fish 1"
          style={{
            maxWidth: "30%",
            marginBottom: "10px",
          }}
        />

        <img
          src={AnglerFish3}
          alt="Angler Fish 3"
          style={{
            maxWidth: "100%",
            marginBottom: "10px",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "20px",
          color: "#ddd", // Lighter text color for info
        }}
      >
        <h2>Scientific Name: Lophius piscatorius</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 2 to 4 feet
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 2 to 20 kilograms
        </div>
      </div>
      <img
        src={AnglerFish2}
        alt="Angler Fish 2"
        style={{
          maxWidth: "100%",
          marginBottom: "10px",
        }}
      />
      <div
        style={{
          marginBottom: "20px",
          color: "#ddd", // Lighter text color for fun facts
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            color: "#00ccff", // Light blue for heading
          }}
        >
          Fun Facts:
        </h2>
        <ul style={{ listStyleType: "disc", paddingInlineStart: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            Anglerfish are deep-sea predators known for their unique
            bioluminescent lure that hangs in front of their mouths to attract
            prey.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These fish live in the extreme depths of the ocean, where little to
            no sunlight penetrates.
          </li>
          <li style={{ marginBottom: "10px" }}>
            The bioluminescent lure is a modified dorsal fin spine and contains
            bacteria that produce light, helping the anglerfish attract prey in
            the darkness.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Anglerfish exhibit sexual dimorphism, where the males are much
            smaller than the females and often fuse with the female's body to
            reproduce.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Some species of anglerfish have been featured in popular culture,
            including the animated movie "Finding Nemo."
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={AnglerFishVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          marginBottom: "20px",
        }}
      ></iframe>
    </div>
  );
};

export default AnglerFish;
