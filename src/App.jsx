import { useState, useEffect } from "react";
import LoadingScreen from "./components/loadingScreen.jsx";
import Router from "./components/Router";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6700);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <LoadingScreen /> : <Router />}</>;
}

export default App;
