import React from "react";
import OTurtle1 from "../../public/Assets/OTurtle1.png";
import OTurtle2 from "../../public/Assets/OTurtle2.png";
import OTurtle3 from "../../public/Assets/OTurtle3.png";
import BoxTurtle3D from "../components/BoxTurtle3D";

const OrnateBoxTurtleVideo = "https://www.youtube.com/embed/1Fp711cMn20";

const OrnateBoxTurtle = () => {
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
        Ornate Box Turtle
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
          src={OTurtle1}
          alt="Ornate Box Turtle 1"
          style={{
            maxWidth: "40%",
            marginBottom: "10px",
          }}
        />
        <img
          src={OTurtle2}
          alt="Ornate Box Turtle 2"
          style={{
            maxWidth: "60%",
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
        <h2>Scientific Name: Terrapene ornata</h2>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Size/Length: 4-6 inches
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          Average Weight: 1-2 pounds
        </div>
      </div>
      <img
          src={OTurtle3}
          alt="Ornate Box Turtle 3"
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
            Ornate box turtles are native to the central United States and are known for their distinct yellow markings on a dark background.
          </li>
          <li style={{ marginBottom: "10px" }}>
            They have a unique hinge on their plastron (bottom shell) that allows them to completely close and protect themselves within their shell.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Ornate box turtles have a varied diet, including insects, small fruits, and vegetation.
          </li>
          <li style={{ marginBottom: "10px" }}>
            These turtles are known for their slow movement and are often found in grasslands, prairies, and woodland areas.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Ornate box turtles have a long lifespan and can live for several decades in captivity.
          </li>
        </ul>
      </div>

      <iframe
        width="100%"
        height="315"
        src={OrnateBoxTurtleVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          marginBottom: "20px",
        }}
      ></iframe>

      <div>
        <BoxTurtle3D />
      </div>
    </div>
  );
};

export default OrnateBoxTurtle;
