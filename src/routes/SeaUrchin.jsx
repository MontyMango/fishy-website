import React from "react";
import Urchin1 from "../../public/Assets/Urchin1.png";
import Urchin2 from "../../public/Assets/Urchin2.png";
import Urchin3 from "../../public/Assets/Urchin3.png";

const UrchinVideo = "https://www.youtube.com/embed/K4-DD265LQk";

const SeaUrchin = () => {
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
        Sea Urchin
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
          src={Urchin1}
          alt="Sea Urchin 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Urchin2}
          alt="Sea Urchin 2"
          style={{
            maxWidth: "50%",
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
        <h2>Scientific Name: Echinoidea</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Diameter: Varies by species
        </div>
      </div>

      <img
        src={Urchin3}
        alt="Sea Urchin 3"
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
            Sea urchins are marine animals with a round, spiny shell known as a
            "test."
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are found in oceans worldwide, from shallow coastal waters to
            deep-sea environments.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Sea urchins play a crucial role in marine ecosystems by controlling
            algae growth through their feeding habits.
          </li>
          <li style={{ marginBottom: "10px" }}>
            The spines of sea urchins provide protection against predators, and
            some species can be venomous.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Sea urchins have a unique feeding apparatus called Aristotle's
            lantern, which consists of five tooth-like structures used to scrape
            algae and detritus from surfaces.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={UrchinVideo}
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

export default SeaUrchin;
