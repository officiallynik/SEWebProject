import { combineReducers } from 'redux';

import sampleReducer from './sampleReducer';
import notifyReducer from './notifyReducer';

const rootReducer = combineReducers({
    sampleReducer,
    notifyReducer
});

export default rootReducer;