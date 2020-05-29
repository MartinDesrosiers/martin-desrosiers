// React Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Router Modules
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// Localization Modules
import './i18n';

// pages for this site
import LandingPage from "./views/LandingPage/LandingPage.js";
import './index.css';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);