import * as actionTypes from '../actionTypes';

const initialState: {
    clicks: number
} = {
    clicks: 0
}

const sampleReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type){
        case actionTypes.SAMPLE_ACTION:
            return {
                ...state,
                clicks: state.clicks + 1
            };
        default:
            return state;
    }
}

export default sampleReducer;