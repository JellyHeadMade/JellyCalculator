import { SET_DISPLAY, EQUAL_DISPLAY, CLEAR_DISPLAY } from "./types"; 

export function setDisplay(display) {
    return {
        type: SET_DISPLAY,
        payload: display
    }
}

export function equateDisplay() {
    return {
        type: EQUAL_DISPLAY,
        payload: ""
    }
}

export function clearDisplay() {
    return {
        type: CLEAR_DISPLAY,
        payload: ""
    }
}