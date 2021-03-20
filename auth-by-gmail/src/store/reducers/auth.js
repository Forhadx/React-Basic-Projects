import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  userImage: null,
  userName: null,
  userEmail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        userImage: action.image,
        userName: action.name,
        userEmail: action.email,
        error: null,
      };
    case actionTypes.AUTH_FAIL:
      console.log("error: ", action.error);
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        userImage: null,
        userName: null,
        userMail: null,
      };
    default:
      return state;
  }
};

export default reducer;
