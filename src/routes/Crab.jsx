import React from "react";
import Crab1 from "../../public/Assets/ACrab1.png";
import Crab2 from "../../public/Assets/ACrab2.png";
import Crab3 from "../../public/Assets/ACrab3.png";
import Crab3D from "../components/Crab3D";

const Crab = () => {
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
        Atlantic Blue Crab
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
          src={Crab1}
          alt="Crab 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Crab2}
          alt="Crab 2"
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
        <h2>Scientific Name: Callinectes sapidus</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Width: 7 inches (carapace width)
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 1-2 pounds
        </div>
      </div>

      <img
        src={Crab3}
        alt="Crab 3"
        style={{
          maxWidth: "50%",
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
            The Atlantic Blue Crab is named for its blue claws and blue-green shell.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are known for their distinctive swimming style, using their paddle-like rear legs to move gracefully through the water.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Blue Crabs are omnivores, feeding on a variety of foods including mollusks, small fish, and plant material.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Female Blue Crabs exhibit a unique ability to store sperm for extended periods, allowing them to fertilize multiple batches of eggs.
          </li>
          <li style={{ marginBottom: "10px" }}>
            The Atlantic Blue Crab is a commercially important species and a popular seafood choice in various culinary dishes.
          </li>
        </ul>
      </div>

      <iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/WLOcr1clApk"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  style={{
    marginBottom: "20px",
  }}
></iframe>

<div><Crab3D />Note: Not the Atlantic Blue Crab... but its a crab :)</div>
    </div>
  );
};

export default Crab;
