import React from "react";
import Dolphin1 from "../../public/Assets/Dolphin1.png";
import Dolphin2 from "../../public/Assets/Dolphin2.png";
import Dolphin3 from "../../public/Assets/Dolphin3.png";
import Dolphin3D from "../components/Dolphin3D";

const Dolphin = () => {
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
        Bottlenose Dolphin
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
          src={Dolphin1}
          alt="Dolphin 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Dolphin2}
          alt="Dolphin 2"
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
        <h2>Scientific Name: Tursiops truncatus</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 10-14 feet
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 600-1,200 pounds
        </div>
      </div>
      <img
          src={Dolphin3}
          alt="Dolphin 3"
          style={{
            maxWidth: "80%",
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
            Bottlenose dolphins are highly intelligent marine mammals known for their playful behavior and social interactions.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are found in warm and temperate seas worldwide and are known to inhabit coastal areas as well as deeper offshore waters.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Bottlenose dolphins communicate using a variety of clicks, whistles, and body language, allowing them to coordinate hunting and social activities.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These dolphins are excellent swimmers and can reach speeds of up to 20 miles per hour.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Bottlenose dolphins display complex social structures and are often observed in groups, called pods, ranging from a few individuals to several dozen.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/VjMn_dVCJyA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          marginBottom: "20px",
        }}
      ></iframe>

      <div>
        <Dolphin3D />
      </div>
    </div>
  );
};

export default Dolphin;
