import {
    SET_USER_IS_CONNECTED,
    SET_USER_IS_ADMIN,
} from '../actions/actions';

const initialState = {
    userIsConnected: false,
    userIsAdmin: null,
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
        default:
            return state;
    }
}

export default inputReducer;