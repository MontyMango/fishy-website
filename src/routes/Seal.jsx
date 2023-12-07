import React from "react";
import Seal1 from "../../public/Assets/Seal1.png";
import Seal2 from "../../public/Assets/Seal2.png";
import Seal3 from "../../public/Assets/Seal3.png";

const SealVideo = "https://www.youtube.com/embed/w5UmkVdCnMw";

const Seal = () => {
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
        Seal
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
          src={Seal1}
          alt="Seal 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Seal2}
          alt="Seal 2"
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
        <h2>Scientific Name: Phoca vitulina</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 4 to 6 feet
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 150 to 370 pounds
        </div>
      </div>
      <img
          src={Seal3}
          alt="Seal 3"
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
            Seals are marine mammals that are well-adapted to life in the water.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are known for their streamlined bodies, flippers, and playful behavior.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Seals come in various species, each with its own unique characteristics and habitats.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Some species of seals, such as harbor seals, are known for their distinctive spotted coats.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Seals are excellent swimmers and can spend extended periods in the water, coming ashore to rest and give birth.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={SealVideo}
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

export default Seal;
