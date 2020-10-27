import axios from 'axios';
import Axios from '../../helpers/axios';

import * as actionTypes from '../actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const authLogin = (phone, password, isRemember) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            phone: phone,
            password: password
        };
        let url = '/login'; 
        Axios.post(url, authData)
            .then(response => {
                if(isRemember){
                    localStorage.setItem('token', response.data.idToken);
                }

                dispatch(authSuccess(response.data.token));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};