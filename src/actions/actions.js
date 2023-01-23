export const SET_USER_IS_CONNECTED='SET_USER_IS_CONNECTED';

export const setUserIsConnected = (newValue) => ({
    type: SET_USER_IS_CONNECTED,
    value: newValue,
});