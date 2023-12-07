import React from "react";
import Walrus1 from "../../public/Assets/Walrus1.png";
import Walrus2 from "../../public/Assets/Walrus2.png";
import Walrus3 from "../../public/Assets/Walrus3.png";

const WalrusVideo = "https://www.youtube.com/embed/BL5NohNcofI";

const Walrus = () => {
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
        Walrus
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
          src={Walrus1}
          alt="Walrus 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Walrus2}
          alt="Walrus 2"
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
        <h2>Scientific Name: Odobenus rosmarus</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: Up to 11 feet
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: Up to 3,700 pounds
        </div>
      </div>
      <img
          src={Walrus3}
          alt="Walrus 3"
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
            Walruses are known for their long tusks, which are actually elongated canine teeth.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They use their tusks for various purposes, including hauling out onto ice, creating holes in the ice, and for defense.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Walruses primarily inhabit the Arctic and subarctic regions and are adapted to life in both water and on land.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These marine mammals have a thick layer of blubber that helps insulate them in frigid waters.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Walruses are social animals and can often be found in large colonies, especially during the breeding season.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={WalrusVideo}
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

export default Walrus;
