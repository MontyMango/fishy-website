import React from "react";
import Flounder1 from "../../public/Assets/Flounder1.png";
import Flounder2 from "../../public/Assets/Flounder2.png";
import Flounder3 from "../../public/Assets/Flounder3.png";

const FlounderVideo = "https://www.youtube.com/embed/EIMRSt40OMk";

const Flounder = () => {
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
        Flounder
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
          src={Flounder1}
          alt="Flounder 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Flounder2}
          alt="Flounder 2"
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
        <h2>Scientific Name: Paralichthys olivaceus</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 12-24 inches
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 2-5 pounds
        </div>
      </div>

      <img
          src={Flounder3}
          alt="Flounder 3"
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
            Flounders are flatfish known for their distinctive asymmetrical shape.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are masters of camouflage, capable of changing their skin color to match their surroundings.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Flounders have both eyes on one side of their body, and as they mature, one eye migrates to the other side.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are bottom-dwellers and often bury themselves in the sand or mud to ambush prey.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Flounders are popular targets for anglers due to their delicious taste and the challenge they present in catching.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={FlounderVideo}
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

export default Flounder;
