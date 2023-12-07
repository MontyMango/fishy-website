import React from "react";
import POcto1 from "../../public/Assets/POcto1.png";
import POcto2 from "../../public/Assets/POcto2.png";
import POcto3 from "../../public/Assets/POcto3.png";

const PacificOctopusVideo = "https://www.youtube.com/embed/lo_l6b0-tbQ";

const PacificOctopus = () => {
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
        Pacific Octopus
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
          src={POcto1}
          alt="Pacific Octopus 1"
          style={{
            maxWidth: "50%",
            marginBottom: "10px",
          }}
        />
        <img
          src={POcto2}
          alt="Pacific Octopus 2"
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
        <h2>Scientific Name: Enteroctopus dofleini</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 10-16 feet (3-5 meters)
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 50-110 pounds (23-50 kilograms)
        </div>
      </div>
      <img
          src={POcto3}
          alt="Pacific Octopus 3"
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
            The Pacific octopus is the largest octopus species and is known for its intelligence and problem-solving abilities.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They have a short lifespan, typically living for 3 to 5 years.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Pacific octopuses are carnivorous and feed on crabs, clams, small fish, and other marine creatures.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These octopuses have a remarkable ability to change color and texture to blend in with their surroundings.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Pacific octopuses are solitary creatures and are known for their complex behaviors, including building dens and using tools.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={PacificOctopusVideo}
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

export default PacificOctopus;
