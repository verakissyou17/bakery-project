import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { AppProviders } from "./contexts/AppProviders"; 
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </HashRouter>
  </StrictMode>
);
