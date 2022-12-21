import React from 'react';

import CalcDisplay from './subComponents/calcDisplay';
import CalcButton from './subComponents/calcButton';

function ModularClock(props) {
    return (
        <div>
            <div className="calculator">
                
                <CalcDisplay />

                <CalcButton value='0' button='0' />
                <CalcButton value='1' button='1' />
                <CalcButton value='2' button='2' />
                <CalcButton value='3' button='3' />
                <CalcButton value='4' button='4' />
                <CalcButton value='5' button='5' />
                <CalcButton value='6' button='6' />
                <CalcButton value='7' button='7' />
                <CalcButton value='8' button='8' />
                <CalcButton value='9' button='9' />
                <CalcButton value='+' button='10' />
                <CalcButton value='-' button='11' />
                <CalcButton value='*' button='12' />
                <CalcButton value='/' button='13' />
                <CalcButton value='(' button='14' />
                <CalcButton value=')' button='15'/>
                <CalcButton value='.' button='16'/>
                <CalcButton value='clear' button='17'/>
                <CalcButton value='equal' button='18' />
                
            </div>
        </div>
    )
}

export default ModularClock;