import React from "react";
import { Router as ReactRouter, Route, Switch, Redirect } from "react-router";
import { history } from "../redux/store";

import FlightSearch from "../containers/Flight/FlightSearch";
import FlightCreate from "../containers/Flight/FlightCreate";
import Header from "../components/header";

const routes = (
  <ReactRouter history={history}>
    <Header history={history} />
    <Switch>
      <Route exact path='/' component={FlightSearch} />
      <Route exact path='/create' component={FlightCreate} />
    </Switch>
  </ReactRouter>
);

export default routes;
