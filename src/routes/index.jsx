import { Route, Switch } from "react-router-dom";
import SignUp from "../pages/signUp";
import SignIn from "../pages/signIn";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";

export default function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <SignUp />
      </Route>
      <Route exact path="/signIn">
        <SignIn />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
