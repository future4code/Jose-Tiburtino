import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details">
          <TripDetailsPage />
        </Route>
        <Route exact path="/logout">
          <Redirect to="/" />
        </Route>
        <Route path="/">
          <p>Error</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
