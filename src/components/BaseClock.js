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
                <button onClick={onClick} type='button' className='Calbutton__0' value='0'>0</button>
                <button onClick={onClick} type='button' className='Calbutton__1' value='1'>1</button>
                <button onClick={onClick} type='button' className='Calbutton__2' value='2'>2</button>
                <button onClick={onClick} type='button' className='Calbutton__3' value='3'>3</button>
                <button onClick={onClick} type='button' className='Calbutton__4' value='4'>4</button>
                <button onClick={onClick} type='button' className='Calbutton__5' value='5'>5</button>
                <button onClick={onClick} type='button' className='Calbutton__6' value='6'>6</button>
                <button onClick={onClick} type='button' className='Calbutton__7' value='7'>7</button>
                <button onClick={onClick} type='button' className='Calbutton__8' value='8'>8</button>
                <button onClick={onClick} type='button' className='Calbutton__9' value='9'>9</button>
                <button onClick={onClick} type='button' className='Calbutton__10' value='+'>+</button>
                <button onClick={onClick} type='button' className='Calbutton__11' value='-'>-</button>
                <button onClick={onClick} type='button' className='Calbutton__12' value='*'>x</button>
                <button onClick={onClick} type='button' className='Calbutton__13' value='/'>/</button>
                <button onClick={onClick} type='button' className='Calbutton__14' value='('>(</button>
                <button onClick={onClick} type='button' className='Calbutton__15' value=')'>)</button>
                <button onClick={onClick} type='button' className='Calbutton__16' value='.'>.</button>
                <button onClick={clearEventHandler} type='button' className='Calbutton__17' value='clear'>clear</button>
                <button onClick={equalEventHandler} type='button' className='Calbutton__18' value='equal'>equal</button>
                
            </div>
        </div>
    );
}

export default BaseClock;