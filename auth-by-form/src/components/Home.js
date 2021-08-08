import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import InputFrom from "./InputForm";
import InputList from "./InputList";

const Home = (props) => {
  let user = (
    <div>
      <h3>User log in now!!</h3>
    </div>
  );
  return (
    <div>
      <hr />
      {props.isAuthenticate ? (
        <div>
          <h1>this is Your profile</h1>
          {user}
          <hr />
          <InputFrom />
          <InputList />
        </div>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.auth.token,
  };
};

export default connect(mapStateToProps)(Home);
