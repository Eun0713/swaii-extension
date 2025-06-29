import React from "react";
import { Routes, Route } from "react-router-dom";

import AddPattern from "@/pages/AddPattern";
import CustomGesture from "@/pages/CustomGesture";
import EntryPoint from "@/pages/EntryPoint";
import Settings from "@/pages/Settings";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<EntryPoint />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/add" element={<AddPattern />} />
      <Route path="/settings/custom" element={<CustomGesture />} />
    </Routes>
  );
};

export default Router;
