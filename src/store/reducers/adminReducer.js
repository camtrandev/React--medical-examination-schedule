

import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles:[],
    positions:[],
    users: [],
    topDoctors: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            
            state.isLoadingGender = true;
            return {
                // dùng 3 dấu chấm là nó copy các thuộc tính của biến đằng trước
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            return {
                ...state
            }

        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender =  false;
            state.genders = [];
            return {
                ...state
            }


            //Position
        case actionTypes.FETCH_POSITION_SUCCESS:

            state.positions = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_FAILED:

            state.positions = [];
            return {
                ...state
            }

            //ROLE

        case actionTypes.FETCH_ROLE_SUCCESS:

            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAILED:

            state.roles = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.users = action.users;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USER_FAILED:
            state.users = [];
            return {
                ...state
            }
        
            // nó nhận giá trị từ biến dataDoctor bên adminAction
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctor;
            return {
                ...state
            }
            
        case actionTypes.FETCH_ALL_USER_FAILED:
            state.topDoctors = [];
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;