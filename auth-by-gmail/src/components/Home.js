import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from '../store/actions/index';

import InputFrom from './InputForm';
import InputList from './InputList';

const Home = (props) => {
  let user = (
    <div>
      <h3>{props.userName}</h3>
      <h3>{props.userEmail}</h3>
      <img src={props.userImage} />
    </div>
  );
  return (
    <div>
      <h1>this is Your profile</h1>
      <hr />
      {props.isAuthenticate ? 
      <div>
        {user}
        <hr />
        <InputFrom />
        <InputList />
      </div> 
      : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.auth.token,
    userName: state.auth.userName,
    userEmail: state.auth.userEmail,
    userImage: state.auth.userImage,
  };
};


export default connect(mapStateToProps)(Home);
