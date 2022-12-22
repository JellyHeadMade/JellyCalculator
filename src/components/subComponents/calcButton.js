import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function CalcButton(props) {

    function playSound() {
        const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3');
        audio.play();
    }

    const onClick = (e) => {
        playSound();
        if (e.target.value === 'equal') {
            props.equateDisplay();
        } else if (e.target.value === 'clear') {
            props.clearDisplay();
        } else {
            props.setDisplay(e.target.value); 
        }
    }
    return (        
        <button className={`Calbutton__${props.button}`} onClick={onClick} value={props.value}>{props.value}</button>   
    )
}

function mapStateToProps(state) {
    const { display } = state.displayReducer;
    return {
        display
    }
}

CalcButton = connect(mapStateToProps, actions)(CalcButton);

export default CalcButton;