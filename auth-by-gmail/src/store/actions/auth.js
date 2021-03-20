import * as actionTypes from "./actionTypes";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyCVao6UZW6W4z45aj50czebm7fnfcUlrIg",
    authDomain: "auth-by-f038f.firebaseapp.com"
  });
}

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId, name, email, image) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
    name: name,
    email: email,
    image: image
  };
};

export const authFail = (err) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: err,
  };
};

export const auth = () => {
  return (dispatch) => {
    dispatch(authStart());
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);

        localStorage.setItem("token", result.credential.accessToken);
        localStorage.setItem("userId", result.user.uid);
        localStorage.setItem("name", result.user.displayName);
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("image", result.user.photoURL);

        dispatch(
          authSuccess(
            result.credential.accessToken,
            result.user.uid,
            result.user.displayName,
            result.user.email,
            result.user.photoURL
          )
        );

        //console.log("u: ", result.user);
        //console.log("user: ", result.user.uid);
        //console.log("token: ", result.credential.accessToken);
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("image");
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("signout");
    })
    .catch((error) => {
      console.log(error);
    });
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const image = localStorage.getItem("image");

    if (!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token, userId, name, email, image));
    }
  };
};
