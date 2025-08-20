import { useEffect } from "react";

import Router from "@/Router";
import { initDefaultGestures } from "@/utils/gesture/gestureStorage";

const App = () => {
  useEffect(() => {
    initDefaultGestures();
  }, []);

  return <Router />;
};

export default App;
