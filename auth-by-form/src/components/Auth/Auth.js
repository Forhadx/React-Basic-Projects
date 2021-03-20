import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions/index";

import "./Auth.css";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const inputSubmitHandler = (event) => {
    event.preventDefault();
    console.log(isSignup);
    props.onAuth(email, password, isSignup);
    setEmail('');
    setPassword('');
  };

  const switchButtonHandler = () => {
    setIsSignup(!isSignup);
  };

  let errorMessage = null;
  if(props.error){
      errorMessage = <h5>{props.error.message}</h5>;
  }
  let redirect = <Redirect to='/' />
  return (
    <div className="auth">
      {props.isAuthenticate ? redirect : null}
      <form onSubmit={inputSubmitHandler} className="auth-form">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isSignup ? "Sign-up" : "Sign-in"}</button>

        <p onClick={switchButtonHandler}>
          Are you {isSignup ? "Sign-in" : "Sign-up"} ?
        </p>
        {errorMessage}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.token,
    error: state.error,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
