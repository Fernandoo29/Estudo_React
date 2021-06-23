import React from 'react';

const Sub = (props) => {

    function acao() {
        props.onClick(Math.random(), 'Gerado')
    };

    return ( 
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
}
 
export default Sub;