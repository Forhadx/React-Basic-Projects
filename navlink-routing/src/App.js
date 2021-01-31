import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Details from './components/Details';

import "./App.css";

const App= () => {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/details/:id" component={Details} />
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
