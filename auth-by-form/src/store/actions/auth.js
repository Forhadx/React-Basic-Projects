import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = err =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: err
    }
}

export const auth = (email, password, isSignup) =>{
    return dispatch =>{
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEP4RYkqQGQCFwlLQ_-ZqI9NtqrwgcNwg';
        
        if(isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEP4RYkqQGQCFwlLQ_-ZqI9NtqrwgcNwg';
        }

        axios.post(url, authData)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId)
                dispatch(checkAuthTimeOut(response.data.expiresIn));
                dispatch(authSuccess(response.data.idToken, response.data.localId))
            })
            .catch(err =>{
                console.log(err)
                dispatch(authFail(err.response.data.error));
            })
    }
}

export const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}


export const checkAuthTimeOut = expirationTime =>{
    return dispatch =>{
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const authCheckState = () =>{
    return dispatch =>{
        const token= localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if(!token){
            dispatch(logout());
        }
        else{
            dispatch(authSuccess(token, userId));
        }
    }
}

