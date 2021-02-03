import * as actionTypes from  '../actions/actiontypes';

const initialState = {
    result: 0
}

const reducer = ( state=initialState , action ) => {
    
    switch(action.type){

        case actionTypes.ADD:
            return{
                ...state,
                result: state.result + action.value
            }

        case actionTypes.SUBTRACT:
            return{
                ...state,
                result: state.result - action.value
            }

        case actionTypes.MULTIPY:
            return{
                ...state,
                result: state.result * action.value
            }

        case actionTypes.DIVISION:
            return{
                ...state,
                result: state.result / action.value
            }
        case actionTypes.STORE_RESULT:
                return{
                    ...state,
                    result: state.result
                }
        case actionTypes.RESET:
            return{
                ...state,
                result: 0
            }
        default:
            return state
    }
    
}


export default reducer;