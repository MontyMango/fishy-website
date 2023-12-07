import React from "react";
import HumpbackWhale1 from "../../public/Assets/HWhale1.png";
import HumpbackWhale2 from "../../public/Assets/HWhale2.png";
import HumpbackWhale3 from "../../public/Assets/HWhale3.png";
import HumpbackWhale3D from "../components/HumpbackWhale3D";

const HumpbackWhale = () => {
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
        Humpback Whale
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
          src={HumpbackWhale1}
          alt="Humpback Whale 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={HumpbackWhale2}
          alt="Humpback Whale 2"
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
        <h2>Scientific Name: Megaptera novaeangliae</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 40-50 feet
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 25-40 tons
        </div>
      </div>
      <img
          src={HumpbackWhale3}
          alt="Humpback Whale 3"
          style={{
            maxWidth: "90%",
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
            Humpback whales are known for their complex and beautiful songs, which can last up to 20 minutes and be heard for miles.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are acrobatic whales, often breaching and slapping their fins on the water's surface.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Humpback whales undertake long migrations, traveling thousands of miles between feeding and breeding grounds.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These whales are filter feeders, using baleen plates to capture small fish and krill.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Humpback whales are known for their conservation success story, as their populations have rebounded following protection measures.
          </li>
        </ul>
      </div>

      <iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/glxULceEEjA"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  style={{
    marginBottom: "20px",
  }}
></iframe>


      <div>
        <HumpbackWhale3D />
      </div>
    </div>
  );
};

export default HumpbackWhale;
