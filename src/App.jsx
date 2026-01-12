import { useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  useEffect(() => {
    // Osnovna detekcija za globalne klase
    const userAgent = navigator.userAgent.toLowerCase();
    const vendor = navigator.vendor || "";
    
    // Detekcija Samsung uređaja
    const isSamsung = 
      /samsung/i.test(userAgent) || 
      /sm-/i.test(userAgent) || 
      vendor.toLowerCase().includes('samsung') ||
      /sec/i.test(userAgent);
    
    // Dodaj klase na body za globalne CSS optimizacije
    if (isSamsung) {
      document.body.classList.add("samsung-device");
      console.log("App: Samsung device detected");
    }
    
    // Cleanup
    return () => {
      document.body.classList.remove("samsung-device");
    };
  }, []);

  return <HomePage />;
}

export default App;
