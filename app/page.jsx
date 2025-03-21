"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ColorSchemesExample from "./components/Navbar";
import Loader2 from "./Loader2"; // Assuming you still want to keep this loader

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    // Simulate a loading effect on component mount
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setInputValue(capitalizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    // Simulate an API call or some async operation
    const timer = setTimeout(() => {
      setLoading(false); // Reset loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  };

  return (
    <div>
      <ColorSchemesExample />
      <div className="Titre">
        <h4>BIENVENUE SUR LA METEO DE KADIR</h4>
      </div>
      <div>
        {loading ? ( // Show loader when loading
          <Loader2 /> // Use Loader2 component for loading
        ) : (
          // Show form when not loading
          <form className="con" onSubmit={handleSubmit}>
            <input
              className="inputcon"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Tapez une ville"
            />
            <Link href={`/${encodeURIComponent(inputValue)}`}>
              <button className="AHTAGRANDMERE" type="submit">
                Recherche
              </button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
