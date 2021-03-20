import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions/index";

import "./Auth.css";

const Auth = (props) => {

  let errorMessage = null;
  if(props.error){
      errorMessage = <h5>{props.error.message}</h5>;
  }
  let redirect = <Redirect to='/' />
  return (
    <div className="auth">
      {props.isAuthenticate ? redirect : null}
      <div>
        <button onClick={props.onAuth}>Sign in with gmail</button>
      </div>
      {errorMessage}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.auth.token,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: () => dispatch(actions.auth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
