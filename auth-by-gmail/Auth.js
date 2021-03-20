import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions/index";

import "./Auth.css";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Auth = (props) => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: "AIzaSyCVao6UZW6W4z45aj50czebm7fnfcUlrIg",
      authDomain: "auth-by-f038f.firebaseapp.com",
    });
  }

  const [name, setName] = useState("");
  const [image, setImage] = useState('');

  const onSubmitHandler = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log('u: ', result.user);
        console.log('user: ',user.uid)
        console.log('token: ',credential.accessToken)
        setName(result.user.displayName);
        setImage(result.user.photoURL)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const onSignOutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth">
      <h4>sign in with google</h4>
      <button onClick={onSubmitHandler}>sign in</button>
      <button onClick={onSignOutHandler}>sign out</button>
      <h3>name: {name}</h3>
      <img src={image} />
    </div>
  );
};

export default Auth;

// <button onClick={onSignOutHandler}>sign out</button>
