import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../Screens/LoginPage/LoginPage";
import FeedPage from "../Screens/FeedPage/FeedPage";
import ErrorPage from "../Screens/ErrorPage/ErrorPage";
import SignUpPage from "../Screens/SignUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
