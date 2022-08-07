import React from 'react';

import CalcDisplay from './subComponents/calcDisplay';
import CalcButton from './subComponents/calcButton';

function ModularClock(props) {
    return (
        <div>
            <div className="calculator">
                
                <CalcDisplay />

                <CalcButton value='0' />
                <CalcButton value='1' />
                <CalcButton value='2' />
                <CalcButton value='3' />
                <CalcButton value='4' />
                <CalcButton value='5' />
                <CalcButton value='6' />
                <CalcButton value='7' />
                <CalcButton value='8' />
                <CalcButton value='9' />
                <CalcButton value='10' />
                <CalcButton value='+' />
                <CalcButton value='-' />
                <CalcButton value='*' />
                <CalcButton value='/' />
                <CalcButton value='(' />
                <CalcButton value=')' />
                <CalcButton value='clear' />
                <CalcButton value='equal' />
                
            </div>
        </div>
    )
}

export default ModularClock;