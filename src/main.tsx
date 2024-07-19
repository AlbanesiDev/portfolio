import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./css/variables.css";
import "./css/font.css";
import "./css/reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
