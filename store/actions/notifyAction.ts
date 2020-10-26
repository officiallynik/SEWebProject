import * as actionTypes from '../actionTypes';

export const notifyStart = (msg: string) => {
    return {
        type: actionTypes.NOTIFY_START,
        payload: {
            msg,
            type: "danger"
        }
    }
};

export const notifyStop = () => {
    return {
        type: actionTypes.NOTIFY_STOP
    }
};

export const notifyAction = (msg: string, expirationTime: number) => {
    return dispatch => {
        dispatch(notifyStart(msg));
        setTimeout(() => {
            dispatch(notifyStop());
        }, 1000*expirationTime);
    }
};