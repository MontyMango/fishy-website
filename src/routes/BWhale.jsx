import React from "react";
import BWhale1 from "../../public/Assets/BWhale1.png";
import BWhale2 from "../../public/Assets/BWhale2.png";
import BWhale3 from "../../public/Assets/BWhale3.png";

const BWhaleVideo = "https://www.youtube.com/embed/zuwqZtU5vkk";

const BWhale = () => {
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
        Blue Whale
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
          src={BWhale1}
          alt="Blue Whale 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={BWhale2}
          alt="Blue Whale 2"
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
        <h2>Scientific Name: Balaenoptera musculus</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: Up to 100 feet
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: Up to 200 tons
        </div>
      </div>

      <img
        src={BWhale3}
        alt="Blue Whale 3"
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
            The blue whale is the largest animal on Earth, even larger than the
            largest dinosaurs that ever existed.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Despite their massive size, blue whales are filter feeders,
            primarily consuming small shrimp-like animals called krill.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Blue whales have a heart that can weigh as much as a car, and their
            tongue alone can weigh as much as an elephant.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These majestic creatures are found in oceans worldwide and are known
            for their distinctive mottled blue-gray coloration.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Blue whales communicate using low-frequency sounds that can travel
            over long distances in the ocean.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={BWhaleVideo}
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

export default BWhale;
