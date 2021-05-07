import React from "react";
import { Switch, Route } from "react-router-dom";
import ErrorPage from "../components/global-components/ErrorPage";
import HomePage from "../components/home-page/HomePage";
import SingleProfile from "../components/single-profile/SingleProfile";
const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile/:name/q?=:slug" component={SingleProfile} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Router;
