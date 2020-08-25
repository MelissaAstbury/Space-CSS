import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
