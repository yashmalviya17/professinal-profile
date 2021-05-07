import React from "react";
import { Switch, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "../home-page/HomePage";
import SingleProfile from "../single-profile/SingleProfile";
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
