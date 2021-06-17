import React from 'react';

import Primeiro from './Components/basicos/Primeiro.jsx'
import ComParametro from './Components/basicos/ComParametro.jsx'
import ComFilhos from './Components/basicos/ComFilhos'
import Card from './Components/layout/Card'
import Repeticao from './Components/basicos/Repeticao.jsx';
import Condicional from './Components/basicos/Condicional.jsx';
import CondicionalComIf from './Components/basicos/CondicionalComIf.jsx';

import './App.css'

export default (props) => (
    <div className="App">
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={4}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={4}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Fernando</li>
                    <li>Gloria</li>
                    <li>Andre</li>
                    <li>Jorge</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parâmetro">
            <ComParametro 
                titulo="Esse é o título" 
                subtitulo="Esse é o subtitulo"
            />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
    </div>
);