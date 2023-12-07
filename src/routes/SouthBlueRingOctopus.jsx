import React from "react";
import BOcto1 from "../../public/Assets/BOcto1.png";
import BOcto2 from "../../public/Assets/BOcto2.png";
import BOcto3 from "../../public/Assets/BOcto3.png";

const OctopusVideo = "https://www.youtube.com/embed/I1cKo1FHJeg";

const SouthBlueRingOctopus = () => {
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
        South Blue-Ringed Octopus
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
          src={BOcto1}
          alt="Octopus 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={BOcto2}
          alt="Octopus 2"
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
        <h2>Scientific Name: Hapalochlaena spp.</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 5 to 8 inches (adult size)
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: Less than 1 pound
        </div>
      </div>
      <img
          src={BOcto3}
          alt="Octopus 3"
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
            The South Blue-Ringed Octopus belongs to the genus Hapalochlaena, and several species are recognized within this genus.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Despite their small size, they are considered one of the most venomous marine animals, with potent neurotoxins in their saliva.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are recognized for their vibrant blue rings that appear when they feel threatened or agitated.
          </li>
          <li style={{ marginBottom: "10px" }}>
            South Blue-Ringed Octopuses are found in shallow tide pools and reefs in the Indo-Pacific region.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These octopuses are known for their intelligence and are capable of intricate displays, including color changes and intricate movements.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={OctopusVideo}
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

export default SouthBlueRingOctopus;
