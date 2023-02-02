import {
    SET_USER_IS_CONNECTED,
    SET_USER_IS_ADMIN,
    SET_USER_NAME,
} from '../actions/actions';

const initialState = {
    userIsConnected: false,
    userIsAdmin: null,
    userName: null,
};


const inputReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER_IS_CONNECTED:
            return {
                ...state,
                userIsConnected: action.value,
            };
        case SET_USER_IS_ADMIN:
            return {
                ...state,
                userIsAdmin: action.value,
            };
        
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.value,
            };
        default:
            return state;
    }
}

export default inputReducer;