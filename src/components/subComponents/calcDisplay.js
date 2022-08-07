import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function CalcDisplay(props) {
    return (
        <div className="calculator-display">
            {props.display !== '' ? props.display : '0'}
        </div>
    )
}

function mapStateToProps(state) {
    const { display } = state.displayReducer;
    return {
        display
    }
}

CalcDisplay = connect(mapStateToProps, actions)(CalcDisplay);

export default CalcDisplay;