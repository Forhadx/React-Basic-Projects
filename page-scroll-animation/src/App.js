import React from 'react';
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import Fade from './Fade/Fade';
import Flip from './Flip/Flip';
import Slide from './Slide/Slide';
import Zoom from './Zoom/Zoom';

import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="navbar">
          <li><NavLink to="/fade"> Fade </NavLink></li>
          <li><NavLink to="/flip"> Flip </NavLink></li>
          <li><NavLink to="/slide"> Slide </NavLink></li>
          <li><NavLink to="/zoom"> Zoom </NavLink></li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route path="/fade" component={Fade} />
          <Route path="/flip" component={Flip} />
          <Route path="/slide" component={Slide} />
          <Route path="/zoom" component={Zoom} />
          <Redirect path="/fade" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
