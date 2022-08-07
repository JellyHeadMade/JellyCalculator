import {
    SET_DISPLAY,
    EQUAL_DISPLAY,
    CLEAR_DISPLAY
}   from "../actions/types";

    const initialState = {
        display: ""
    };

export default function displayReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DISPLAY:
            return {
                ...state,
                display: state.display + action.payload
            };
        case EQUAL_DISPLAY:
            return {
                ...state,
                display: (eval(state.display)).toString()
            };
        case CLEAR_DISPLAY:
            return {
                ...state,
                display: ""
            };
        default:
            return state;
    }
}