import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

//pages
import {Login, Signup, Home, Cart} from "./pages";

export default function App () {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact>
          <Redirect to="/cart" />
        </Route>
          
          <Route component={Login} path="/login" exact/>
          <Route component={Signup} path="/signup" />
          <Route component={Home} path="/home" />
          <Route component={Cart} path="/cart" />

          {/* not found
          <Route component={NotFound}/>  */}

        </Switch>
      </Router>
    </div>
  );
}
