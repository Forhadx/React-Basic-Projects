import * as actionTypes from "../actions/actionTypes";

const initialState = {
  inputData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_IN_SUCCESS:
      //console.log('x ',state.inputData)
      const newData = {
        ...action.data,
        id: action.id,
      };
      return {
        ...state,
        inputData: state.inputData.concat(newData),
      };
    case actionTypes.INPUT_LIST_SUCCESS:
      // console.log(state.inputData)
      return {
        ...state,
        inputData: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
