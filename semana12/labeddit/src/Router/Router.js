import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../Screens/LoginPage/LoginPage";
import SignUpPage from "../Screens/SignUpPage/SignUpPage";
import FeedPage from "../Screens/FeedPage/FeedPage";
import ErrorPage from "../Screens/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact patch="/">
          <LoginPage />
        </Route>
        <Route exact patch="/cadastro">
          <SignUpPage />
        </Route>
        <Route exact patch="/feed">
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
