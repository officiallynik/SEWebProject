import Axios from '../../helpers/axios';

import * as actionTypes from '../actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token,
            user
        }
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
    localStorage.removeItem('name');
    localStorage.removeItem('userType');
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
        // let url = '/login'; 
        // Axios.post(url, authData)
        //     .then(response => {
        //         if(isRemember){
        //             localStorage.setItem('token', response.data.token);
        //             localStorage.setItem('name', response.data.user.name);
        //             localStorage.setItem('userType', response.data.user.userType);
        //         }

        //         dispatch(authSuccess(response.data.token, response.data.user));
        //     })
        //     .catch(err => {
        //         dispatch(authFail(err.response.data.error));
        //     });

        // setTimeout(() => {
        //     dispatch(authSuccess("sdghfjksdhfjkhsdklj", {
        //         name: "Nikhil",
        //         userType: "farmer"
        //     }))
        // }, 3000)
        setTimeout(() => {
            dispatch(authFail("wrong credentials"))
        }, 3000)
    };
};

export const authSignUp = (userType, reqBody) => {
    return dispatch => {
        dispatch(authStart());
        
        let url = `/${userType}/signup`; 
        // Axios.post(url, reqBody)
        //     .then(response => {
        //         localStorage.setItem('token', response.data.token);
        //         localStorage.setItem('name', response.data.user.name);
        //         localStorage.setItem('userType', userType);

        //         console.log(response);

        //         dispatch(authSuccess(response.data.token, response.data.user));
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         dispatch(authFail(err.response));
        //     });
        setTimeout(() => {
            dispatch(authFail("wrong credentials"))
        }, 3000)
    };
};

export const authClearErrors = () => {
    return {
        type: actionTypes.AUTH_CLEAR_ERROR
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};