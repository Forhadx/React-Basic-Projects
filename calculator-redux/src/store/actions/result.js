import * as actionTypes from './actiontypes';

export const add = (val) =>{
    return{
        type: actionTypes.ADD,
        value: val
    };
};

export const subtract = (val) =>{
    return{
        type: actionTypes.SUBTRACT,
        value: val
    };
};

export const multipy = (val) =>{
    return{
        type: actionTypes.MULTIPY,
        value: val
    };
};

export const division = (val) =>{
    return{
        type: actionTypes.DIVISION,
        value: val
    };
};

export const store_result = () =>{
    return{
        type: actionTypes.STORE_RESULT
    };
};

export const reset = () =>{
    return{
        type: actionTypes.RESET
    };
};
