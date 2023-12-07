import React from "react";
import Seahorse1 from "../../public/Assets/Seahorse1.png";
import Seahorse2 from "../../public/Assets/Seahorse2.png";
import Seahorse3 from "../../public/Assets/Seahorse3.png";
import Seahorse3D from "../components/Seahorse3D";

const SeahorseVideo = "https://www.youtube.com/embed/XqP0xqbnAMU";

const Seahorse = () => {
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
        Seahorse
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
          src={Seahorse1}
          alt="Seahorse 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Seahorse2}
          alt="Seahorse 2"
          style={{
            maxWidth: "50%",
            maxHeight: "250px",
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
        <h2>Scientific Name: Hippocampus</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
           Average Size/Length: 0.5-14 inches (depending on the species)
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: Varies by species
        </div>
      </div>
      <img
          src={Seahorse3}
          alt="Seahorse 3"
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
            Seahorses are unique marine creatures known for their upright posture and horse-like appearance.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Unlike most fish, male seahorses carry and give birth to the offspring.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Seahorses use their long, curled tails to anchor themselves to seaweed or coral, avoiding being swept away by ocean currents.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They have a prehensile tail, which means they can grasp onto objects and hold on tightly.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Seahorses have independently moving eyes, allowing them to scan their surroundings without moving their bodies.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={SeahorseVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          marginBottom: "20px",
        }}
      ></iframe>

      <div>
        <Seahorse3D />
      </div>
    </div>
  );
};

export default Seahorse;
