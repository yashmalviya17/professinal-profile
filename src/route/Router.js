import React from "react";
import { Switch, Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/HomePage";
const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile/:name/q?=:slug" component={DynamicForm} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Router;
