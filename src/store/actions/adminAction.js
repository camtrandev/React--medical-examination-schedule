
import actionTypes from './actionTypes';
import { getAllCodeService, 
    createNewUserService, 
    getAllUsers,
    deleteUserService 
} from '../../services/userService';
import {toast} from "react-toastify";


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            }else{
                dispatch(fetchGenderFailed());
            }
        }catch(e) {
            dispatch(fetchGenderFailed()); 
            console.log('Error',e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


//Position

export const fetchPositionStart = () => {

    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('Error', e)
        }
    }
}


export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})


// ROLE

export const fetchRoleStart = () => {

    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('Error', e)
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

// create a new user Redux
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed")
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('Error', e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})



// All user with redux
export const fetchAllUsersStart = () => {

    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("All");
            if (res && res.errCode === 0) {
                
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error("Fetch all user error!")
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            dispatch(fetchAllUsersFailed());
            console.log('Error', e)
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = (data) => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})

// Delete user with redux

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);

            if (res && res.errCode === 0) {
                toast.success("Delete user succeed! ")
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete user succeed")
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            dispatch(deleteUserFailed());
            console.log('Error', e)
        }
    }
}

export const deleteUserSuccess = () =>({
    type: actionTypes.DELETE_USER_SUCCESS

})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED

})