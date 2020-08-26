import React from "react";

import "./Card.scss";

const Card = ({ title, description, priceDescription, conditions }) => {
  return (
    <div className="main-card-container wrapper">
      <div className="card">
        <div className="front-of-card">
          <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="back-of-card">
          <div className="text">
            <h3>{priceDescription}</h3>
            <p>{conditions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
