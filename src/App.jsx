import  './App.css'
import React from "react";
import Card from './layout/Card';
import Primeiro from './components/Primeiro'
import Segundo from './components/Segundo'
import Terceiro from './components/Terceiro'
import Quarto from './components/Quarto'
import Quinto from './components/Quinto'
import Sexto from './components/Sexto'
import Setimo from './components/Setimo'
import Oitavo from './components/Oitavo'

export default () => (
    <div className='App'>
        <h1>Dicionário do Programador</h1>
        <div className='Cards'>
            <Card titulo='#01 - Primeiro' color='#cccc25'>
                <Primeiro/>
            </Card>
            <Card titulo='#02 - Tecnologia' color='#cc2525'>
               <Segundo/>
            </Card>
            <Card titulo='#03 - Tecnologia' color='#2589cc'>
                <Terceiro/>
            </Card>
            <Card titulo='#04 - Tecnologia' color='#cccc25'>
                <Quarto/>
            </Card>
            <Card titulo='#05 - Tecnologia' color='#2589cc'>
                <Quinto/>
            </Card>
            <Card titulo='#06 - Tecnologia' color='#cc2525'>
                <Sexto/>
            </Card>
            <Card titulo='#07 - Tecnologia' color='#2589cc'>
                <Setimo/>
            </Card>
            <Card titulo='#08 - Tecnologia' color='#2546cc'>
                <Oitavo/>
            </Card>
        </div>
    </div>
);