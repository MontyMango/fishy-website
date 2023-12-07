import React from "react";
import Shark1 from "../../public/Assets/Shark1.png";
import Shark2 from "../../public/Assets/Shark2.png";
import Shark3 from "../../public/Assets/Shark3.png";
import Shark3D from "../components/Shark3D";

const WhiteSharkVideo = "https://www.youtube.com/embed/t82m6vPhsEA";

const WhiteShark = () => {
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
        White Shark
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
          src={Shark1}
          alt="White Shark 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Shark2}
          alt="White Shark 2"
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
        <h2>Scientific Name: Carcharodon carcharias</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: Up to 20 feet
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: Up to 5,000 pounds
        </div>
      </div>
      <img
          src={Shark3}
          alt="White Shark 3"
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
            White sharks are apex predators known for their powerful jaws and serrated teeth.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They have an incredible sense of smell, allowing them to detect prey from miles away.
          </li>
          <li style={{ marginBottom: "10px" }}>
            White sharks are found in oceans around the world, and they often migrate long distances.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Despite their ferocious reputation, white sharks do not typically target humans as prey.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Conservation efforts are in place to protect these magnificent creatures due to their vulnerability.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={WhiteSharkVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          marginBottom: "20px",
        }}
      ></iframe>

      <div>
        <Shark3D />
      </div>
    </div>
  );
};

export default WhiteShark;
