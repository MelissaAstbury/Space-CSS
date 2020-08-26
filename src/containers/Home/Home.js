import React from "react";

import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
