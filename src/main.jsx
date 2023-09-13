import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";
import Bass from "./routes/Bass";
import Crab from "./routes/Crab";

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
    path: "/Bass",
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
    path: "/Crab",
    element: (
      <>
        <Helmet>
          <title>Crab</title>
        </Helmet>
        <Crab />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
