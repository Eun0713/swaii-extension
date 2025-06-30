import { useEffect } from "react";

import Router from "@/Router";
import { initDefaultGestures } from "@/utils/gestureStorage";

function App() {
  useEffect(() => {
    initDefaultGestures();
  }, []);

  return <Router />;
}

export default App;
