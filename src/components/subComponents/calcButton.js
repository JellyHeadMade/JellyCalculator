import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function CalcButton(props) {

    const onClick = (e) => {
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