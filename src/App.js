import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );

  return (
    <React.Fragment>
      <Header />
      {routes}
    </React.Fragment>
  );
};

export default App;
