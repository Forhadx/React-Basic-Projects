import React, { useEffect } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from './store/actions/index';

import Home from "./components/Home.js";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Auth/Logout";

import "./App.css";



const App = (props) => {
  const { onAutoSignup } = props;
  useEffect(()=>{
    onAutoSignup();
  }, [onAutoSignup])

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Sign-in" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthenticate) {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }

  let AuthRoute = (
    <NavLink to="/Sign-in" activeClassName="active">
      Sign-in
    </NavLink>
  );
  if (props.isAuthenticate) {
    AuthRoute = (
      <NavLink to="/Logout" activeClassName="active">
        Logout
      </NavLink>
    );
  }
  
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>{AuthRoute}</li>
          </ul>
        </nav>
      </header>
      <main>{routes}</main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.auth.token,
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
