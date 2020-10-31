import * as actionTypes from '../actionTypes';
import { updateObject } from './helper';

const initialState: {
    isNotify: boolean,
    msg: string | null,
    notifyType: string | null
} = {
    isNotify: false,
    msg: null,
    notifyType: null 
};

const notifyStart = (state, action) => {
    return updateObject(state, {
        isNotify: true,
        msg: action.payload.msg,
        notifyType: action.payload.type
    });
};

const notifyStop = (state, action) => {
    return updateObject(state, {
        isNotify: false,
        msg: null,
        notifyType: null
    });
};

const notifyReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.NOTIFY_START: return notifyStart(state, action);
        case actionTypes.NOTIFY_STOP: return notifyStop(state, action);
        default:
            return state;
    };
};

export default notifyReducer; 