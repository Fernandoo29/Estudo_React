import React from 'react';

const Botoes = (props) => {

    return ( 
        <div>
            <button onClick={props.onDec}>-</button>
            <button onClick={props.onInc}>+</button>
        </div>
    );
}
 
export default Botoes;