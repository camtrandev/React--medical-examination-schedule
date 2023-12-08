

import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles:[],
    position:[]
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('camtrandev start: ', action)
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState= {...state}
            copyState.genders = action.data;
            console.log(copyState)
            return {
                ...copyState
            }

        case actionTypes.FETCH_GENDER_FAILED:
            console.log('camtrandev failed: ', action)
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;