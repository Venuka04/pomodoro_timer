import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SettingsContextProvider from "./context/SettingsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </StrictMode>
);
