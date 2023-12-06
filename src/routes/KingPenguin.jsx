import React from "react";
import Penguin1 from "../../public/Assets/Penguin1.png";
import Penguin2 from "../../public/Assets/Penguin2.png";
import Penguin3 from "../../public/Assets/Penguin3.png";
import Penguin3D from "../components/Penguin3D";

function KingPenguin() {
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
        King Penguin
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
          src={Penguin1}
          alt="Penguin 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Penguin2}
          alt="Penguin 2"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            marginBottom: "20px",
            color: "#ddd", // Lighter text color for info
          }}
        >
          <h2>Scientific Name: Aptenodytes patagonicus</h2>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            Average Size/Height: 90 cm
          </div>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            Average Weight: 13 kg
          </div>
        </div>

        <img
          src={Penguin3}
          alt="Penguin 3"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
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
            King Penguins are the second-largest species of penguin, surpassed
            only by the Emperor Penguin.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They have distinctive orange patches on both sides of their necks,
            which become more vibrant during the mating season.
          </li>
          <li style={{ marginBottom: "10px" }}>
            King Penguins are known for their remarkable diving abilities,
            reaching depths of over 300 meters to find food.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Unlike some other penguin species, King Penguins do not build nests
            but instead carry their eggs on their feet to keep them warm.
          </li>
          <li style={{ marginBottom: "10px" }}>
            King Penguins form large colonies, sometimes consisting of thousands
            of individuals, for breeding and protection.
          </li>
        </ul>
      </div>

      <iframe
        title="King Penguin Educational Video"
        src="https://www.youtube.com/embed/MKyrXju_zqw"
        style={{
          width: "100%",
          height: "400px",
        }}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div>
        <Penguin3D />
      </div>
    </div>
  );
}

export default KingPenguin;
