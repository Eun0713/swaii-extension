import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Router from "@/Router";
import "@/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Router />
  </HashRouter>
);
