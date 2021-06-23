import React, { useState } from 'react';

const MegaSena = (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

    function gerarNumeroNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero) ? gerarNumeroNaoContido(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero)
        .fill(0)
        .reduce(a => [...a, gerarNumeroNaoContido(a)], [])
        .sort((a, b) => a - b)
        setNumeros(novoArray)
    }

    return ( 
        <>
            <h3>Mega-Sena</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    );
}
 
export default MegaSena;