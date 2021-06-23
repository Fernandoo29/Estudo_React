import React from 'react';

import Primeiro from './Components/basicos/Primeiro.jsx'
import ComParametro from './Components/basicos/ComParametro.jsx'
import ComFilhos from './Components/basicos/ComFilhos'
import Card from './Components/layout/Card'
import Repeticao from './Components/basicos/Repeticao.jsx';
import Condicional from './Components/basicos/Condicional.jsx';
import CondicionalComIf from './Components/basicos/CondicionalComIf.jsx';
import Pai from './Components/comunicacao/direta/Pai.jsx';
import Super from './Components/comunicacao/indireta/Super.jsx';
import Input from './Components/form/Input.jsx';
import Contador from './Components/contador/Contador.jsx';
import MegaSena from './Components/mega-sena/MegaSena.jsx';

import './App.css'

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#11 - Mega-Sena" color="#021542">
                <MegaSena qtdeNumero={8}></MegaSena>
            </Card>

            <Card titulo="#10 - Contador" color="#BCCF3D">
                <Contador passo={1} valor={100}></Contador>
            </Card>

            <Card titulo="#09 - Input" color="#009D97">
                <Input></Input>
            </Card>

            <Card titulo="#08 - Comunicação Indireta" color="#0AA0D9">
                <Super></Super>
            </Card>

            <Card titulo="#07 - Comunicação Direta" color="#83BF17">
                <Pai sobrenome={'Castro'}></Pai>
            </Card>

            <Card titulo="#06 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={4}></CondicionalComIf>
            </Card>

            <Card titulo="#05 - Condicional v1" color="#E94C6F">
                <Condicional numero={4}></Condicional>
            </Card>

            <Card titulo="#04 - Repetição" color="#E8B71A">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#03 - Componente Com Filhos" color="#28ABE3">
                <ComFilhos>
                    <ul>
                        <li>Fernando</li>
                        <li>Gloria</li>
                        <li>Andre</li>
                        <li>Jorge</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Componente Com Parâmetro" color="#5C2D50">
                <ComParametro 
                    titulo="Esse é o título" 
                    subtitulo="Esse é o subtitulo"
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#75EB00">
                <Primeiro/>
            </Card>
        </div>
    </div>
);