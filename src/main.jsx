import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "aos/dist/aos.css";
import { ThemeProviderComponent } from "./components/ThemeProviderComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  </React.StrictMode>
);
