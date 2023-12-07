import React from "react";
import Shrimp1 from "../../public/Assets/Shrimp1.png";
import Shrimp2 from "../../public/Assets/Shrimp2.png";
import Shrimp3 from "../../public/Assets/Shrimp3.png";

const ShrimpVideo = "https://www.youtube.com/embed/TXXsUL3qlq8";

const Shrimp = () => {
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
        Shrimp
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
          src={Shrimp1}
          alt="Shrimp 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Shrimp2}
          alt="Shrimp 2"
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
        <h2>Scientific Name: Crangon crangon</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: Varies, typically 3 to 4 inches
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: Varies, typically 1 to 2 ounces
        </div>
      </div>
      <img
          src={Shrimp3}
          alt="Shrimp 3"
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
            Common Shrimp (Crangon crangon) is a small shrimp species found in coastal waters of the northeastern Atlantic Ocean.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They have a slender body, translucent appearance, and are well-adapted for life on the seafloor.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Common Shrimp are known for their distinctive upward-curving rostrum (pointed extension on the head).
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are an important part of marine ecosystems, serving as both prey for larger species and playing a role in nutrient cycling.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Common Shrimp are commercially harvested for human consumption and are a popular seafood choice in various dishes.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={ShrimpVideo}
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

export default Shrimp;
