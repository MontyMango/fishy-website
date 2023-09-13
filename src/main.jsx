import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Fish1 from "./routes/Fish1";
import { Helmet } from "react-helmet";

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
    path: "/Fish1",
    element: (
      <>
        <Helmet>
          <title>Fish 1</title>
        </Helmet>
        <Fish1 />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
