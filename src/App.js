import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import LearnReact from "./pages/LearnReact/LearnReact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="App-link">Home</Link>
        <Link to="/learn-react" className="App-link">
          Learn React
        </Link>
        <Link to="/about" className="App-link">About us</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/learn-react">
            <LearnReact />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
