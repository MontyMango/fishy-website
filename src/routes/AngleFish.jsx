import React from "react";
import AngleFish1 from "../../public/Assets/AngleFish1.png";
import AngleFish2 from "../../public/Assets/AngleFish2.png";
import AngleFish3 from "../../public/Assets/AngleFish3.png";

function AngleFish() {
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
        Angelfish
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
          src={AngleFish1}
          alt="Angelfish 1"
          style={{
            maxWidth: "30%",
            marginBottom: "10px",
          }}
        />
        <img
          src={AngleFish2}
          alt="Angelfish 2"
          style={{
            maxWidth: "30%",
            marginBottom: "10px",
          }}
        />

        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "20px",
            color: "#ddd", // Lighter text color for info
          }}
        >
          <h2>Scientific Name: Holacanthus Ciliaris</h2>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            Average Size/Length: Up to 18 in
          </div>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            Average Weight: Up to 3.5lbs
          </div>
        </div>

        <img
          src={AngleFish3}
          alt="Angelfish 3"
          style={{
            maxWidth: "30%",
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
            Angelfish are known for their distinct and graceful movements,
            resembling the shape of an angel's wings.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These fish are native to the Amazon River basin and are found in
            slow-moving waters.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Angelfish are omnivores, feeding on a diet of small fish, insects,
            and vegetation.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are popular in freshwater aquariums due to their striking
            appearance and vibrant colors.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Angelfish are known to form pairs and exhibit interesting mating
            rituals, including cleaning a flat surface for egg-laying.
          </li>
        </ul>
      </div>

      <iframe
        title="Angelfish Fun Facts"
        src="https://www.youtube.com/embed/50quP6jpuss"
        style={{
          width: "100%",
          height: "400px",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default AngleFish;
