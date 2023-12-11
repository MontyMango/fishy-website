import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";
import Bass from "./routes/Bass";
import Crab from "./routes/Crab";
import ClownFish from "./routes/ClownFish";
import Dolphin from "./routes/Dolphin";
import AngleFish from "./routes/AngleFish";
import Flounder from "./routes/Flounder";
import HumpbackWhale from "./routes/HumpbackWhale";
import KingPenguin from "./routes/KingPenguin";
import PacificOctopus from "./routes/PacificOctopus";
import SouthBlueRingOctopus from "./routes/SouthBlueRingOctopus";
import Orca from "./routes/Orca";
import Seahorse from "./routes/Seahorse";
import Seal from "./routes/Seal";
import Shrimp from "./routes/Shrimp";
import Walrus from "./routes/Walrus";
import WhiteShark from "./routes/WhiteShark";
import OrnateBoxTurtle from "./routes/OrnateBoxTurtle";
import AnglerFIsh from "./routes/AnglerFIsh";
import BWhale from "./routes/BWhale";
import SeaUrchin from "./routes/SeaUrchin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Helmet>
          <title>Dive Below</title>
        </Helmet>
        <App />
      </>
    ),
  },
  {
    path: "/angleFish",
    element: (
      <>
        <Helmet>
          <title>Angelfish</title>
        </Helmet>
        <AngleFish />
      </>
    ),
  },
  {
    path: "/anglerFish",
    element: (
      <>
        <Helmet>
          <title>Anglerfish</title>
        </Helmet>
        <AnglerFIsh />
      </>
    ),
  },
  {
    path: "/bass",
    element: (
      <>
        <Helmet>
          <title>Bass</title>
        </Helmet>
        <Bass />
      </>
    ),
  },
  {
    path: "/bluewhale",
    element: (
      <>
        <Helmet>
          <title>Blue Whale</title>
        </Helmet>
        <BWhale />
      </>
    ),
  },
  {
    path: "/clownFish",
    element: (
      <>
        <Helmet>
          <title>Clown Fish</title>
        </Helmet>
        <ClownFish />
      </>
    ),
  },
  {
    path: "/crab",
    element: (
      <>
        <Helmet>
          <title>Crab</title>
        </Helmet>
        <Crab />
      </>
    ),
  },
  {
    path: "/dolphin",
    element: (
      <>
        <Helmet>
          <title>Dolphin</title>
        </Helmet>
        <Dolphin />
      </>
    ),
  },
  {
    path: "/flounder",
    element: (
      <>
        <Helmet>
          <title>Flounder</title>
        </Helmet>
        <Flounder />
      </>
    ),
  },
  {
    path: "/humpbackWhale",
    element: (
      <>
        <Helmet>
          <title>Humpback Whale</title>
        </Helmet>
        <HumpbackWhale />
      </>
    ),
  },
  {
    path: "/kingPenguin",
    element: (
      <>
        <Helmet>
          <title>King Penguin</title>
        </Helmet>
        <KingPenguin />
      </>
    ),
  },
  {
    path: "/octopus",
    element: (
      <>
        <Helmet>
          <title>Pacific Octopus</title>
        </Helmet>
        <PacificOctopus />
      </>
    ),
  },
  {
    path: "/octo",
    element: (
      <>
        <Helmet>
          <title>South Blue Ring Octopus</title>
        </Helmet>
        <SouthBlueRingOctopus />
      </>
    ),
  },
  {
    path: "/orca",
    element: (
      <>
        <Helmet>
          <title>Orca</title>
        </Helmet>
        <Orca />
      </>
    ),
  },
  {
    path: "/seahorse",
    element: (
      <>
        <Helmet>
          <title>Seahorse</title>
        </Helmet>
        <Seahorse />
      </>
    ),
  },
  {
    path: "/seaurchin",
    element: (
      <>
        <Helmet>
          <title>Sea Urchin</title>
        </Helmet>
        <SeaUrchin />
      </>
    ),
  },
  {
    path: "/seal",
    element: (
      <>
        <Helmet>
          <title>Seal</title>
        </Helmet>
        <Seal />
      </>
    ),
  },
  {
    path: "/shark",
    element: (
      <>
        <Helmet>
          <title>White Shark</title>
        </Helmet>
        <WhiteShark />
      </>
    ),
  },
  {
    path: "/shrimp",
    element: (
      <>
        <Helmet>
          <title>Shrimp</title>
        </Helmet>
        <Shrimp />
      </>
    ),
  },
  {
    path: "/turtle",
    element: (
      <>
        <Helmet>
          <title>Ornate Box Turtle</title>
        </Helmet>
        <OrnateBoxTurtle />
      </>
    ),
  },
  {
    path: "/walrus",
    element: (
      <>
        <Helmet>
          <title>Walrus</title>
        </Helmet>
        <Walrus />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
