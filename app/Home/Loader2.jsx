// components/Loader2.jsx

import React from 'react';
import './loader2.css'; // Import the CSS for styling

const Loader2 = () => {
  return (
    <div className="loader-container"> {/* Use loader-container to center it */}
      <div className="loader">
        <div className="hypnotic"></div> {/* Use hypnotic loader */}
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader2;
