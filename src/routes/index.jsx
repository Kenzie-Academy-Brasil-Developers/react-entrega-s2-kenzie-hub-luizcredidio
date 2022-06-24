import { Route } from "react-router-dom";
import SignUp from "../pages/signUp";
import SignIn from "../pages/signIn";
import Dashboard from "../pages/Dashboard"


export default function Routes(){
    return (
        <Routes>
            <Route path="/">
                <SignUp path="/signUp"/>
                <SignIn path="/signIn"/>
                <Dashboard path="/dashboard"/>
            </Route>
        </Routes>

    )
}