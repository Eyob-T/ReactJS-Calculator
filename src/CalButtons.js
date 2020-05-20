import React from 'react';

function CalButton(props){

    return(
        <div>
            <button id="zero" value="0" onClick={props.displayItem}>0</button>
            <button id="one" value="1" onClick={props.displayItem}>1</button>
            <button id="two" value="2" onClick={props.displayItem}>2</button>
            <button id="three" value="3" onClick={props.displayItem}>3</button>
            <button id="four" value="4" onClick={props.displayItem}> 4</button>
            <button id="five" value="5" onClick={props.displayItem}>5</button>
            <button id="six" value="6" onClick={props.displayItem}>6</button>
            <button id="seven" value="7" onClick={props.displayItem}>7</button>
            <button id="eight" value="8" onClick={props.displayItem}>8</button>
            <button id="nine" value="9" onClick={props.displayItem}>9</button>
            <button id="add" value="+"  onClick={props.displayItem}>+</button>
            <button id="subtract" value="-"  onClick={props.displayItem}>-</button>
            <button id="multiply" value="*"onClick={props.displayItem} >*</button>
            <button id="divide" value="/" onClick={props.displayItem}>/</button>
            <button id="decimal" value="." onClick={props.displayItem}>.</button>
            <button id="clear" value="AC" onClick={props.clearDisplay}>AC</button>
            <button id="equal" value="=" onClick={props.calculate}>=</button>
            
        </div>
    );
}

export default CalButton;