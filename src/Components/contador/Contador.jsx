import React, { Component } from 'react';

import Display from './Display';
import Passo from './Passo';
import Botoes from './Botoes';

import './Contador.css'

class Contador extends Component {
    
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    recebeValor = (valor) => {
        this.setState({
            valor: valor
        })
    }

    recebePasso = (passo) => {
        this.setState({
            passo: passo
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador (Componente baseado em classe)</h2>

                <Passo passo={this.state.passo} onChange={this.recebePasso}></Passo>
                
                <Display valor={this.state.valor}></Display> 

                <Botoes onInc={this.inc} onDec={this.dec} ></Botoes>
            </div>
        )
    }
}

export default Contador;