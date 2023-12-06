import React from "react";
import ClownFish3D from "../components/ClownFish3D";
import Clownfish1 from "../../public/Assets/Clownfish1.png";
import Clownfish2 from "../../public/Assets/Clownfish2.png";
import Clownfish3 from "../../public/Assets/Clownfish3.png";

function ClownFish() {
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
          fontSize: "24px",
          marginBottom: "20px",
          color: "#00ccff", // Light blue for heading
        }}
      >
        Clown Fish
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
          src={Clownfish1}
          alt="Clownfish 1"
          style={{
            maxWidth: "30%",
            marginBottom: "10px",
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.1)", // Light shadow
          }}
        />
        <img
          src={Clownfish2}
          alt="Clownfish 2"
          style={{
            maxWidth: "30%",
            marginBottom: "10px",
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.1)", // Light shadow
          }}
        />

        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "20px",
            color: "#ddd", // Lighter text color for info
          }}
        >
          <h2>Scientific Name: Amphiprioninae</h2>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            Average Size/Length: 4.3 inches
          </div>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            Average Weight: Up to 1 lb
          </div>
        </div>

        <img
          src={Clownfish3}
          alt="Clownfish 3"
          style={{
            maxWidth: "30%",
            marginBottom: "10px",
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.1)", // Light shadow
          }}
        />
      </div>

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
            In Finding Nemo, the hero is actually a false anemonefish, while
            true anemonefish are nearly identical but have subtle differences in
            shape and live in different environments.
          </li>
          <li style={{ marginBottom: "10px" }}>
            A layer of mucus on clownfish’s skin makes it immune to fish-eating
            anemone’s stings.
          </li>
          <li style={{ marginBottom: "10px" }}>
            In exchange for safety from predators and food scraps, the clownfish
            drives off invaders and removes parasites from its host.
          </li>
        </ul>
      </div>

      <div>
        <ClownFish3D />
      </div>
    </div>
  );
}

export default ClownFish;
