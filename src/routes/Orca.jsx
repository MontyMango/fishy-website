import React from "react";
import Orca1 from "../../public/Assets/Orca1.png";
import Orca2 from "../../public/Assets/Orca2.png";
import Orca3 from "../../public/Assets/Orca3.png";
import Orca3D from "../components/Orca3D";

const OrcaVideo = "https://www.youtube.com/embed/iFiZqypIDgs";

const Orca = () => {
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
        Orca
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
          src={Orca1}
          alt="Orca 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Orca2}
          alt="Orca 2"
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
        <h2>Scientific Name: Orcinus orca</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 23-32 feet
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 8,000-12,000 pounds
        </div>
      </div>
      <img
          src={Orca3}
          alt="Orca 3"
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
            Orcas, also known as killer whales, are the largest members of the dolphin family.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are highly intelligent and social animals, living in tight-knit family groups known as pods.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Orcas have a diverse diet, feeding on fish, seals, sea lions, and even whales. Different populations have unique hunting techniques.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Orcas are known for their distinctive black and white coloration, with some variations having grayish or light yellow areas.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Despite their "killer whale" name, wild orcas have not been known to harm humans and are powerful but graceful predators in the ocean.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={OrcaVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          marginBottom: "20px",
        }}
      ></iframe>

      <div>
        <Orca3D />
      </div>
    </div>
  );
};

export default Orca;
