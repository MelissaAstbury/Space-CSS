import React from "react";

import "./Card.scss";

const Card = () => {
  return (
    <div className="main-card-container wrapper">
      <div className="card">
        <div className="front-of-card">
          <div className="text">
            <h3>Space Toddlers</h3>
          </div>
        </div>
        <div className="back-of-card">
          <div className="text">
            <h3>Come join us for only £15.99</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
