export const SET_USER_IS_CONNECTED='SET_USER_IS_CONNECTED';
export const SET_USER_IS_ADMIN='SET_USER_IS_ADMIN';
export const SET_USER_ROLE='SET_USER_ROLE';

export const setUserIsConnected = (newValue) => ({
    type: SET_USER_IS_CONNECTED,
    value: newValue,
});

export const setUserIsAdmin = (newValue) => ({
    type: SET_USER_IS_ADMIN,
    value: newValue,
});






// export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// export const LOGIN_SUCCES = 'LOGIN_SUCCES';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// export const LOGOUT = 'LOGOUT';

// export const submitLogin = () => ({
//   type: SUBMIT_LOGIN,
// });

// export const loginSucces = (token) => ({
//   type: LOGIN_SUCCES,
//   tokenReceived: token,
// });

// export const loginFailure = () => ({
//   type: LOGIN_FAILURE,
// });

// export const logout = () => ({
//   type: LOGOUT,
// });