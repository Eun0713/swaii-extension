import { useEffect } from "react";

import Router from "@/Router";
import { initDefaultGestures } from "@/utils/gesture/gestureStorage";

function App() {
  useEffect(() => {
    initDefaultGestures();
  }, []);

  return <Router />;
}

export default App;
