import React from "react";

import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <div className="card-container">
        <Card
          title="Toddler Time"
          description="This is a time your little ones can see how bright the stars are!"
          priceDescription="Sign up today for only £15.99"
          conditions="Proce for 1 Adult and 1 Child - under 2's go FREE"
        />
        <Card
          title="Planet Spotting"
          description="Enjoy exploring with the family? This is the one for you!"
          priceDescription="Sign up today for only £9.99"
          conditions="Must be a family of 3 minimum"
        />
        <Card
          title="Day Dazing"
          description="Spend a whole day leanring about the solar system. You will be an expert at the end of the day"
          priceDescription="Sign up today for only 17.99"
          conditions="This price is for ages 3-15. By 2 and get the 2nd ticket 50% off"
        />
      </div>
    </div>
  );
};

export default Home;
