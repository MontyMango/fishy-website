import React from "react";
import Bass1 from "../../public/Assets/Bass1.png";
import Bass2 from "../../public/Assets/Bass2.png";
import Bass3 from "../../public/Assets/Bass3.png";

const Bass = () => {
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
       Bass
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
          src={Bass1}
          alt="Bass 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={Bass2}
          alt="Bass 2"
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
        <h2>Scientific Name: Micropterus salmoides</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 15-24 inches
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 2-10 pounds
        </div>
      </div>
      <img
          src={Bass3}
          alt="Bass 3"
          style={{
            maxWidth: "50%",
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
            The largemouth bass is one of the most popular game fish in North America.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They are known for their distinctive appearance, including a large mouth that extends past the eye.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Largemouth bass are opportunistic predators and feed on a variety of prey, including fish, insects, and even small mammals.
          </li>
          <li style={{ marginBottom: "10px" }}>
            During the spawning season, male largemouth bass create nests in shallow water and fiercely guard the eggs until they hatch.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Largemouth bass have a remarkable ability to adapt to different environments, making them widespread and highly sought after by anglers.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/HxjLc9OJNqU?si=MijySeoxJT7xGuEA&amp;start=5"
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

export default Bass;
