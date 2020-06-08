//Importing Dependencies
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing components
import App from "./App";
import Nav from "./components/Nav/Nav";

// Importing style sheets
import "./index.css";

// Router
// =============================================================

ReactDOM.render(
  <Router>
    <Nav />
    <>
      <Switch>
        {/* to check the path and point in the right direction */}

        {/* Default Route */}
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
