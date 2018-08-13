import * as React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import ResultsPage from "./ResultsPage";

export default () => (
  <Switch>
    <Route path="/" exact={true} component={MainPage} />
    <Route path="/search" component={ResultsPage} />
  </Switch>
);
