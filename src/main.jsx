import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

const isProd = process.env.VITE_NODE_ENV === "production";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={isProd ? "/Obiymy-front/" : "/"}>
      <ReactLenis root>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </React.StrictMode>
);
