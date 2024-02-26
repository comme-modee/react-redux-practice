let initialState = {
    num: 0
}
function reducer(state=initialState, action) {
    console.log("action? : ", action);
    if (action.type === "INCREMENT") {
        return {...state, num: state.num + 1};
    } else if (action.type === "DECREMENT") {
        return {...state, num: state.num - action.payload};
    } else if (action.type === "INCREMENT-TEN") {
        return {...state, num: state.num + action.payload};
    }

    return { ...state };
}

export default reducer;