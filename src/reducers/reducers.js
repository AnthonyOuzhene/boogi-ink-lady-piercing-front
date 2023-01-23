const inputReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_INPUT':
            return action.payload;
        default:
            return state;
    }
}

export default inputReducer;