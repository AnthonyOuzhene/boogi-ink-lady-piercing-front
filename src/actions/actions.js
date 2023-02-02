export const SET_USER_IS_CONNECTED='SET_USER_IS_CONNECTED';
export const SET_USER_IS_ADMIN='SET_USER_IS_ADMIN';
export const SET_USER_ROLE='SET_USER_ROLE';
export const SET_USER_NAME='SET_USER_NAME';

export const setUserIsConnected = (newValue) => ({
    type: SET_USER_IS_CONNECTED,
    value: newValue,
});

export const setUserIsAdmin = (newValue) => ({
    type: SET_USER_IS_ADMIN,
    value: newValue,
});

export const SetUserName = (newValue) => ({
    type: SET_USER_NAME,
    value: newValue,
});
