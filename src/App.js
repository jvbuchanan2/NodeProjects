import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import OrganizationPage from "./components/organazations/OrganizationPage";



function App() {
  return (
    <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/orgs" component={OrganizationPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
  );
}

export default App;
