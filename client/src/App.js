import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import NearBy from "./components/NearBy/NearBy";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/nearby" exact component={NearBy} />
      <Route component={Landing} />
    </Switch>
  );
};

export default App;
