// Loader.js
import React from 'react';
import './Loader.css'; // Import the CSS file for styling the loader

const Loader = () => {
  return (
    <div className="loader">
      <div className="hypnotic"></div> {/* Use the hypnotic loader */}
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
