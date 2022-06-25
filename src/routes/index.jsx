import { Route, Switch } from "react-router-dom";
import SignUp from "../pages/signUp";
import SignIn from "../pages/signIn";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <SignUp path="/signUp" />
      </Route>
      <Route>
        <SignIn exact path="/signIn" />
      </Route>
      <Route>
        <Dashboard path="/dashboard" />
      </Route>
    </Switch>
  );
}
