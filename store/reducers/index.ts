import { combineReducers } from 'redux';

import sampleReducer from './sampleReducer';
import notifyReducer from './notifyReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    sampleReducer,
    notifyReducer,
    authReducer
});

export default rootReducer;