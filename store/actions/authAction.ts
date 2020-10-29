import Axios from '../../helpers/axios';

import * as actionTypes from '../actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, name, _id, userType) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token,
            name,
            userType,
            _id
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
        // console.log(authData)
        let url = '/login'; 
        Axios.post(url, authData)
            .then(response => {
                if(isRemember){
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('name', response.data.user.name);
                    localStorage.setItem('userType', response.data.userType);
                    localStorage.setItem('_id', response.data.user._id);
                }

                console.log("login res: ", response);
                dispatch(authSuccess(response.data.token, response.data.user.name, response.data.user._id, response.data.userType));
            })
            .catch(err => {
                console.log("login err: ", err);
                dispatch(authFail("Wrong Credentials"));
            });

        // setTimeout(() => {
        //     dispatch(authSuccess("sdghfjksdhfjkhsdklj", {
        //         name: "Nikhil",
        //         userType: "farmer"
        //     }))
        // }, 3000)
        // setTimeout(() => {
        //     dispatch(authFail("wrong credentials"))
        // }, 3000)
    };
};

export const authSignUp = (userType, reqBody) => {
    return dispatch => {
        dispatch(authStart());
        
        let url = `/${userType}/signup`; 
        Axios.post(url, reqBody)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('name', response.data.user.name);
                localStorage.setItem('userType', userType);
                localStorage.setItem('_id', response.data.user._id);

                // console.log(response);

                dispatch(authSuccess(response.data.token, response.data.user.name, response.data.user._id, userType));
            })
            .catch(err => {
                // console.log(err);
                dispatch(authFail("failed signing up"));
            });
        // setTimeout(() => {
        //     dispatch(authFail("wrong credentials"))
        // }, 3000)
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

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const name = localStorage.getItem('name');
            const userType = localStorage.getItem('userType');
            const _id = localStorage.getItem('_id');
            dispatch(authSuccess(token, name, _id, userType));
        }
    };
};