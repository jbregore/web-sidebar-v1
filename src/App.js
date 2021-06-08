import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import {ThemeProvider} from "@material-ui/core";
import theme from "./utils/theme";

//pages
import { Login, Signup, Home, NotFound } from "./pages";

//firebase
import firebase from "./firebase";

//Route
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";

export default function App() {
  const [values, setValues] = useState({
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setValues({ isAuthenticated: true, isLoading: false });
      } else {
        setValues({ isAuthenticated: false, isLoading: false });
      }
    });
  }, []);

  if (values.isLoading) {
    return <p>
      {/* LOADING... */}
      </p>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>

          <PublicRoute 
            component={Login}
            path="/login"
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />

          <PublicRoute 
            component={Signup}
            path="/signup" 
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />

          <PrivateRoute
            component={Home}
            isAuthenticated={values.isAuthenticated}
            path="/home"
          />

          <PublicRoute component={NotFound} />


        </Switch>
      </Router>
    </ThemeProvider>
  );
}
