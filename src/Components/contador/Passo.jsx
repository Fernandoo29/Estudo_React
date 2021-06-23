import React from 'react';

const Passo = (props) => {
    function mudaPasso(passo) {
        props.onChange(passo)
    }

    return ( 
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number" 
                   value={props.passo}
                   onChange={e => mudaPasso(+e.target.value)}
            />
        </div>
    );
}

export default Passo;