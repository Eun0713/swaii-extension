import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <button className="bg-blue-500 px-4 py-2 text-white">버튼</button>
  </StrictMode>
);
