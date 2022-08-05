import React from 'react';

function BaseClock() {

    const [calDisplay, setCalDisplay] = React.useState('');

    function onClick(e) {
        if (calDisplay === '0') {
            clearZero();
        }
        const target = e.target;
        const value = target.value;
        setCalDisplay(calDisplay + value);
        console.log(e.target.value);
    }

    function equalEventHandler(e) {
        const target = e.target;
        const value = target.value;
        setCalDisplay(eval(calDisplay));
    }

    function clearEventHandler(e) {
        const target = e.target;
        const value = target.value;
        setCalDisplay('');
    }

    function clearZero() {
        setCalDisplay('');
    }
    
    return (
        <div>
            <div className="calculator">
                <div className="calculator-display">
                    {calDisplay !== '' ? calDisplay : '0'}
                </div>
                <button onClick={onClick} value='0'>0</button>
                <button onClick={onClick} value='1'>1</button>
                <button onClick={onClick} value='2'>2</button>
                <button onClick={onClick} value='3'>3</button>
                <button onClick={onClick} value='4'>4</button>
                <button onClick={onClick} value='5'>5</button>
                <button onClick={onClick} value='6'>6</button>
                <button onClick={onClick} value='7'>7</button>
                <button onClick={onClick} value='8'>8</button>
                <button onClick={onClick} value='9'>9</button>
                <button onClick={onClick} value='10'>10</button>
                <button onClick={onClick} value='+'>+</button>
                <button onClick={onClick} value='-'>-</button>
                <button onClick={onClick} value='*'>x</button>
                <button onClick={onClick} value='/'>/</button>
                <button onClick={onClick} value='('>(</button>
                <button onClick={onClick} value=')'>)</button>
                <button onClick={clearEventHandler} value='clear'>clear</button>
                <button onClick={equalEventHandler} value='equal'>equal</button>
                
            </div>
        </div>
    );
}

export default BaseClock;