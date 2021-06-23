import React from 'react';

const Display = (props) => {
    return ( 
        <div className="DisplayContadorContainer">
            <h4>Valor: {props.valor}</h4>
        </div>
    );
}
 
export default Display;