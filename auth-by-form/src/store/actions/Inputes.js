import axios from "axios";
import * as actionTypes from "./actionTypes";

export const inputSuccess = (id, data) => {
  return {
    type: actionTypes.INPUT_IN_SUCCESS,
    id: id,
    data: data,
  };
};

export const inputIn = (data, token) => {
  return (dispatch) => {
    axios.post("https://auth-by-form-default-rtdb.firebaseio.com/AllInputes.json?auth=" + token , data)
      .then((response) => {
        dispatch(inputSuccess(response.data.name, data));
      })
      .catch((err) => {
        console.log("error: ", err);
      });
      
  };
};

export const InputFetchSuccess = (data) => {
  return {
    type: actionTypes.INPUT_LIST_SUCCESS,
    data: data,
  };
};

export const InputFetch = (token, userId) => {
  const queryParams =
    "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
  return (dispatch) => {
    axios
      .get(
        "https://auth-by-form-default-rtdb.firebaseio.com/AllInputes.json" + queryParams
      )
      .then((response) => {
        const fetchPosts = [];
        for (let key in response.data) {
          fetchPosts.push({
            ...response.data[key],
            id: key,
          });
        }
        dispatch(InputFetchSuccess(fetchPosts));
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };
};
