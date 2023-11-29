import actionTypes from './actionTypes';


 // export khi không có data
export const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE
});

// export khi có data
export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});


export const changeLanguageApp = (languageInput) => ({
    type: actionTypes.CHANGE_LANGUAGE,
    language: languageInput
});