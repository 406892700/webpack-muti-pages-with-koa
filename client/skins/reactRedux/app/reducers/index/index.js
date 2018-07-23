const indexState = (state = {
    indexState: 'index data',
}, action) => {
    if (action.type === 'CHANGE') {
        return {
            ...state,
            indexState: 12345,
        };
    } else if (action.type === 'SET_VALUE') {
        return {
            ...state,
            indexState: action.value,
        };
    }
    return state;
};

// const reducer = combineReducers({
//     indexData,
// });

export default indexState;
