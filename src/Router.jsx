import { createBrowserRouter } from "react-router-dom";

import AddPattern from "@/pages/AddPattern";
import CustomGesture from "@/pages/CustomGesture";
import EntryPoint from "@/pages/EntryPoint";
import Settings from "@/pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPoint />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/settings/add",
    element: <AddPattern />,
  },
  {
    path: "/settings/custom",
    element: <CustomGesture />,
  },
]);

export default router;
