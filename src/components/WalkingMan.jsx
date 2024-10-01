import React from "react";
import "./WalkingMan.css";

const WalkingMan = () => {
  return (
    <div className="walking-area">
      <div className="man-container">
        <div className="man">
          <span className="head"></span>
          <span className="body"></span>
          <span className="left-leg"></span>
          <span className="right-leg"></span>
          <span className="left-arm"></span>
          <span className="right-arm"></span>
        </div>
      </div>
    </div>
  );
};

export default WalkingMan;
