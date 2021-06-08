import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <>
    <Router>
      <Sidebar />

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/products" component={Products}/>
      </Switch>
    </Router>
    </>
  )
}

export default App
