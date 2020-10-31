import * as actionTypes from '../actionTypes';

export const notifyStart = (msg: string, notifyType) => {
    return {
        type: actionTypes.NOTIFY_START,
        payload: {
            msg,
            type: notifyType
        }
    }
};

export const notifyStop = () => {
    return {
        type: actionTypes.NOTIFY_STOP
    }
};

export const notifyAction = (msg: string, expirationTime: number, notifyType: string) => {
    return dispatch => {
        dispatch(notifyStart(msg, notifyType));
        setTimeout(() => {
            dispatch(notifyStop());
        }, 1000*expirationTime);
    }
};